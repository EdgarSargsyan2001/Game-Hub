import { useParams } from "react-router-dom";
import Hangman from "./Hangman/Hangman";
import Puzzle from "./Puzzle/Puzzle";
import RockPaperScissors from "./RockPaperScissors/RockPaperScissors";
import TicTacToe from "./TicTacToe/TicTacToe";
import { useEffect } from "react";
import { getFirestore,collection, getDocs,setDoc,doc} from "firebase/firestore"; 
import './SingleGame.css'


function SingleGame({hesAccaunt,accauntData,setAccauntData}) {


  const { gameName } = useParams();
  const db = getFirestore()


  // console.log(accauntData)



  switch (gameName) {
    case "hangman":
      return (
        
        <div className="div-height">
          <Hangman accauntData={accauntData} hesAccaunt={hesAccaunt} db={db}/>
        </div>
        
      );
    case "puzzle":
      return (
        <div className="div-height">
          <Puzzle accauntData={accauntData} hesAccaunt={hesAccaunt} db={db}/>
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
