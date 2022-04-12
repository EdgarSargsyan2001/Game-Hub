import { Typography } from "@mui/material";
import { Link } from "react-router-dom"; 
import Card from "./HomeGameCard";
import './Games.css';


function Games({hesAccaunt}) {

    return (

        <div className="Game">
          <div className="gameheader">

          </div>
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
