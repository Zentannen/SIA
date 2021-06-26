import React,{useState} from 'react'
import {FormControl,Paper,TextField,Button,Typography,FormControlLabel} from  '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'

const DeskAuth = ({desktop,children}) => {
    if(desktop){
        return(
            <Paper style={{padding:'5vh 5vh 5vh 5vh'}}>
                {children}
            </Paper>
        )
    }
    else{
        return(
            children
        )
    }
}
export default function Login({changeAuth,theme,desktop}){
    const users = [
        {
            username:'dave',
            password:'123'
        }
    ]
    const [input,setInput] = useState({
        username:'',
        password:''
    })
    const changeInput=(key,value)=>{
        setInput({
            ...input,
            [key]:value.target.value
        })
    }
    const check = () => {
        let userIndex = users.findIndex(x=>x.username===input.username)
        if(userIndex!==-1){
            localStorage.setItem('auth',true)
            changeAuth(true)
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event);
      };
    const [usernameFocused,setUserNameFocused]=useState(false)
    const changeUsernameFocused = (boolean) => {
        setUserNameFocused(boolean)
    }
    return(
        <div style={{width:'100vw',height:'100vh',display:'flex',justifyContent:'space-evenly',alignItems:'center',flexDirection:'column'}}>
                <div>
                    <Typography variant='h5' color={theme.theme?'secondary':'primary'}>SIA</Typography>
                </div>
                <DeskAuth desktop={desktop}>
                <FormControl color='secondary' onSubmit={(e)=>check(e)} style={{height:desktop?'':'40vh',width:desktop?'30vw':'100vw'}}>
                    {desktop?
                        <TextField size='large' variant='outlined' onChange={(e)=>changeInput('username',e)} value={input.username} autoFocus={desktop} required label="Username" color={theme.theme?'secondary':'primary'}/>
                    :
                        <div style={{display:'flex',alignItems:'flex-end',margin:`5vh 5vw`}}>
                            <AccountCircle size='large' color={`${usernameFocused?theme.theme?'secondary':'primary':''}`} style={{color:`${usernameFocused?theme.theme?'':'':theme.theme?'':'#212121'}`}}/>
                            <TextField size='large' variant='standard' onChange={(e)=>changeInput('username',e)} value={input.username} autoFocus={!desktop} required label="Username" style={{flex:1}} color={theme.theme?'secondary':'primary'} onFocus={()=>changeUsernameFocused(true)} onBlur={()=>changeUsernameFocused(false)}/>
                        </div>
                    }
                    <div style={{margin:`5vh ${desktop?0:'5vw'}`}}>
                    <TextField onChange={(e)=>changeInput('password',e)} value={input.password} required type='password' label="Password" variant='outlined' color={theme.theme?'secondary':'primary'} style={{width:'100%'}}/>
                    </div>
                    <div>
                        <Button onClick={check} style={{textTransform:'none'}} size='large' variant='contained' color={theme.theme?'secondary':'primary'}>Login</Button>
                    </div>
                </FormControl>
                </DeskAuth>
        </div>
    )
}