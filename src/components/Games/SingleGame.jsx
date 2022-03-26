import { useParams } from "react-router-dom";
import Hangman from "./Hangman/Hangman";
import Puzzle from "./Puzzle/Puzzle";
import RockPaperScissors from "./RockPaperScissors/RockPaperScissors";
import TicTacToe from "./TicTacToe/TicTacToe";

function SingleGame() {
  const { gameName } = useParams();

  switch (gameName) {
    case "hangman":
      return (
        <div>
          <Hangman />
        </div>
      );
    case "puzzle":
      return (
        <div>
          <Puzzle />
        </div>
      );
    case "rockpaperscissors":
      return (
        <div>
          <RockPaperScissors />
        </div>
      );
    case "tictactoe":
      return (
        <div>
          <TicTacToe />
        </div>
      );
      default:
        return(
          <div>There isn't game</div>
        )
  }
}

export default SingleGame;
