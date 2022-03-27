import { useNavigate } from "react-router-dom";
import Card from "./HomeGameCard";
function Games() {
    const games = ["hangman", "puzzle", "rockpaperscissors", "tictactoe"];

    
    const navigate = useNavigate();

    const handleListItemClick = (e) => {

        navigate(`games/${e.target.textContent}`);
    }
    return (
        <div>
            <span>Games </span>
            {/* <ul>
                {games.map((game, i) => <li onClick={handleListItemClick} key={i}>{game}</li>)}
            </ul> */}
            < Card/>
        </div>
        );
}

export default Games;