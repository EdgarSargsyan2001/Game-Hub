import { doc, setDoc} from "firebase/firestore";
import { useState,useEffect } from "react";
import { randomWord } from "./Words";
import "./Hangman.css";

import step0 from "./images/0.jpg";
import step1 from "./images/1.jpg";
import step2 from "./images/2.jpg";
import step3 from "./images/3.jpg";
import step4 from "./images/4.jpg";
import step5 from "./images/5.jpg";
import step6 from "./images/6.jpg";

function Hangman({ hesAccaunt, accauntData,db }) {

  const [wrongAnswerCount, setWrongAnswerCount] = useState(0);
  const [rightAnswer, setRightAnswer] = useState(randomWord());
  const [userAnswer, setUserAnswer] = useState("");
  const [userScorre, setUserScorre] = useState(accauntData?.Hangman?.scorre ? accauntData.Hangman.scorre : 0);
  const [isWinner,setIsWinner] = useState(false);

  
  const images = [step0, step1, step2, step3, step4, step5, step6];
  const MAXWRONGANSWER = 5;
  const gameOver = wrongAnswerCount > MAXWRONGANSWER;

  const handleOnClick = (e) => {

    let usersInput = e.target.value;
    setUserAnswer(userAnswer + usersInput);
    setWrongAnswerCount(
      wrongAnswerCount + (rightAnswer.includes(usersInput) ? 0 : 1)

    );

  };

  const handleReset = () => {

    setWrongAnswerCount(0);
    setRightAnswer(randomWord());
    setUserAnswer("");

  };

  const generateButtons = () => {

    return "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => (

      <button
        className="letterBtn"
        key={letter}
        value={letter}
        onClick={handleOnClick}
        disabled={userAnswer.includes(letter)}
      >
        {letter}
      </button>
    ));

  };

  let gameStatus = generateButtons();

  const guessedWord = () => {

    return rightAnswer
      .split("")
      .map((letter) => (userAnswer.includes(letter) ? letter : " _ "));
  
  };

  useEffect(()=>{

    setIsWinner( rightAnswer === guessedWord().join(""))
  
    
  },[userAnswer]);
    

  useEffect(()=>{
    
    if(rightAnswer === guessedWord().join("")){
      
      setUserScorre(prev=>prev+1);
    }

  },[isWinner])

  useEffect(()=>{

    if(hesAccaunt){

      setDoc(doc(db, "users", hesAccaunt?.uid), {
        
        ...accauntData,
        email:hesAccaunt.email,
        Hangman:{scorre:userScorre},
        
      });

    }


  },[userScorre])
  
  
  if (isWinner) {
    gameStatus = <span className="winGame">You win!!!</span>;
  }
  
  if (gameOver) {
    gameStatus = <span className="loseGame">You lose,this was right answer.</span>;
  }



  return (
    <div className="container">

      <h1 className="hangmanName">HANGMAN</h1>
      <h3>Guess the footballers!</h3>


      <div className="imgContainer">
        <img className="img" src={images[wrongAnswerCount]}></img>
        <h4 className="score">Scorre:{userScorre}</h4>
      </div>

      <div className="answer">
        {!(gameOver || isWinner) ? (
          <div>
            <div>
              Wrong Guesses: {wrongAnswerCount} of {6}
            </div>
            {guessedWord()}
          </div>
        ) : (
          <div className="answer"> {rightAnswer}</div>
        )}
        <div className="gameStatus">{gameStatus}</div>
      </div>

   
      <button onClick={handleReset} className="resetBtn">
        Reset
      </button>
    </div>
  );
}

export default Hangman;
