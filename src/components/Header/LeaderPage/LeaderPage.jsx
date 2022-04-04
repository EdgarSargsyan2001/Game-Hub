// import { getAuth } from "firebase/auth";
import { getFirestore ,collection, getDocs} from "firebase/firestore"; 
import { useEffect, useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SingleLeaderGame from './singleLeaderGame'
import './LeaderPage.css'

function LeaderPage({hesAccaunt,alluserData,setAlluserData}) {

    const [RockPaperScissorsWin,setRockPaperScissorsWin] = useState(undefined)
    const [snakeAreaWin,setSnakeAreaWin] = useState(undefined)
    const [GameName, setGameName] = useState("RockPaperScissors");
        
    
    
    // console.log(alluserData)

    useEffect(()=>{
        async function GetData(){
            if(hesAccaunt){
                const db = getFirestore()
                let arr=[]
                
                const querySnapshot = await getDocs(collection(db, "users"));
                //All Data
                querySnapshot.forEach((doc) => {
                    arr.push({...doc.data(),id:doc.id})
                   
                })
                setAlluserData(arr)
    
            }else{
              setAlluserData('')
            }
        }

        GetData()
        
        
    },[hesAccaunt,setAlluserData])

    useEffect(()=>{

        if(alluserData && hesAccaunt){
           
            setRockPaperScissorsWin(alluserData.filter(el=>el.RockPaperScissors)?.sort((a,b) => b?.RockPaperScissors?.scorre - a?.RockPaperScissors?.scorre))
            setSnakeAreaWin(alluserData.filter(el=>el.SnakeArea)?.sort((a,b) => b?.SnakeArea?.scorre - a?.SnakeArea?.scorre))

        }


    },[alluserData,hesAccaunt])

    
    return (
        hesAccaunt &&
        <div className="LeaderPage">
          
          <Box sx={{ minWidth: 150,margin:5}}>

            <FormControl fullWidth>
                
                <InputLabel id="demo-simple-select-label">GameName</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={GameName}
                    label="GameName"
                    onChange={(e)=>setGameName(e.target.value)}
                >

                    <MenuItem value='RockPaperScissors'>
                        RockPaperScissors 
                    </MenuItem>
                            

                    <MenuItem  value='snake'>
                        snake
                    </MenuItem>
                        
                            
                </Select>
            </FormControl>
        </Box>
        

        {
            GameName === "RockPaperScissors" &&
                <SingleLeaderGame
                    GAMENAME='RockPaperScissors'
                    DataWiner={RockPaperScissorsWin}
                    hesAccaunt={hesAccaunt}
                    title="RockPaperScissors"
                    imgSrc='./Images/rockAndScissors.jpeg'
                />
                
        }
        {
            GameName === "snake" &&
                <SingleLeaderGame
                    GAMENAME="SnakeArea"
                    DataWiner={snakeAreaWin}
                    hesAccaunt={hesAccaunt}
                    title="snake"
                    imgSrc='./Images/snake.png'
                />
        }

            
        </div> 

    );
}

export default LeaderPage;