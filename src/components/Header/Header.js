import { Typography } from "@mui/material";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { signOut,getAuth } from "firebase/auth";

import "./Header.css";

function Header({hesAccaunt,setHasAccount,setAccauntData}) {
  
  const navigate = useNavigate();
  

  function handleSingOut(){
    const auth = getAuth();
      
      navigate('/')
      setHasAccount(false)
      signOut(auth)
      setAccauntData('')
      
  
  }


  // console.log(hesAccaunt)

  return (
    <div className="header-container">
      <div className="logo">
        
        <Link to="/">
          <SportsEsportsIcon sx={{ fontSize: 50, color: "#1976D2" }} />
        </Link>

        <Link to="/">
          <Typography className="GameHubText" variant="h4" color="primary">
            GameHub
          </Typography>
        </Link>

      </div>

      {
        hesAccaunt &&
          <div className="leaderpageHeader">
          <Link to="/leaderpage">
            <Typography variant="h4" color="primary" className="leaderpageText">
              LeaderPage<p className="Accauntext">{hesAccaunt.email}</p>
            </Typography>
          </Link>
          </div>
      }

      <div>
        
        {
          hesAccaunt ?
            <>
            <Button 
              onClick={handleSingOut} 
              variant="contained"
              className="buttonSize"

            >Log Out</Button>
          
            </>

          :

          <>
            <Link to="/login">
              <Button variant="contained" className="buttonSize">Login</Button>
            </Link>

            <Link to="/register">
              <Button variant="outlined" className="buttonSize">Register</Button>
            </Link>
          </>
          
        }
        
      </div>
    </div>
  );
}

export default Header;
