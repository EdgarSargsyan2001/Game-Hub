import { useNavigate } from 'react-router-dom';
import './Games.css';




const gameCard = [
    {
        src: "./Images/hangMan.png",
        gameName: 'hangman',
        cardTaxt: "Lorem ipsum, dolor sit amet consectetur adipisicing",
        alt:"HangMan"
    },
    {
        src: "./Images/snake.png",
        gameName: 'snake',
        cardTaxt: "Lorem ipsum, dolor sit amet consectetur adipisicing",
        alt:"pazl"
    },
    {
        src: "./Images/rockAndScissors.jpeg",
        gameName: 'rockpaperscissors',
        cardTaxt: "Lorem ipsum, dolor sit amet consectetur adipisicing",
        alt:"rockAndScissors"
    },
    {
        src: "./Images/TicTacToe.jpeg",
        gameName: 'TicTacToe',
        cardTaxt: "Lorem ipsum, dolor sit amet consectetur adipisicing",
        alt:"TicTacToe"
    },
    {
        src: "./Images/zar.jpeg",
        gameName: 'picturesgame',
        cardTaxt: "Lorem ipsum, dolor sit amet consectetur adipisicing",
        alt:"PicturesGame"
    },
    {
        src: "./Images/game2048.png",
        gameName: 'Game2048',
        cardTaxt: "Lorem ipsum, dolor sit amet consectetur adipisicing",
        alt:"Game2048"
    }
    
   
];
function Card() {
    
    const navigate = useNavigate();


    const handleListItemClick = (item)=> () => {
        navigate(`games/${item.gameName.toLowerCase()}`);    
    }

    return (
        <div className='cardsSection'>
            <div className='cards' >
                {
                 gameCard.map((item, index ) =>
                    <div className='card-item' key={index} onClick={handleListItemClick(item) }>
                        <p className='title-Game'>{item.gameName} </p>
                        <img className='card-image' src={item.src} alt={item.alt} />
                        <p className='card-text'> {item.cardTaxt}</p>
                    </div>
                )}

            </div>
        </div>
    );
}

export default Card;



