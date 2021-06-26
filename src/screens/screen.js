import React,{useState} from 'react'
import {Paper,AppBar,Toolbar,makeStyles,IconButton,Drawer,Typography,Divider,Badge,Dialog,Slide, Link} from '@material-ui/core'
import {Menu,Close,Notifications,BlurOn,Flare,Book,Group} from '@material-ui/icons'
import Team from './team'
import Resources from './resources'
import Forecast from './forecast'
import NotificationsGen from './tools/notifications';
const useStyles = makeStyles((theme) => ({
    root:{
        width:'100vw',
        height:'100vh',
        overflow:"scroll"
    },
    AppBar: {
      flexGrow: 1,
    },
    toolbar: {
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between'
    },
    typography:{
        fontWeight:'600'
    }
  }));
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export default function Screen({desktop,theme,database}){
    const classes = useStyles();
    const [screen,setScreen] = useState(0)
    const [sidebarOpen,setSidebarOpen]=useState(false)
    const [notificationScreenOpen,setNotificationScreenOpen]=useState(false)
    const [notification,setNotification]=useState(false)
    const [notificationCount,setNotificationCount]=useState(0)
    const changeSidebarOpen = (boolean) => {
        setSidebarOpen(boolean)
    }
    const changeNotificationScreenOpen = (boolean) => {
        setNotification(0)
        setNotificationScreenOpen(boolean)
    }
    const changeScreen = (value) => {
        if(sidebarOpen===true){
            setSidebarOpen(false)
        }
        if(value===0){
            setNotificationScreenOpen(false)
        }
        if(value===3){
            changeNotificationScreenOpen(true)
        }
        setScreen(value)
    }
    const sidebarList = [
        {
            title:'Forcast',
            icon:<Flare/>
        },
        // {
        //     title:'Conditions',
        //     icon:<BlurOn/>
        // },
        {
            title:'Other resources',
            icon:<Book/>
        },
        {
            title:'The team',
            icon:<Group/>
        },
    ]
    const gapires = () => {
        setNotificationCount(notificationCount+1);

    }
    return(
        <div className={classes.root}>
            <AppBar>
                <Paper elevation={0} square>
                <Toolbar className={classes.toolbar}>
                    <IconButton onClick={()=>changeSidebarOpen(true)} color="secondary">
                        <Menu/>
                    </IconButton>
                    <IconButton onClick={()=>changeNotificationScreenOpen(true)} color="secondary">
                        <Badge badgeContent={notificationCount} color="secondary">
                            <Notifications/>
                        </Badge>
                    </IconButton>
                </Toolbar>
                </Paper>
            </AppBar>
            <Drawer anchor="left" open={sidebarOpen}>
                <div style={{maxWidth:desktop?'90vw':'',width:desktop?'':'100vw', minWidth:'30vw',height:'100vh'}}>
                    <Toolbar className={classes.toolbar}>
                        <Typography>SIA</Typography>
                        <IconButton onClick={()=>changeSidebarOpen(false)} color="secondary">
                            <Close/>
                        </IconButton>
                    </Toolbar>
                    <Divider/>
                    {sidebarList.map((i,ii)=>
                        // console.log(ii == screen);
                        (
                        <>
                            <div style={{backgroundColor:screen==(ii)?theme.theme?'#00000050':'#eee':'',transition:'0.5s'}} onClick={()=>changeScreen(ii)}>
                                <Toolbar className={classes.toolbar} style={{justifyContent:'flex-start'}}>
                                    <IconButton color="secondary">
                                        {i.icon}
                                    </IconButton>
                                    <Typography style={{marginLeft:'7.5px'}}>{i.title}</Typography>
                                </Toolbar>
                            </div>
                            <Divider variant="middle"/>
                        </>
                    ))}
                </div>
            </Drawer>
            <Dialog 
                fullScreen 
                open={notificationScreenOpen} 
                TransitionComponent={Transition}
                keepMounted
                >
                <div className={classes.root} style={{backgroundColor:theme.theme?'#212121':'#eee'}}>
                    <Toolbar/>
                    <div style={{position: 'absolute',top:0,width:'100%'}}>
                        <Paper elevation={0} square>
                            <Toolbar className={classes.toolbar} position='absolute'>
                                <Typography>Noftications</Typography>
                                <IconButton onClick={()=>changeNotificationScreenOpen(false)} color="secondary">
                                    <Close/>
                                </IconButton>
                            </Toolbar>
                        </Paper>
                        <Divider/>
                    </div>
                    <div style={{width:'90vw',margin:'5vh 10vw'}}>
                        <Typography color="secondary" className={classes.typography}>Solar flare</Typography>
                        <Paper style={{width:'80vw',minHeight:desktop?'':'20vh',padding:'2vh 2vw',margin:'1vh 0'}}>
                            {`A solar flare was detected at at Fri Feb 26 2019 11:00:00 GMT+1100, and should reach earth within the next 20 minutes. A solar flare can seriously damage electronics. One can help avoid these damages by unplugging devices or contacting the relative experts.`} Read <Link color="secondary">here</Link> for more.
                        </Paper>
                    </div>

                    <div style={{width:'90vw',margin:'5vh 10vw'}}>
                        <Typography color="secondary" className={classes.typography}>Record high solar winds</Typography>
                        <Paper style={{width:'80vw',minHeight:desktop?'':'20vh',padding:'2vh 2vw',margin:'1vh 0'}}>
                            {`Record high solar winds were detected at Thu Jan 26 2017 11:00:00 GMT+1100, and reached the earth in the 10 minutes after they were detected. These winds destroyed many electronics, and seriously damaged many more others . One can help avoid future damages by unplugging devices or contacting the relative experts.`} Read <Link color="secondary">here</Link> for more.
                        </Paper>
                    </div>

                    <div style={{width:'90vw',margin:'5vh 10vw'}}>
                        <Typography color="secondary" className={classes.typography}>Giant solar flare just misses earth</Typography>
                        <Paper style={{width:'80vw',minHeight:desktop?'':'20vh',padding:'2vh 2vw',margin:'1vh 0'}}>
                            {`A massive solar flare was detected at at Thu Jan 26 2012 11:00:00 GMT+1100, and just missed earth. A solar flare of such magnitude would cause incredible damage and would take 5 to 10 years to repair. There is not much you could do to protect your electronics from a solar flare of this magnitude.`} Read <Link color="secondary">here</Link> for more.
                        </Paper>
                    </div>
                </div>
            </Dialog>
            <Toolbar/>
            <>
            {screen===0?
            <Forecast desktop={desktop} theme={theme} database={database}/>
            :screen===1?
            <Resources/>
            :screen===2?
            <Team desktop={desktop}/>
            :null
            }
            </>
            {notification?
            <NotificationsGen type={'G'}/>
            :null
            }
        </div>
    )
}