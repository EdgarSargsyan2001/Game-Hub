import { useParams } from "react-router-dom";
import { getFirestore } from "firebase/firestore"; 
import { useContext } from "react";

import RockPaperScissors from "./RockPaperScissors/RockPaperScissors";
import PicturesGame from './picturesGame/PicturesGame';
import TicTacToe from "./TicTacToe/TicTacToe.jsx";
import SnakeArea from "./snake/SnakeArea";
import Hangman from "./Hangman/Hangman";
import Game2048 from './game2048/Game2048'
import {hasAccaunt} from '../../App'

import './SingleGame.css'


function SingleGame() {

  const { hesAccaunt } = useContext(hasAccaunt);
  const { gameName } = useParams();
  const accauntData = JSON.parse( localStorage.getItem('AccauntData'))
  const db = getFirestore()


  switch (gameName.toLowerCase()) {
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
        <div className="div-height TicTacToe">
          <TicTacToe accauntData={accauntData} hesAccaunt={hesAccaunt} db={db} />
        </div>
      );
    case "picturesgame":
      
      return (
        <div  className="div-height PicturesGame">
          <PicturesGame accauntData={accauntData} hesAccaunt={hesAccaunt} db={db} />
        </div>
      );
    case "game2048":
    
      return (
        <div  className="div-height game2048">
          <Game2048 accauntData={accauntData} hesAccaunt={hesAccaunt} db={db} />
        </div>
      );

      default:
        return(
          <div className="div-height">There isn't game</div>
        )
  }
}

export default SingleGame;
