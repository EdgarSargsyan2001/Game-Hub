import { useEffect, useRef, useState } from "react"
import './form.css'

function Form ({buttonTitle,handleClick,title}) {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const emailRef = useRef()
    const passwordRef = useRef()

   
    function onSubmit(e){

        e.preventDefault()
        handleClick(emailRef,passwordRef,email,password)

    }


    useEffect(()=>{

        emailRef.current.setCustomValidity("")
        passwordRef.current.setCustomValidity("")

    },[email,password])

    return(
        <div className="form-div">
         <form  className="form" onSubmit={(e)=>onSubmit(e)}>
            <h2 className="title">{title}</h2>

            <input 
                type='email'
                name='email'
                className="emailInput"
                placeholder="email"
                ref={emailRef}
                required
                autoFocus
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                
            />
            <input 
                type='password'
                name='password'
                ref={passwordRef}
                className="passwordInput"
                placeholder="password"
                value={password}
                required
                onChange={(e)=> setPassword(e.target.value)}
                
            />
            
            <button className="button">{buttonTitle}</button>

         </form>

        </div>
    )
}

export default Form