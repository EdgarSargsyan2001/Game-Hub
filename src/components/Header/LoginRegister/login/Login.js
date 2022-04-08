import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom'
import From from '../form/Form'
import './login.css'


function Login() {

    const navigate = useNavigate();    
    
    function handleLogin (
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

        const auth = getAuth();

        signInWithEmailAndPassword(auth, email, password)
            .then(resp =>{
                // console.log('sd', resp)
                navigate('/')
            })

            .catch( (err) => {
                
                switch(err.code){
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                    case "auth/invalid-email":
                        setEmailError(true)
                        setEmailErrorText("invalid-email")
                        break;


                    case "auth/wrong-password":
                    case "auth/network-request-failed":
                    case "auth/too-many-requests":
                        setPasswordError(true)
                        setPasswordErrorText("wrong-password")
                        break;


                    default :
                        setEmailError(true)
                        setEmailError("error")
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