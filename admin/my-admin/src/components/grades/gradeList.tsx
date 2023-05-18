
import {Datagrid, List, TextField} from 'react-admin';


export const GradeList = () => {
  return (
    <List >
      <Datagrid >
        <TextField source='id' />
        <TextField source='course_id' />
        <TextField source='grade' />
      </Datagrid>
    </List>
  )
}

