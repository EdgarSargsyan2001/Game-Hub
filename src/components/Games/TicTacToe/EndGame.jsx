import React from "react";


export default function EndGame({restGame_clHistory,hesAccaunt,winCount,gamewinwr,draw}){

  
  return(
  <div className="end-game-screen">  

    {!draw && <span className="win-text">{!gamewinwr ? "O WON" : "X WON"}</span>}
    {draw && <span className="win-text">DRAW GAME</span>}
    
    <span className="win-history">
        X's WINS: {winCount.X}
        <br/>
        O's WINS: {winCount.O}  
    </span>  
    <button className="btn" onClick={restGame_clHistory}>RESTART GAME </button>
    {
     !hesAccaunt &&
      <button className="btn clbtn" onClick={()=>restGame_clHistory("cl_History")}>CLEAR HISTORY</button>
    }
     
  </div>
)

}
