import { useEffect, useRef, useState } from "react"
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button"
import './form.css'

function Form ({buttonTitle,handleClick,title}) {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [emailError,setEmailError] = useState(false)
    const [passwordError,setPasswordError] = useState(false)
    const [emailErrorText,setEmailErrorText] = useState('')
    const [passwordErrorText,setPasswordErrorText] = useState('')


   
    function onSubmit(e){

        e.preventDefault()
        handleClick(email,password,setEmailError,setPasswordError,setEmailErrorText,setPasswordErrorText)

    }


    useEffect(()=>{

        setEmailError(false)
        setPasswordError(false)
        setEmailErrorText('')
        setPasswordErrorText('')
        

    },[email,password])

    return(
        <div className="form-div">
         <form  className="form" onSubmit={(e)=>onSubmit(e)}>
            <h2 className="title">{title}</h2>

            <TextField
                type='email'
                label="Email"
                name='email'
                className="emailInput"
                error={emailError}
                helperText={emailErrorText}
                // required
                autoFocus
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
            
            />
           
            <TextField
                type='password'
                label="Password"
                name='password'
                className="passwordInput"
                error={passwordError}
                helperText={passwordErrorText}
                // required
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                
            />
            
            
            <Button type="submit" variant="contained" className="buttonLogReg">{buttonTitle}</Button>

         </form>

        </div>
    )
}

export default Form