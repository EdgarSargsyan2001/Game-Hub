import { useState ,useEffect } from 'react';
import { doc, setDoc} from "firebase/firestore"; 
import './RockPaperScissors.css';


function RockPaperScissors({accauntData,hesAccaunt,db}) {

  const [userChoice, setUserChoice] = useState('rock')
  const [computerChoice,setComputerChoice] = useState('rock')
  const [userPoints,setUserPoints] = useState(0)
  const [computerPoints,setComputerPoints] = useState(0)
  const [turnResault,setturnResault] =useState(null)
  const [result,setResult] = useState("")
  const [gameOver,setGameOver] = useState(false)
  const [flag,setflag] = useState(false)
  const [allWin,setAllWin] = useState(accauntData?.RockPaperScissors?.scorre ? accauntData.RockPaperScissors.scorre : 0)

  const choices = ['rock','scissors','paper']

  const DataGame = {

    scorre:allWin

  }
  

  const handelClick = (choice) =>{
    setflag(true)
    setUserChoice(choice)
    generateComputerChoice()

  }

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    setComputerChoice(randomChoice)
    setflag(true)
  }

  

  const reset = () =>{


    setComputerChoice('rock')
    setUserChoice('rock')
    setUserPoints(0)
    setComputerPoints(0)
    setGameOver(false)

    if(hesAccaunt){

      setDoc(doc(db, "users", hesAccaunt?.uid), {
        ...accauntData,
        email:hesAccaunt.email,
        RockPaperScissors:{...DataGame},
        
      });

    }
    
    
  }
  

useEffect(() => {

if(flag){
  const comboMoves = userChoice + computerChoice

  if(userPoints <=4 && computerPoints <=4){
      if(comboMoves ==='rockscissors' || comboMoves === 'paperrock' || comboMoves === 'scissorspaper'){
        const updateUserPoints = userPoints + 1
        setUserPoints(updateUserPoints)
        setturnResault('User win')

        if(updateUserPoints === 5){
          setGameOver(true)
          setAllWin(prev => prev + 1)
          setResult('User wins')
        }
      }
    


    if(comboMoves ==='paperscissors' || comboMoves === 'scissorsrock' || comboMoves === 'rockpaper'){
      const updateComputerPoints = computerPoints + 1
      setComputerPoints(updateComputerPoints)
      setturnResault('Jony win')
      if(updateComputerPoints === 5){
        setGameOver(true)
        setResult('Jony wins')
      }

    }

    if(comboMoves ==='paperpaper' || comboMoves === 'scissorsscissors' || comboMoves === 'rockrock'){
      setturnResault("No one win")


    }
  }
}
  return () => {
    setflag(false)
  }

},[userChoice,computerChoice,computerPoints,userPoints,flag])




    return (
      
      <div className="RockPaperScissors">


      <h1 className='heading'>
        <span className='heading-Rock'>Rock</span>
        <span className='heading-Paper'>Scissors</span>
        <span className='heading-Scissors'>Paper</span>
      </h1>
        <h4 className='heading-Paper'>AllWin:{DataGame.scorre}</h4>

      <div className='score'>
        <h2 className='winner-User'>User։{userPoints}</h2>

        <h1>
          <span className='Turn-Result'>Turn Result</span><br/>
          <span className=
          {
            ` 
            ${(turnResault === "User win")?"winner-User":""} 
            ${(turnResault === "No one win")?"No-one-win":""} 
            ${(turnResault === "Jony win")?"winner-Computer":""} 

          `}>{turnResault}</span>

        </h1>
        
        <h2 className='winner-Computer'>Jony:{computerPoints}</h2>
      </div>


      <div className='choice'>
        <div className='choice-user'>
          <img className='user-hand' alt={userChoice} src={`../imagesRockPaperScissors/${userChoice}.png`}></img>
        </div>

        <div className='choice-computer'>
          <img className='computer-hand' alt={computerChoice} src={`../imagesRockPaperScissors/${computerChoice}.png`}></img>
        </div>
      </div>
      

      <div className='button-div'>
        {!gameOver &&
          choices.map((choice,index) => {
           return <button 
                    className={`button ${choice}`}
                    key={index}
                    onClick={()=> handelClick(choice)}

                  > {choice} </button>
              
          })
        }
      </div>

      <div className='button-div'>
        {
          gameOver && 
          <div>
              <h2 className='Final-Result-tatle'>
                <span className='Final-Result'>
                  Final Result
                </span> <br></br>

                <span className=
                  {`
                    ${(result === "User wins")?"winner-User":""} 
                    ${(result === "Jony wins")?"winner-Computer":""}
                  `}
                > {result} </span>
                  
               
              </h2>

            <button 
              className='button buttonRest'
              onClick={()=> reset()}

            > Restart Game? </button>

          </div>
        }
      </div>


     </div>
    )
}

export default RockPaperScissors;