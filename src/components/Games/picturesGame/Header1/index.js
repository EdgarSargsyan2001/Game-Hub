import React from "react";
import { FaRedo } from "react-icons/fa";


import "../picturesGame.css";


const HeaderPictur = ({ moves, bestScore, handleRestart }) => {
  return (
    <div >
      <h1 className="header-pictur">Memory Game</h1>

      <div>
      <div className="sub-header">
          <div className="moves">
            <span className="bold">Moves:</span>
            {moves}
          </div>
          <div className="reshuffle">
            {/* <button 
            onClick={handleRestart}
            className="reshuffle-button"
            >
              <FaRedo />
            </button> */}
          </div>
          {localStorage.getItem("bestScore") && (
            <div className="high-score">
              <span>Best Score:</span>
              {bestScore}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderPictur;
