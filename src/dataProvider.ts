
import { DataProvider, fetchUtils } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

const fetchJson = (url: string, options: any = {}) => {
    options.user = {
        authenticated: true,
        // use the token from local storage
        token: 'Bearer ' + localStorage.getItem('token')
    };
    return fetchUtils.fetchJson(url, options);
};
const dataMapper = (v: any) => {
    console.log(v)
    return { data: v.data.data }
}
export const dataProvider = (url: string) => simpleRestProvider(url, fetchJson)
export const myDataProvider: (url: string) => DataProvider = (url) => ({
    ...dataProvider(url),
    getList: (resourceName, params) => fetch(`${url}/${resourceName}`, {
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        }
    })
        .then(response => response.json())
        .then((response: any) => ({
            total: response.data.length,
            data: response.data,
            pageInfo: {
                hasNextPage: false,
                hasPreviousPage: false,
            }
        })),
    create: (resurce, parms) => dataProvider(url).create(resurce, parms).then(dataMapper), 
    getMany: (resurce, parms) => dataProvider(url).getMany(resurce, parms).then(dataMapper), 
    getOne: (resurce, parms) => dataProvider(url).getOne(resurce, parms).then(dataMapper), 
})
