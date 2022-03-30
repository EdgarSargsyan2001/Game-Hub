import { getAuth, signInWithEmailAndPassword   } from "firebase/auth";
import {useNavigate} from 'react-router-dom';
import From from '../form/Form'
import './login.css'


function Login() {

    const navigate = useNavigate();    
    
    function handleLogin (emailRef,passwordRef,email,password){
        
        if(email === "" || password === ""  ) return

        const auth = getAuth();

        signInWithEmailAndPassword(auth, email, password)
            .then(resp =>{
                // console.log('sd', resp)
                navigate('/')
            })


            .catch((err) => {
                
                switch(err.code){
                    case "auth/invalid-email":
                        emailRef.current.setCustomValidity("invalid-email")
                        break;

                    case "auth/user-disabled":
                        emailRef.current.setCustomValidity("user-disabled")
                        break;
                    case "auth/user-not-found":
                        emailRef.current.setCustomValidity("user-not-found")
                        break;

                    case "auth/wrong-password":
                        passwordRef.current.setCustomValidity("wrong-password")
                        break;
                        
                    case "auth/network-request-failed":
                        passwordRef.current.setCustomValidity("network-request-failed")
                        break;
                    case "auth/too-many-requests":
                        passwordRef.current.setCustomValidity("wrong-password")
                        break;
                    default :
                        passwordRef.current.setCustomValidity("error")
                        break;
                }
                
            })
            
            
    }


    
    return ( 

        <div className="login">
            
            <From 
            
                buttonTitle="SIGN IN"
                handleClick={handleLogin}
                title='LOGIN'
            
            />

        </div>
    
    
    );
}

export default Login;