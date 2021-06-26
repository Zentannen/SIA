import React,{useState,useEffect} from 'react'
import { Typography,Paper } from '@material-ui/core'

import Chart from 'react-apexcharts'
export default function Forecast({theme,database,desktop}){
    
    const [generalSeries,setGeneralSeries] = useState([
        {
            name: '',
            data: [
            ]
        },
    ]);
    const [generalSeries1,setGeneralSeries1] = useState([
        {
            name: '',
            data: [
            ]
        },
    ]);
    // const [generalSeries2,setGeneralSeries2] = useState([
    //     {
    //         name: '',
    //         data: [
    //         ]
    //     },
    // ]);
    // const [generalSeries3,setGeneralSeries3] = useState([
    //     {
    //         name: '',
    //         data: [
    //         ]
    //     },
    // ]);
    // let currentDay = new Date()
    // let dateArray = [];
    // for(let i=1;i<=30;i++) {
    //     dateArray.push(currentDay.setDate(currentDay.getDate()-1))
    // }
    const [dateArray,setDateArray] = useState([])
    const [dateArray1,setDateArray1] = useState([])
    useEffect(() =>{
        const ref = database.ref('realtime/solar_wind');
        ref.on('value', (snapshot,error) => {
            if(error) {
                console.log(error)
            }
        const data = snapshot.val();
        console.log(data)
        if(data!==null){
        console.log(Object.keys(data))
        let values = Object.values(data)
        let obj = [
            {
                name:'density',
                data:[],
            },
            {
                name:'speed',
                data:[],
            },
        ]
        values.slice(values.length-100,values.length).map((i,ii) => {
            obj[0].data[ii]=parseInt(i.dens)
            // obj[1].data[ii]=parseInt(i.dsflag)
            obj[1].data[ii]=parseInt(i.speed)
            // obj[3].data[ii]=parseInt(i.temperature)
        })
        setDateArray(Object.keys(data).slice(Object.keys(data).length-100,Object.keys(data).length))
        setGeneralSeries(obj)
        console.log(obj)
        }
        })
        const xrayref = database.ref('realtime/x_ray_flux');
        xrayref.on('value', (snapshot) => {
        const xraydata = snapshot.val();
        if(xraydata!==null){
            console.log(Object.keys(xraydata))
            let values = Object.values(xraydata)
            let obj = [
                {
                    name:'flux',
                    data:[],
                },
            ]
            values.map((i,ii) => {
                obj[0].data[ii]=parseInt(i.flux)
                // obj[1].data[ii]=parseInt(i.dsflag)
                // obj[1].data[ii]=parseInt(i.energy)
                // obj[3].data[ii]=parseInt(i.temperature)
            })
            setDateArray1(Object.keys(xraydata))
            setGeneralSeries1(obj)
            console.log(obj)
            }
        })
        // obj.map(key => {
        //     return data[key];
        // })
    },[])
    return(
        <div style={{margin:'5vh 5vw',width:'90vw',height:desktop?'100vh':'',display:'flex',justifyContent: 'flex-start',flexDirection:'column',alignItems: 'start'}}>
            <Typography variant="h6" color="secondary">Forecast</Typography>
            <div style={{display:desktop?'flex':'',height:desktop?'80%':'',alignItems: 'center'}}>
            <Paper style={{width:desktop?'42.5vw':'90vw',height:desktop?'60vh':'60vw',marginRight:desktop?'5vw':'',marginBottom:desktop?'':'5vh'}}>
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
                                        text: "Density & speed",
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
                                    colors:[theme.theme?'#F44336':'#4444ff', '#8888ff', '#9C27B0'],
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
            <Paper style={{width:desktop?'42.5vw':'90vw',height:desktop?'60vh':'60vw'}}>
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
                                        text: "Flux",
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
                                    colors:[theme.theme?'#F44336':'#4444ff', '#8888ff', '#9C27B0'],
                                    dataLabels: {
                                        enabled: false,
                                    },
                                    stroke: {
                                        curve: 'smooth'
                                    },
                                    xaxis: {
                                        type: 'datetime',
                                        categories: dateArray1
                                    },
                                    tooltip: {
                                        x: {
                                            format: 'dd/MM/yy'
                                        },
                                    },
                                }
                            } 
                            series={
                                generalSeries1
                            } 
                            type="area" 
                            height={"100%"} 
                        />
                        </Paper>
                        </div>
        </div>
    )
}
