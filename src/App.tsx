
import './App.css';
import { Admin, Resource } from 'react-admin';
import { SchoolCreate, SchoolEdit, SchoolList } from './School';
import { BASE_URL, authProvider } from './authProvider';
import { myDataProvider } from './dataProvider';
import { DomainCreate, DomainEdit, DomainList } from './Domain';
import { FormationCreate, FormationEdit, FormationList } from './Formation';


function App() {
  return (
    <Admin requireAuth={true} authProvider={authProvider} dataProvider={myDataProvider(BASE_URL)}>
      <Resource name='schools'
        create={SchoolCreate}
        list={SchoolList}
        edit={SchoolEdit}
        recordRepresentation={"school_name"}
      ></Resource>
      <Resource
        create={DomainCreate}
        name="subdomains"
        recordRepresentation={"name"}
        list={DomainList}
        edit={DomainEdit}
      ></Resource>
      <Resource
        name="formations"
        list={FormationList}
        edit={FormationEdit}
        create={FormationCreate}
      ></Resource>
      <Resource name="formation_grades" recordRepresentation={"formation_grade"}></Resource>
      <Resource name="users" recordRepresentation={"name"}></Resource>
    </Admin>
  );
}
export default App;
