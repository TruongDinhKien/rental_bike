import {Admin, Resource} from 'react-admin';
import {GradeList} from './components/grades';
import {PersonCreate, PersonEdit, PersonList} from './components/persons';
import {dataProvider} from './provider';
import authProvider from './provider/authProvider';
const App = () => {
  return (
    <Admin
      dataProvider={dataProvider}
      authProvider={authProvider}
    >
      <Resource
        name="api-person"
        list={PersonList}
        edit={PersonEdit}
        create={PersonCreate} />
      <Resource
        name="student-grades"
        list={GradeList} />
    </Admin>
  );
};

export default App;
