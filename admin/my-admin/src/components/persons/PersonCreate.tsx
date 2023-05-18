import {Create, DateInput, SelectInput, SimpleForm, TextInput} from 'react-admin';

export const PersonCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="first_name" />
        <TextInput source="last_name" />
        <DateInput label="Enrollment Date" source="hire_date" />
        <DateInput label="Enrollment Date" source="enrollment_date" />
        <SelectInput source="discriminator" choices={[
          {id: 'Instructor', name: 'Instructor'},
          {id: 'Student', name: 'Student'},
        ]} />
      </SimpleForm>
    </Create>
  )
}

