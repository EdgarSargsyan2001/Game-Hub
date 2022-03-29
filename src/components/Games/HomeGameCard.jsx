import { useNavigate } from 'react-router-dom';
import Games  from './Games';

import './Games.css';



const gameCard = [

    {
        src: "./Images/hangMan.png",
        gameName: 'HangMan',
        cardTaxt: "Lorem ipsum, dolor sit amet consectetur adipisicing",
        alt:"HangMan"
    },
    {
        src: "./Images/rockAndScissors.jpeg",
        gameName: 'RockAndScissors',
        cardTaxt: "Lorem ipsum, dolor sit amet consectetur adipisicing",
        alt:"rockAndScissors"
    },
    {
        src: "./Images/pazl.jpeg",
        gameName: 'pazl',
        cardTaxt: "Lorem ipsum, dolor sit amet consectetur adipisicing",
        alt:"pazl"
    },
    {
        src: "./Images/GameTime.jpeg",
        gameName: 'pazl',
        cardTaxt: "Lorem ipsum, dolor sit amet consectetur adipisicing",
        alt:"pazl"
    },
    {
        src: "./Images/zar.jpeg",
        gameName: 'pazl',
        cardTaxt: "Lorem ipsum, dolor sit amet consectetur adipisicing",
        alt:"pazl"
    },
    {
        src: "./Images/Tangs.jpeg",
        gameName: 'pazl',
        cardTaxt: "Lorem ipsum, dolor sit amet consectetur adipisicing",
        alt:"pazl"
    },
   
];
function Card() {
    const games = ["hangman", "puzzle", "rockpaperscissors", "tictactoe"];
    const navigate = useNavigate();

    const handleListItemClick = (e) => {
        navigate(`games/${e.target.textContent}`);
        // {games.map((game, i) => <li onClick={handleListItemClick} key={i}>{game}</li>)}  ;
    }
    return (
        <section className='cardsSection'>
            <div className='cards' >
            {gameCard.map((item, index ) =>
                    <div className='card-item' key={index}>
                        <img className='card-image' src={item.src} alt={item.alt} />
                        <button className='card-button' onClick={handleListItemClick } > {item.gameName}</button>
                        <p className='card-text'> {item.cardTaxt}</p>
                    </div>
            )}
            </div>
        </section>
    );
}

export default Card;



