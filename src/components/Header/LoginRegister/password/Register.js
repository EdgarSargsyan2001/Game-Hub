import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from 'react-router-dom';
import './register.css'
import From from '../form/Form'



function Register() {

    const navigate = useNavigate();
    

    function handleRegister (emailRef,passwordRef,email,password){

        
        if(email === "" || password === ""  ) return

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(resp =>{
                // console.log('sd', resp)
                navigate('/')
            })
            .catch(err => {
                switch(err.code){
                    case "auth/email-already-in-use":
                        emailRef.current.setCustomValidity("email-already-in-use")
                        break;

                    case "auth/invalid-email":
                        emailRef.current.setCustomValidity("invalid-email")
                        break;
                
                    case "auth/weak-password":
                        passwordRef.current.setCustomValidity("Password should be at least 6 characters")
                        break;

                    case "auth/network-request-failed":
                        passwordRef.current.setCustomValidity("network-request-failed")
                        break;
                        
                    case "auth/too-many-requests":
                        passwordRef.current.setCustomValidity("weak-password")
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