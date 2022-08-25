import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useState,useEffect } from 'react';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'NAME', width: 170 },
    { field: 'manufacturer', headerName: 'MANUFACTURER', width: 170 },
    { field: 'model', headerName: 'MODEL', width: 170 },
    { field: 'fuel', headerName: 'FUEL', width: 170 },
    { field: 'coloe', headerName: 'COLOR', width: 170 },
    { field: 'price', headerName: 'PRICE', width: 170 },
    { field: 'currency', headerName: 'CURRENCY', width: 170 },
    { field: 'city', headerName: 'CITY', width: 170 },
    { field: 'country', headerName: 'COUNTRY', width: 170 },

];
export default function Mainpage() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    let vehiclelist = true;

    useEffect(() => {
        const getVehicles = async () => {
            const response = await fetch("https://63037d409eb72a839d824580.mockapi.io/Vehicle");
            if (vehiclelist) {
                setData(await response.clone().json());
                setFilter(await response.json());
                console.log(filter)

            }
            return 
        }
        getVehicles();
    }, []);
    useEffect(() => {
        const getVehicles = async () => {
            const response = await fetch("https://63037d409eb72a839d824580.mockapi.io/Vehicle");
            if (vehiclelist) {
                setData(await response.clone().json());
                setFilter(await response.json());
                console.log(filter)

            }
            return 
        }
        getVehicles();
    }, []);

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    );
}
