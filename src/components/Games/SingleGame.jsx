import { useParams } from "react-router-dom";
import Hangman from "./Hangman/Hangman";
import SnakeArea from "./snake/SnakeArea";
import RockPaperScissors from "./RockPaperScissors/RockPaperScissors";
import TicTacToe from "./TicTacToe/TicTacToe";
import { getFirestore} from "firebase/firestore"; 
import './SingleGame.css'


function SingleGame({hesAccaunt,accauntData,setAccauntData}) {


  const { gameName } = useParams();
  const db = getFirestore()


  switch (gameName) {
    case "hangman":
      return (
        
        <div className="div-height">
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
