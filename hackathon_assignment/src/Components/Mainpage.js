import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

export default function Mainpage({tableData}){

    const columns = [
        { field: 'name', headerName: 'Name' },
        { field: 'manufacturer', headerName: 'Manufacturer', width: 200 },
        { field: 'model', headerName: 'Model', width: 100 },
        { field: 'fuel', headerName: 'Fuel', width: 100 },
        { field: 'color', headerName: 'Color', width: 100 },
        { field: 'price', headerName: 'Price', width: 100 },
        { field: 'currency', headerName: 'Currency', width: 100 },
        { field: 'city', headerName: 'City', width: 100 },
        { field: 'country', headerName: 'Country', width: 200 }
      ]

    return(
    <>
    <DataGrid 
            rows={tableData}
            columns={columns}
            pageSize={12}
            checkboxSelection
          />
    </>);
}
