import './Games.css'

const gameCard = [
    {
        src: "./Images/hangMan.png",
        gameName: 'HangMan',
        cardTaxt: "Lorem ipsum, dolor sit amet consectetur adipisicing",
        alt:"HangMan"
    },
    {
        src: "./Images/rockAndScissors.jpeg",
        gameName: 'rockAndScissors',
        cardTaxt: "Lorem ipsum, dolor sit amet consectetur adipisicing",
        alt:"rockAndScissors"
    },
    {
        src: "./Images/pazl.jpeg",
        gameName: 'pazl',
        cardTaxt: "Lorem ipsum, dolor sit amet consectetur adipisicing",
        alt:"pazl"
    },
    // {
    //     src: "./Images/rockAndScissors.jpeg",
    //     gameName: 'HangMan',
    //     cardTaxt: "Lorem ipsum, dolor sit amet consectetur adipisicing"
    // }
]
console.log(gameCard[0])
function Card() {
    return (
        <section className='cardsSection'>
            
            {gameCard.map((item, index) =>
                <div className="cards" key={index}>
                    <div className='card-item'>
                        <img className='card-image' src={item.src} alt="" />
                        <button className='card-button'> {item.gameName}</button>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing </p>
                    </div>
                </div>

            )}
        </section>
    );
}

export default Card;




{/* <div className="cards">
            <div className='card-item'>
                <img className='card-image' src={gameCard[0].src} alt="" />
                <button>Hangmen</button>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing </p>
            </div>
            <div className='card-item'>
                <img className='card-image' src={imgArray[0]} alt="" />
                <button>Hangmen</button>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing </p>
            </div>
            <div className='card-item'>
                <img className='card-image' src={imgArray[0]} alt="" />
                <button>Hangmen</button>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing </p>
            </div> 
             </div> */}