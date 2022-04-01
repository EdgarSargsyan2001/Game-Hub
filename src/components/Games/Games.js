import Card from "./HomeGameCard";
import { Link } from "react-router-dom"; 
import { Typography } from "@mui/material";
import './Games.css';

function Games({hesAccaunt}) {
   
    return (
        <div className="Game">
            {
                hesAccaunt ? (
                  <div className="leaderpageDiv">
                  <Link to="/leaderpage">
                    <Typography variant="h4" color="primary" className="leaderpageText">
                      LeaderPage<p className="Accauntext">{hesAccaunt.email}</p>
                    </Typography>
                  </Link>
                </div>

                ) : ''
            
            }
            < Card/>
        </div>
        );
}

export default Games;
