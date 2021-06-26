import React from 'react';
import {Link,Typography} from '@material-ui/core';
export default function Resources(theme){
    return(
        <div align="left" style={{width:'90vw',padding:'2.5vh 5vw',color:'#212121'}}>
            <Typography variant="h6">Resources</Typography>
            <Typography style={{fontWeight:"bolder"}}>Space Weather Prediction Center</Typography>
            <div>
                <Typography variant='body1'>We used these api's to help realise when there is Solar wind that would significantly affect the earth. Click  
                <Link color="secondary" href="https://www.swpc.noaa.gov/"> here</Link> for more information about SWPC. Click  
                <Link color="secondary" href="https://spaceweather.com/"> here</Link>,<Link color="secondary" href="https://www.spaceweatherlive.com/"> here</Link> ,or <Link color="secondary" href="https://swe.ssa.esa.int/gen_arv"> here</Link> for more information about similar api's.</Typography>
            </div>
        </div>
    )
}