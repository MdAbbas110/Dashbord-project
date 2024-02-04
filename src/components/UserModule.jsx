import Box from '@mui/material/Box';
import { DataGridPro } from '@mui/x-data-grid-pro';
import { useDemoData } from '@mui/x-data-grid-generator';

const userModule = () => {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 1000,
    editable: true,
  });

  return (
    <Box sx={{ height: 520, width: '100%' }}>
      <DataGridPro
        {...data}
        loading={data.rows.length === 0}
        rowHeight={38}
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default userModule;
