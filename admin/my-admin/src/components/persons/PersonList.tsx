
import {Box, Card, CardContent} from '@mui/material';
import {
  CreateButton, Datagrid, DateField, DateInput, DeleteButton, EditButton, ExportButton, FilterButton, FilterForm, List, SelectInput, TextField, TextInput, TopToolbar
} from 'react-admin';

const personFilters = [
  <TextInput label="First name" source="first_name" />,
  <TextInput label="Last name" source="last_name" />,
  <SelectInput source="discriminator" choices={[
    {id: 'Student', name: 'Student'},
    {id: 'Instructor', name: 'Instructor'},
  ]} />,
  <DateInput label="Hire date" source="hire_date_gte" />,
  <DateInput label="Enrollment date" source="enrollment_date" />,
];

const ListActions = () => (
  <>
    <TopToolbar>
      <FilterButton filters={personFilters} />
      <CreateButton />
      <ExportButton />
    </TopToolbar>
  </>
);

const FilterSidebar = () => (
  <Box
    sx={{
      display: {
        xs: 'none',
        sm: 'block'
      },
      width: '15em',
      order: -1, // display on the left rather than on the right of the list
      marginRight: '1em',
      paddingTop: '64px'
    }}
  >
    <Card>
      <CardContent>
        <FilterForm filters={personFilters} />
      </CardContent>
    </Card>
  </Box>
);

export const PersonList = () => {
  return (
    <>
      <List actions={<ListActions />} aside={<FilterSidebar />}>
        <Datagrid >
          <TextField source='id' />
          <TextField source='first_name' />
          <TextField source='last_name' />
          <TextField source='discriminator' />
          <DateField source='enrollment_date' />
          <DateField source='hire_date' />
          <EditButton label="Edit" />
          <DeleteButton label="Delete" />
        </Datagrid>
      </List>

    </>
  )
}

