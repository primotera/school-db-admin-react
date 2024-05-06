
import './App.css';
import { Admin, AuthProvider, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

const BASE_URL = 'http://192.168.1.16'

const authProvider: AuthProvider = {
  login: (params) => fetch({
    method: 'POST',
    url:`${BASE_URL}/api/user/login`,
    
  })
} 

function App() {
  return (
<Admin requireAuth={true} authProvider={authProvider} dataProvider={simpleRestProvider('http://192.168.1.16')}>
  <Resource name='schools'></Resource>
</Admin>
  );
}
export default App;