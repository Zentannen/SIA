import React from 'react';
import {Paper,Typography} from '@material-ui/core'

import image1 from './data/1.jpeg'
import image2 from './data/2.jpeg'
import image3 from './data/3.jpeg'
import image4 from './data/4.jpeg'
import image5 from './data/5.jpeg'
import logo from './data/logo.jpeg'
export default function Team({desktop}){
    return(
        <div style={{display:'flex',flexDirection:'row',backgroundColor:'#f5f5f5',height:'100%'}}>
            <div stlye={{display:'flex',flexDirection:'row'}}>
                <div>
                    <div style={{padding:'2.5vh 5vw',color:'#212121',marginBottom:desktop?'2.5vw':''}}><Typography variant="h6" align="left">The Team</Typography></div>

                    <div style={{display: 'flex',width:desktop?'60vw':'90vw',padding:'1.25vh 5vw'}}>
                        <div style={{height:'10vh',width:'10vh',borderRadius:'10vh',overflow:'hidden'}}>
                            <img src={image5} style={{width:'100%'}}/>
                        </div>
                        <Paper style={{marginLeft:'5vw',flex:desktop?'':1,textAlign:'flex-start',padding:'1vh',width:desktop?'40vw':''}}>
                            <Typography align='left'>Alissa</Typography>
                            <Typography align='left'>I am final year Maths and Astrophysics student. I managed and lead the project.</Typography>
                        </Paper>
                    </div>

                    <div style={{display: 'flex',width:desktop?'60vw':'90vw',padding:'1.25vh 5vw',flexDirection:'row-reverse'}}>
                        <div style={{marginLeft:'5vw',height:'10vh',width:'10vh',borderRadius:'10vh',overflow:'hidden'}}>
                            <img src={image4} style={{width:'100%'}}/>
                        </div>
                        <Paper style={{flex:desktop?'':1,textAlign:'flex-start',padding:'1vh',width:desktop?'40vw':''}}>
                            <Typography align='left'>Thandabantu</Typography>
                            <Typography align='left'>I am a third year UCT student studying mechatronics. I was Business Strategist for this product.</Typography>
                        </Paper>
                    </div>

                    <div style={{display: 'flex',width:desktop?'60vw':'90vw',padding:'1.25vh 5vw'}}>
                        <div style={{height:'10vh',width:'10vh',borderRadius:'10vh',overflow:'hidden'}}>
                            <img src={image3} style={{width:'100%'}}/>
                        </div>
                        <Paper style={{marginLeft:'5vw',flex:desktop?'':1,textAlign:'flex-start',padding:'1vh',width:desktop?'40vw':''}}>
                            <Typography align='left'>Bruce</Typography>
                            <Typography align='left'>I am final year Maths and Astrophysics student. I managed the the part of the project.</Typography>
                        </Paper>
                    </div>
                    <div style={{display: 'flex',width:desktop?'60vw':'90vw',padding:'1.25vh 5vw',flexDirection:'row-reverse'}}>
                        <div style={{marginLeft:'5vw',height:'10vh',width:'10vh',borderRadius:'10vh',overflow:'hidden'}}>
                            <img src={image1} style={{width:'100%'}}/>
                        </div>
                        <Paper style={{flex:desktop?'':1,textAlign:'flex-start',padding:'1vh',width:desktop?'40vw':''}}>
                        <Typography align='left'>Given</Typography>
                            <Typography align='left'>I am a third year UCT student doing a BSc Mechatronics. I managed the backend developement of this prodject.</Typography>
                        </Paper>
                    </div>
                    <div style={{display: 'flex',width:desktop?'60vw':'90vw',padding:'1.25vh 5vw'}}>
                        <div style={{height:'10vh',width:'10vh',borderRadius:'10vh',overflow:'hidden'}}>
                        <img src={image2} style={{width:'100%'}}/>
                        </div>
                        <Paper style={{marginLeft:'5vw',flex:desktop?'':1,textAlign:'flex-start',padding:'1vh',width:desktop?'40vw':''}}>
                        
                        <Typography align='left'>Joseph</Typography>
                            <Typography align='left'>I am a college student majoring in ComSci. I managed the frontend developement of this prodject.</Typography>
                        </Paper>
                    </div>

            {desktop?
            null:
                    <div style={{height:'2.5vh'}}/>}
                </div>
            </div>
            {desktop?
                <div style={{height:'80vh',justifyContent: 'center',alignItems: 'center',display: 'flex',}}>
                    <img src={logo} style={{width:'20vw'}}/>
                </div>
                :null
                }
        </div>
    )
}