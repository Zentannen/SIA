import React,{useState} from 'react'
import { Typography,Paper } from '@material-ui/core'

import Chart from 'react-apexcharts'
export default function Forecast({theme}){
    const [generalSeries,setGeneralSeries] = useState([
        {
            name: 'Geographical',
            data: [
                39,20,31,32,40,
                40,76,82,80,28,
                12,21,40,12,37,
                37,41,20,19,30,
                25,10,31,15,23,
                23,35,43,37,29
            ]
        }, 
        // {
        //     name: 'Contacts',
        //     data: [
        //         0,0,0,0,0,
        //         0,0,0,0,0,
        //         0,0,0,0,0,
        //         0,0,0,0,0,
        //         0,0,0,0,0,
        //         0,0,0,0,0
        //     ]
        // }
    ]);
    let currentDay = new Date()
    let dateArray = [];
    for(let i=1;i<=30;i++) {
        dateArray.push(currentDay.setDate(currentDay.getDate()-1))
    }
    return(
        <div style={{margin:'5vh 5vw',width:'90vw',display:'flex',justifyContent: 'flex-start',flexDirection:'column',alignItems: 'start'}}>
            <Typography variant="h6" color="secondary">Forecast</Typography>
            <Paper style={{width:'100%',height:'60vw'}}>
                <Chart 
                            options={
                                {
                                    chart: {
                                        height: "50%",
                                        type: 'area',
                                        toolbar: {
                                            show: false,
                                        },
                                        background: '#ffffff00',
                                        overflow:'shown',
                                        offsetX: 0
                                    },
                                    title: {
                                        text: "Prediction",
                                        align: 'center',
                                        style: {
                                            fontSize:  '16px',
                                            fontWeight:  'semibold',
                                            fontFamily:  [
                                                '-apple-system',
                                                'BlinkMacSystemFont',
                                                '"Segoe UI"',
                                                'Roboto',
                                                '"Helvetica Neue"',
                                                'Arial',
                                                'sans-serif',
                                                '"Apple Color Emoji"',
                                                '"Segoe UI Emoji"',
                                                '"Segoe UI Symbol"',
                                            ].join(','),
                                            color:  theme.theme?'#eee':'#212121'
                                        },
                                    },
                                    theme: {
                                        mode: theme.theme?'dark':'light',
                                    },
                                    colors:['#F44336', '#E91E63', '#9C27B0'],
                                    dataLabels: {
                                        enabled: false,
                                    },
                                    stroke: {
                                        curve: 'smooth'
                                    },
                                    xaxis: {
                                        type: 'datetime',
                                        categories: dateArray
                                    },
                                    tooltip: {
                                        x: {
                                            format: 'dd/MM/yy'
                                        },
                                    },
                                }
                            } 
                            series={
                                generalSeries
                            } 
                            type="area" 
                            height={"100%"} 
                        />
            </Paper>
        </div>
    )
}
// power line - geomagnetic stom
// navigation- interupted and inaccurate
// mobile phones nozy
// interuptions on calls
/*
long distance communication between aircrafts to air traffic controler
*/