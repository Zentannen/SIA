
import './App.css';
import React,{useEffect, useState} from 'react';
import Screen from './screens/screen'

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';
import Login from './screens/login'
function App() {
  // if('serviceWorker' in navigator) {
  //   navigator.serviceWorker.register('./sw.js')
  // }
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js');
  });
  let value = useMediaQuery('prefers-color-scheme: dark')
    if(localStorage.getItem('theme')===null){
        localStorage.setItem('theme',value)
    };
    value = undefined;
    if(localStorage.getItem('auth')===null){
      localStorage.setItem('auth',false)
    }
    const [auth,setAuth] = useState(localStorage.getItem('auth')==='true'?true:false)
    const changeAuth = (boolean) => {
      setAuth(boolean)
    }
    const [prefersDarkMode,setPrefersDarkMode] = useState(localStorage.getItem('theme')==='true'?  true:true);
    if(localStorage.getItem('accents')===null){
        localStorage.setItem('accents',JSON.stringify({
          dark:{
            primary:'#5555ff',
            secondary:'#f50057',
            message:'#6666ff'
          },
          light:{
            primary:'#4444ff',
            secondary:'#4444ff',
            message:'#4444ff'
          }
        }))
    }
    const [accents,setAccents] = useState(localStorage.getItem('accents')===null?{ dark:{
            primary:'#5555ff',
            secondary:'#f50057',
            message:'#6666ff'
          },
          light:{
            primary:'#4444ff',
            secondary:'#4444ff',
            message:'#4444ff'
          }}:JSON.parse(localStorage.getItem('accents')))
    const theme = React.useMemo(
        () =>
        createMuiTheme({
            palette: {
            type: prefersDarkMode===true ? 'dark' : 'light',
            background: {
                // light:'#21212125',
                light:'#dedede',
                dark: '#212121',
            },
            primary: {
              light:accents.light.primary,
              main:prefersDarkMode?accents.dark.primary:accents.light.primary,
              dark:accents.dark.primary
            },
            secondary: {
              light:accents.light.secondary,
              main:prefersDarkMode?accents.dark.secondary:accents.light.secondary,
              dark:accents.dark.secondary
            },
            sidebar: {
                light:'#eee',
                // light:'#fefefe',
                dark:'rgb(51, 51, 51)',
                ilight: '#eeeeee00',
                idark:'rgba(51, 51, 51, 0)'
            },
            message: {
              color:prefersDarkMode?accents.dark.message:accents.light.message,
            }
            },
            accents:(prefersDarkMode?accents.dark:accents.light),
            theme:prefersDarkMode
        }),
        [prefersDarkMode,accents],
    );

    const desktop = useMediaQuery(theme.breakpoints.up('sm'))
    // console.log(theme)
    const changeTheme =()=>{
      localStorage.setItem('theme',!prefersDarkMode)
      setPrefersDarkMode(!prefersDarkMode)
      // document.getElementsByTagName("body").style = "background-color:red"
    }
    const changeAccents=(accents)=>{
      let temp = typeof JSON.parse(localStorage.getItem('accents')) === 'object'? JSON.parse(localStorage.getItem('accents')) : {}
      temp[accents.theme?'dark':'light'][accents.type] = accents.color
      localStorage.setItem('accents',JSON.stringify(temp))
      // console.log(temp)
      setAccents(temp)
    }
    useEffect(()=>{
      document.body.style.backgroundColor=theme.theme?'#212121':'#eee'
    })
  return (
    <div style={{display:'flex',width:'100vw',height:'100vh',padding:0,overflow: 'hidden'}} className="App">
      {/* <div style={{height:'300vh',width:'300vw',position:'fixed',left:'-100vw',top:'-100vh',zIndex:-50,backgroundColor:theme.theme?'#444':'#fff'}}/> */}
      <ThemeProvider theme={theme} >
        <div style={{height:'100vh',color:theme?'#eee':'#212121',overflow: 'hidden',}}>
          {/* <div style={{left:0,top:0,zIndex:3000,backgroundColor:'#666',width:'10vh',width:'10vw'}}>{matches.toString()}</div> */}
          {auth===true?
          <Screen desktop={desktop} theme={theme} darkMode={prefersDarkMode} changeAccents={changeAccents} changeTheme={changeTheme} stlye={{width:'100vw',height:'100vh'}}/>
          :
          <Login desktop={desktop} theme={theme} changeAuth={changeAuth}/>
          }
        </div>
      </ThemeProvider>
    </div>
  );
}
export default App;