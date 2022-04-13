import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { Typography } from "@mui/material";
import { hasAccaunt } from '../../App'
import { useContext, useState } from "react";
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloseIcon from '@mui/icons-material/Close';
import { auth } from '../../firebase'


import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import Button from "@mui/material/Button";

import "./Header.css";

function Header() {
  

  const {hesAccaunt,setHasAccount} = useContext(hasAccaunt);
  const [listShow,setListShow] = useState(false)
  const navigate = useNavigate();

  function buttonMoreClick(){

    setListShow(!listShow)

  }

  function handleSingOut(){
    setListShow(false)
    signOut(auth)

    navigate('/')
    setHasAccount(false)

    localStorage.removeItem('AccauntData')
    localStorage.removeItem('AllUserData')
    
  }

  return (
    <div className="header-container">
      <div className="logo">

        <Link to="/">
          <SportsEsportsIcon onClick={()=>setListShow(false)} sx={{ fontSize: 50, color: "#1976D2" }} />
        </Link>

        <Link to="/">
          <Typography  className="GameHubText" variant="h4" color="primary">
            GameHub
          </Typography>
        </Link>
        
        {
          hesAccaunt &&
          <div className="buttonMore">
                 {
                   listShow &&
                   <CloseIcon  onClick={buttonMoreClick} sx={{color:'white',fontSize:50,cursor:'pointer'}}></CloseIcon>
                 }
                 {
                   !listShow &&
                   <DehazeIcon onClick={buttonMoreClick} sx={{color:'white',fontSize:50,cursor:'pointer'}}></DehazeIcon>
                 }
          </div>
        }

        {
          listShow && 
          <div className="listMore" >
            <h3 className="Accauntext2">{hesAccaunt.email}</h3>
            {
              hesAccaunt &&
                <div onClick={()=>setListShow(false)} className="">
                <Link to="/leaderpage">
                  <Typography variant="h4" color="primary" className="leaderpageText">
                    LeaderPage
                  </Typography>
                </Link>
                </div>
            }

          </div>
        }


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
              sx={{title:"dfdfdf"}}

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
