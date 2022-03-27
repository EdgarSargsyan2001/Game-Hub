import {useNavigate} from "react-router-dom";
function Games() {
    const games = ["hangman","puzzle","rockpaperscissors","tictactoe"];

    const navigate = useNavigate();
    
    const handleListItemClick = (e) =>{
       
        navigate(`games/${e.target.textContent}`);
    }
    return ( <div>
        <span>Games</span>
        <ul>
            {games.map((game,i)=> <li onClick={handleListItemClick} key={i}>{game}</li>)}
        </ul>
    </div> );
}

export default Games;