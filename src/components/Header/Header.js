import { Typography } from "@mui/material";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { signOut,getAuth } from "firebase/auth";

import "./Header.css";

function Header({hesAccaunt,setHasAccount,setAccauntData}) {
  
  
  function handleSingOut(){

    const auth = getAuth();
    
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
          <Typography variant="h4" color="primary">
            GameHub
          </Typography>
        </Link>

      </div>
      {
        hesAccaunt ? (
          <Link to="/leaderpage">
            <Typography variant="h6" color="primary">
              LeaderPage
            </Typography>
          </Link>
          
        ) : ''
        
      }

      <div>
        
        {
          hesAccaunt ?
          
            <Button 
              onClick={handleSingOut} 
              variant="contained"
              
            >Log Out</Button>

          :

          <>
            <Link to="/login">
              <Button variant="contained">Login</Button>
            </Link>

            <Link to="/register">
              <Button variant="outlined">Register</Button>
            </Link>
          </>
          
        }
        
      </div>
    </div>
  );
}

export default Header;
