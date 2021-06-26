import React from 'react';
import {Paper,Typography} from '@material-ui/core'

import image1 from './data/1.jpeg'
import image2 from './data/2.jpeg'
import image3 from './data/3.jpeg'
import image4 from './data/4.jpeg'
export default function Team(){
    return(
        <div>
            <div style={{padding:'2.5vh 5vw'}}><Typography variant="h6" align="left">The Team</Typography></div>
            <div style={{display: 'flex',width:'90vw',padding:'1.25vh 5vw'}}>
                <div style={{height:'10vh',width:'10vh',borderRadius:'10vh',overflow:'hidden'}}>
                <img src={image1} style={{height:'100%'}}/>
                </div>
                <Paper style={{marginLeft:'5vw',flex:1,textAlign:'flex-start',padding:'1vh',}}>
                    <Typography align='left'>Given</Typography>
                    <Typography align='left'>I am a third year UCT student doing a BSc Mechatronics. I managed the backend developement of this prodject.</Typography>
                </Paper>
            </div>
            <div style={{display: 'flex',width:'90vw',padding:'1.25vh 5vw',flexDirection:'row-reverse'}}>
                <div style={{marginLeft:'5vw',height:'10vh',width:'10vh',borderRadius:'10vh',overflow:'hidden'}}>
                    <img src={image2} style={{width:'100%'}}/>
                </div>
                <Paper style={{flex:1,textAlign:'flex-start',padding:'1vh',}}>
                    <Typography align='left'>Joseph</Typography>
                    <Typography align='left'>I am a college student majoring in ComSci. I managed the frontend developement of this prodject.</Typography>
                </Paper>
            </div>
            <div style={{display: 'flex',width:'90vw',padding:'1.25vh 5vw'}}>
                <div style={{height:'10vh',width:'10vh',borderRadius:'10vh',overflow:'hidden'}}>
                    <img src={image3} style={{width:'100%'}}/>
                </div>
                <Paper style={{marginLeft:'5vw',flex:1,textAlign:'flex-start',padding:'1vh',}}>
                    <Typography align='left'>Bruce</Typography>
                    <Typography align='left'>I am final year Maths and Astrophysics student. I managed the the part of the project.</Typography>
                </Paper>
            </div>
            <div style={{display: 'flex',width:'90vw',padding:'1.25vh 5vw',flexDirection:'row-reverse'}}>
                <div style={{marginLeft:'5vw',height:'10vh',width:'10vh',borderRadius:'10vh',overflow:'hidden'}}>
                    <img src={image4} style={{width:'100%'}}/>
                </div>
                <Paper style={{flex:1,textAlign:'flex-start',padding:'1vh',}}>
                    <Typography align='left'>Thandabantu</Typography>
                    <Typography align='left'>I am a third year UCT student studying mechatronics. I managed the backend developement of this product.</Typography>
                </Paper>
            </div>
            <div style={{height:'2.5vh'}}/>
        </div>
    )
}