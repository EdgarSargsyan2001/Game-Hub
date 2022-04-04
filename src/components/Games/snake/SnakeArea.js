
import { doc, setDoc} from "firebase/firestore"; 
import { useEffect, useState } from "react";
import './snakeCss.css'



const boardSize = 10;
const cellsValue = Array(boardSize).fill(Array(boardSize).fill(0));
let qayl = "";
let snakeMoveSpeed

const checkArea = function (position){
    switch(true){
        case  position >= boardSize :
         return 0;
        case position < 0 :
         return boardSize - 1;
        default : 
        return position;
    }
} 


function SnakeArea ({hesAccaunt,accauntData,db}){
   
    const [gameOver, setGameOver] = useState(true)
    const [snake, setSnake] = useState([[1,1]]);
    const [food, setFood] = useState([0,0]);
    const [move, setMove] = useState([0,0]);
    const [score, setScore] = useState(0);
    const [backData,setBeckData] = useState(accauntData?.SnakeArea?.scorre || 0)
    const availableKey = ["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"];
    
    const getNewFood = () => {
        let newFood 
        do {
            newFood = [
                Math.floor(Math.random() * boardSize),
                Math.floor(Math.random() * boardSize)
            ]
        }
        while (snake.some(elem => elem[0] === newFood[0] && elem[1] === newFood[1])){
            setFood(newFood)
        }
    }
    
    const handleKeyDown = (el)=>{
        let a = availableKey.indexOf(el.key);

        if(a>=0 && availableKey[a] === "ArrowDown" && qayl !== "verev"){
            setMove([0,1]);
            qayl = "nerqev";
        }
         else if(a>=0 && availableKey[a] === "ArrowRight" && qayl !== "dzax"){
            qayl = "aj"
            setMove([1,0]);
         }
         else if(a>=0 && availableKey[a] === "ArrowLeft" && qayl !== "aj"){
            setMove([-1,0]);
            qayl = "dzax"
         }
         else if(a>=0 && availableKey[a] === "ArrowUp" && qayl !== "nerqev"){
            qayl = "verev" 
            setMove([0,-1]);
            
         }
    }
    useEffect(()=>{
        
        document.addEventListener('keydown',handleKeyDown);
       return()=>snakeMoveSpeed=''
    },[handleKeyDown])
        
    useEffect(()=>{
        const interval = moveFunc();
        return ()=> clearInterval(interval)
    }, [snake,moveFunc])

    const moveFunc = ()=> {
        const jamanak = setTimeout(()=>{
        const newSnake = snake;
        const head = [
            checkArea(newSnake[newSnake.length - 1][0] + move[1]),
            checkArea(newSnake[newSnake.length - 1][1] + move[0])
        ]

        newSnake.push(head);

         if(head[0] === food[0] && head[1] === food[1]){
            setSnake(newSnake.slice(0));
            getNewFood();
         }

         else if (snake.slice(0,-1).some(el => el[0] === head[0] && el[1] === head[1] ) && snake.length !== 2){
            setGameOver(false)
            setScore(snake.length)

               if(hesAccaunt && accauntData){
                  
                  if(snake.length > backData){

                     setBeckData(snake.length)

                     setDoc(doc(db, "users", hesAccaunt?.uid), {
                     ...accauntData,
                     email:hesAccaunt.email,
                     SnakeArea:{scorre:snake.length},
                     
                     });
                  }
            
               }
            

     }

      else setSnake(newSnake.slice(1));

    }, snakeMoveSpeed)

    return jamanak;
    }



   if(gameOver && snakeMoveSpeed){

    return(
    <div className="area1">
        <div className="score2">Record Score: {backData}
        </div>
       <div className="area">
            
            {cellsValue.map((row,indexR)=>{
                return(
                <div key={indexR} className="row">
                    {row.map((cell,indexC)=>{
                        let type = snake.some(el => el[0]===indexR && el[1] === indexC) && "snake";
                        if(type !== "snake"){
                            type = (food[0] === indexR && food[1] === indexC) && "food";
                        }
                        return(
                         <div className={`cell ${type}`} key={indexC}></div>
                         )
                    })}
                </div>
                )
            })}
       </div>
       </div>
    )
}

else if (snakeMoveSpeed )

return (
        <div className="area">
            <div className="score1">Record Score: {backData}</div>
            <p style={{

                fontSize:"57px",
                fontWeight:"bold",
                alignItems: "center",
                color:"red",
                marginBottom:"30px"

            }}>Game Over</p>

            <p style={{
                fontSize:"30px",
                fontWeight:"bold",
                alignItems: "center",
                color:"blue",
                marginBottom:"20px"

            }}>Current Score :{score}</p>

            <button
                className="butonRest"
                onClick={()=>{
               
                setSnake([[1,0]])
                setScore(0)
                setMove([0,0])
                setTimeout(()=>{
                    setGameOver(true)
                },100)
                
            }}>Reset</button>
        </div>
    )
    else {
        return(
          <div className="snakeArea">
            <button className="buttonSnake" onClick={()=>{
              snakeMoveSpeed = 100;
            }}>Hard</button>
            <button className="buttonSnake" onClick={()=>{
              snakeMoveSpeed = 200;
            }}>Medium</button>
            <button className="buttonSnake" onClick={()=>{
              snakeMoveSpeed = 300;
            }}>Easy</button>
          </div>
        )
      }
}

export default SnakeArea;