import { createUserWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from 'react-router-dom';
import { auth } from '../../../../firebase/firebase'
import From from '../form/Form'

import './register.css'



function Register() {

    const navigate = useNavigate();
    

    function handleRegister (
        email,
        password,
        setEmailError,
        setPasswordError,
        setEmailErrorText,
        setPasswordErrorText
        ){

        
        if(email === "" || password === ""  ) {

            if(password === "") setPasswordError(true) 
            if(email === "") setEmailError(true)
            return
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(resp =>{
                // console.log('sd', resp)
                navigate('/')
            })
            .catch(err => {
                switch(err.code){
                    case "auth/email-already-in-use":
                    case "auth/invalid-email":
                        setEmailError(true)
                        setEmailErrorText("invalid-email")
                        break;
                
                    case "auth/weak-password":
                        setPasswordError(true)
                        setPasswordErrorText("Password should be at least 6 characters")
                        break;

                    case "auth/network-request-failed":
                    case "auth/too-many-requests":
                        setPasswordError(true)
                        setPasswordErrorText("weak-password")
                        break;

                    default :
                        setEmailError(true)
                        setEmailError("error")
                        break;    
                }
        })

    }


    return ( 

        <div className="register">

            <From 
                buttonTitle="REGISTER"
                handleClick={handleRegister}
                title='REGISTER'

            />

        </div>
    
    
    );
}

export default Register;