import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Checkbox from '@mui/material/Checkbox';
import { DataGrid } from '@mui/x-data-grid';
import Drawer from '@mui/material/Drawer';
import Mainpage from './Components/Mainpage';
import DrawerContent from './Components/DrawerContent';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import SsidChartIcon from "@mui/icons-material/SsidChart";

import GridViewIcon from "@mui/icons-material/GridView";
function Homepage() {
  const [tableData, setTableData] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch("https://63037d409eb72a839d824580.mockapi.io/Vehicle")
      .then((data) => data.json())
      .then((data) => setTableData(data))
  }, []);
  console.log(tableData)
  
  const [alignment, setAlignment] = React.useState('left');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <div className='main-container'>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box
          sx={{ bgcolor: '#fff', height: '100vh' }}
        >
          <Grid container spacing={{ xs: 12, md: 2 }} >
            <Grid item xs={2} padding={3}>
              <Typography variant='h5'>Vehicle List</Typography>
            </Grid>
            <Grid item xs={7}>
              <Button variant="contained" startIcon={<AddIcon />} onClick={() => setOpen(true)}>Add Vehicle</Button>
              <Drawer open={open} anchor={"right"} onClose={() => setOpen(false)}>
                <DrawerContent ></DrawerContent>
              </Drawer>
            </Grid>
            <Grid item xs={3}>
            <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
      sx={{display: 'flex-end'}}
    >
      <ToggleButton value="web">{<GridViewIcon/>}</ToggleButton>
      <ToggleButton value="android">{<SsidChartIcon/>}</ToggleButton>
    </ToggleButtonGroup>
            </Grid>
          </Grid>
          <Mainpage tableData={tableData}></Mainpage>
        </Box>
      </Container>
    </div>
  );
}

export default Homepage;
