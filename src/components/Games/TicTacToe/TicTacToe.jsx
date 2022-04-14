import { collection, getDocs, getFirestore,doc, setDoc} from "firebase/firestore";
import React, { useState ,useRef, useEffect} from "react";
import EndGame from "./EndGame";
import Square from "./Square";
import './TicTacToe.css'


const INITIAL = "";
const X_PLAYER = "X";
const O_PLAYER = "O";
const winCombination = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]


export default function TicTacToe({accauntData,hesAccaunt,db}){

    const [alonegame,setalonegame] = useState(false)
    const [grid,setgrid] = useState(Array(9).fill(INITIAL))
    const [player,setplayer] = useState(false)
    const [gameFinished,setGamefinishd] = useState(false)
    const [draw,setDraw] = useState(false)
    const [winCount,setWinCount] = useState({X:0,O:0})
    const [gamewinwr,setgamewinwr] = useState(false)
    const [flagFirst,setflagFirst] = useState(false)
    const pleyerTurnColor = useRef()
    

    useEffect( async()=>{
        if(!alonegame ){

            if(accauntData?.TicTacToe?.AllScorre){

                const db = getFirestore()
                const querySnapshot = await getDocs(collection(db, "users"));
                let newData

                querySnapshot.forEach((doc) => {
                    if(doc.id === hesAccaunt.uid){
    
                        newData = {...doc.data(),id:doc.id,email:hesAccaunt.email}
                            
                    }
                })

                newData?
                    setWinCount({
                        X:newData?.TicTacToe?.AllScorre.X,
                        O:newData?.TicTacToe?.AllScorre.O,
                        
                    })
                :
                    setWinCount({
                        X:accauntData?.TicTacToe?.AllScorre.X,
                        O:accauntData?.TicTacToe?.AllScorre.O,
                        
                    })
                

                

            }else{setWinCount({X:0,O:0})}
                
            
        
        }else{setWinCount({X:0,O:0})}
            
        
        
    },[alonegame])

    function isGameOver(){
     if(!gameFinished){

        // X win check
        for(let i = 0; i < 8; i++){
            if(
                grid[winCombination[i][0]] === X_PLAYER &&
                grid[winCombination[i][1]] === X_PLAYER &&
                grid[winCombination[i][2]] === X_PLAYER 
              ){
                  setGamefinishd(true)
                  setgamewinwr(true)
                  setflagFirst(false)
                  setWinCount({...winCount, X:winCount.X + 1})
                  //   console.log("x wone")
                  return;
                }
            }
            
            // O win  check
            
            for(let i = 0; i < 8; i++){
                if(
                    grid[winCombination[i][0]] === O_PLAYER &&
                    grid[winCombination[i][1]] === O_PLAYER &&
                    grid[winCombination[i][2]] === O_PLAYER 
                    ){
                        
                    setGamefinishd(true)
                    setflagFirst(true)
                    setWinCount({...winCount, O:winCount.O + 1})
                  //   console.log("o wone")
                  return
              }
        }


        if(!grid.includes(INITIAL)){
            setDraw(true)
            setGamefinishd(true)
        }
     }
    }

    isGameOver()


    function restGame_clHistory (val){
        if(hesAccaunt && !alonegame){

            setDoc(doc(db, "users", hesAccaunt?.uid), {
              ...accauntData,
              email:hesAccaunt.email,
              TicTacToe:{
                  scorre:winCount.X,
                  AllScorre:{X:winCount.X,O:winCount.O}
                },
              
            });
      
        }
        if(val === "cl_History"){
            setWinCount({X:0,O:0})
        }
        setgrid(Array(9).fill(INITIAL))
        setGamefinishd(false)
        setgamewinwr(false)
        setDraw(false)
        if(!alonegame && flagFirst)setplayer(!player)



    }

    function handelClick(id,evt){

        setgrid(
            grid.map((item,index)=>{
                if(index === id){
                    if(player){
                        if(alonegame){evt.target.style.color="rgb(255, 255, 0)"}
                        
                        pleyerTurnColor.current.style.color="rgb(255, 0, 0)"
                        return O_PLAYER
                    }else{
                        if(alonegame){evt.target.style.color="rgb(255, 0, 0)"}
                        
                        pleyerTurnColor.current.style.color="rgb(255, 255, 0)"
                        return X_PLAYER
                    }
                }else{
                    return item;
                }
            })
        )

        setplayer(!player)
    }
    
    function changealoneplay(evt){
        if(evt.target.value === "one"){
            return setalonegame(false)

        }
        if(evt.target.value === "tow"){
            return setalonegame(true)
        }
    }
    
    return (
        <div>
            <p className="win-history">
                X's WINS:{winCount.X}
                <br/>
                O's WINS:{winCount.O}

            </p>
            <p className="select-alone-play">
                <select className="select-alone-play" onChange={changealoneplay}>
                    <option value="one">alone</option>
                    <option value="tow">with two</option>
                </select>
            </p>

            <p  className="pleyer-turn">The Turn:
                 <span ref={pleyerTurnColor}  className="pleyer-turn-color">
                    {!player ? "X":"O"}
                 </span>
                 
            </p>
           { gameFinished && <EndGame 
                restGame_clHistory={restGame_clHistory}
                winCount={winCount}
                gamewinwr={gamewinwr}
                draw={draw} 
                hesAccaunt={hesAccaunt}
                />
           } 
            <Square 
                winComb={winCombination}
                ClickedArray={grid}
                player={player}
                alonegame={alonegame}
                handelClick={handelClick}  
            />
        </div>
    )
}