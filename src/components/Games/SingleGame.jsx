import { useParams } from "react-router-dom";
import { getFirestore } from "firebase/firestore"; 
import { useContext } from "react";

import RockPaperScissors from "./RockPaperScissors/RockPaperScissors";
import TicTacToe from "./TicTacToe/TicTacToe";
import SnakeArea from "./snake/SnakeArea";
import Hangman from "./Hangman/Hangman";
import {hasAccaunt} from '../../App'

import './SingleGame.css'


function SingleGame() {

  const { hesAccaunt } = useContext(hasAccaunt);
  const { gameName } = useParams();
  const accauntData = JSON.parse( localStorage.getItem('AccauntData'))
  const db = getFirestore()


  switch (gameName) {
    case "hangman":
      return (
        
        <div className="div-height hangman" >
          <Hangman accauntData={accauntData} hesAccaunt={hesAccaunt} db={db}/>
        </div>
        
      );
    case "snake":
      return (
        <div className="div-height snakeGame">
          <SnakeArea accauntData={accauntData} hesAccaunt={hesAccaunt} db={db} />
        </div>
      );
    case "rockpaperscissors":
      return (
        
        <div className="div-height rockpaperscissors">
          <RockPaperScissors accauntData={accauntData} hesAccaunt={hesAccaunt} db={db} />
        </div>
      );
    case "tictactoe":
      return (
        <div className="div-height">
          <TicTacToe />
        </div>
      );
      default:
        return(
          <div className="div-height">There isn't game</div>
        )
  }
}

export default SingleGame;
