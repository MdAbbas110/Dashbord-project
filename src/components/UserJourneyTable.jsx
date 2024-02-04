import { Avatar } from '@mui/material';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import user from '../assets/Ellipse.png';

const columns = [
  {
    field: 'users',
    headerName: 'user',
    headerClassName: 'super-app-theme--header',
    width: 150,
    renderCell: () => <Avatar src={user} />,
  },
  {
    field: 'id',
    headerName: 'ID',
    headerClassName: 'super-app-theme--header',
    width: 90,
  },
  {
    field: 'firstName',
    headerName: 'First name',
    headerClassName: 'super-app-theme--header',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    headerClassName: 'super-app-theme--header',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    headerClassName: 'super-app-theme--header',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    headerClassName: 'super-app-theme--header',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 180,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    headerClassName: 'super-app-theme--header',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 180,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    headerClassName: 'super-app-theme--header',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 180,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    headerClassName: 'super-app-theme--header',
    width: 150,
    editable: true,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const UserJourneyTable = () => {
  return (
    <Box
      sx={{
        height: 600,
        width: '100%',
        '& .super-app-theme--header': {
          backgroundColor: '#F5F6F7',
        },
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{}}
        // pageSizeOptions={[5]}
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default UserJourneyTable;
