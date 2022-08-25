import React,{ useEffect, useState} from 'react';
import '../App.css';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import OutlinedInput from '@mui/material/OutlinedInput';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
 
export default function DrawerContent() {
    const[name,setName]=useState('');
    const[manufacturer,setManufacturer]=useState('');
    const[model,setModel]=useState('');
    const[price,setPrice]=useState('');
    const[fuel,setFuel]=useState('');
    const[color,setColor]=useState('');
    const[city,setCity]=useState('');
    const[country,setCountry]=useState('');
    const[currency,setCurrency]=useState('');
    const [vehiclelist,setVehicleList]=useState('')

    useEffect(()=>{
        fetch('https://63037d409eb72a839d824580.mockapi.io/Vehicle')
        .then(response =>response.json())
        .then(response=>{
            setVehicleList(response.message)
        })
    },[]);
    const handleSubmit=(e)=>{
        e.preventDefault();
        const dataToSubmit={
            name,
            manufacturer,
            model,
            fuel,
            color,
            price,
            currency,
            city,
            country
        }
        fetch('https://63037d409eb72a839d824580.mockapi.io/Vehicle',
        {
            method:"POST",
            headers:{
                'Content-type':'application/json:charset-UTF-8',
            },
            body:JSON.stringify(dataToSubmit)
        }
        ).then(response=>response.json())
        .then(response=>{
alert('Form submitted successfully')        })

    }
    

    return (
        <>  
            <Container sx={{bg:'#FFFFFF'}}>
            <Grid container spacing={54} 
             padding={5}>
                <Grid item md={12} 
               
                >
                    <Typography variant='h4' className='drawer-title'>Add a Vehicle</Typography>
                    <Typography variant='p' className='drawer-p' style={{marginBottom:'2rem'}}>* All fields are mandatory</Typography>
                    <form method='post' action='#' onSubmit={handleSubmit} >
                        <Container sx={{display: 'flex', flexDirection: 'column',justifyContent: 'center'}}>
                        <TextField
                            sx={{marginBottom:'1rem'}}
                            id="outlined-name"
                            label="Name"
                          value={name}
                          onChange={(e)=>setName(e.target.value)}
                        />
                        <TextField
                            sx={{marginBottom:'1rem'}}
                            id="outlined-name"
                            label="Manufacturer"
                          value={manufacturer}
                          onChange={(e)=>setManufacturer(e.target.value)}
                        />
                        <TextField
                            sx={{marginBottom:'1rem'}}
                            id="outlined-name"
                            label="Model"
                          value={model}
                          onChange={(e)=>setModel(e.target.value)}
                        />
                        <TextField
                            sx={{marginBottom:'1rem'}}
                            id="outlined-name"
                            label="Fuel"
                          value={fuel}
                          onChange={(e)=>setFuel(e.target.value)}
                        />
                        <TextField
                            sx={{marginBottom:'1rem'}}
                            id="outlined-name"
                            label="Colour"
                          value={color}
                          onChange={(e)=>setColor(e.target.value)}
                        />
                        <TextField
                            sx={{marginBottom:'1rem'}}
                            id="outlined-name"
                            label="Price"
                          value={price}
                          onChange={(e)=>setPrice(e.target.value)}
                        />
                        <TextField
                            sx={{marginBottom:'1rem'}}
                            id="outlined-name"
                            label="Currency"
                          value={currency}
                          onChange={(e)=>setCurrency(e.target.value)}
                        />
                        <TextField
                            sx={{marginBottom:'1rem'}}
                            id="outlined-name"
                            label="City"
                          value={city}
                          onChange={(e)=>setCity(e.target.value)}
                        />
                        <TextField
                            sx={{marginBottom:'1rem'}}
                            id="outlined-name"
                            label="Country"
                          value={country}
                          onChange={(e)=>setCountry(e.target.value)}
                        />
                        <Grid>
                        <Button variant='contained' startIcon={<AddIcon/>}>Add Vehicle</Button>
                        <Button variant="outlined" >Cancel</Button>
                        </Grid>
                        </Container>
                    </form>
                </Grid>
            </Grid>
            </Container>
        </>
    );
}