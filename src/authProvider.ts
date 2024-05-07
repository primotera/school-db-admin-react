import { AuthProvider, UserIdentity } from "react-admin";

export const BASE_URL =  process.env.BASE_URL || 'https://schools.acadec.net/api'

export const authProvider: AuthProvider = {
    login: (params) => postData(`${BASE_URL}/user/login`, { email: params.username, password: params.password }).then(response => {
        localStorage.setItem('user', JSON.stringify(response.user));
        localStorage.setItem('token', response.token)
        return response
    }),
    logout: () => Promise.resolve().then(() => localStorage.clear()),
    checkAuth: (params) => !!localStorage.getItem('token') ? Promise.resolve() : Promise.reject(),
    getIdentity: async () => {
        const user = JSON.parse(localStorage.getItem('user') ?? '{}');
        const identity: UserIdentity = {
            id: user?.id,
            fullName: user?.name, avatar: undefined
        }
        return identity
    },
    checkError: async error => console.error(error),
    getPermissions: async params => console.log("getpermissions", params)
}

export async function postData(url = "", data = {}) {
    // Default options are marked with *
    
    const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    if (![200, 201].includes(response.status)) throw Error((await response.json()).message)
    return response.json(); // parses JSON response into native JavaScript objects
}