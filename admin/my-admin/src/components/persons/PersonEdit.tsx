import {EditBase, required, Resource, SimpleForm, TextInput} from 'react-admin';
import {useParams} from 'react-router-dom';
import {GradeList} from '../grades';
export const PersonEdit = () => {
  const {id} = useParams();
  const transform = (data: any) => {
    delete data.hire_date
    delete data.enrollment_date
    return (data);
  }

  return (<>
    <EditBase transform={transform}>
      <SimpleForm>
        <TextInput disabled label="Id" source="id" />
        <TextInput source="first_name" validate={required()} />
        <TextInput source="last_name" validate={required()} />
      </SimpleForm>
    </EditBase>
    <Resource
      name={`people/${id}/student-grades`}
      list={GradeList} />
  </>
  );
}
