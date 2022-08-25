import React from 'react';
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
import Drawercontent from './Drawercontent'


export default function Homepage() {
    return (
        <>
            <div className='container' >
           
                <div className='main-content' >
                <h2>Vehicle List</h2>
                <button className='addvehiclebtn' onClick={()=>Drawercontent()}> <span className="addIcon">+</span>Add Vehicle</button>
                    
                </div>
                



            </div>


        </>
    )
}






