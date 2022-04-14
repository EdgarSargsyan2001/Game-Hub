import { useEffect, useState,useContext } from "react";
import { hasAccaunt } from '../../../App.js'


import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import SingleLeaderGame from './singleLeaderGame'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';

import './LeaderPage.css'

function LeaderPage({}) {
    
    const [alluserData,setalluserData] = useState( JSON.parse( localStorage.getItem('AllUserData')) )
    const [GameName, setGameName] = useState("RockPaperScissors");
    const {hesAccaunt} = useContext(hasAccaunt);

    //DataWiner
    const [RockPaperScissorsWin,setRockPaperScissorsWin] = useState(undefined)
    const [snakeAreaWin,setSnakeAreaWin] = useState(undefined)
    const [hangmanWin,setHangmanWin] = useState(undefined)
    


    useEffect(()=>{

        if(alluserData && hesAccaunt){
           
            setRockPaperScissorsWin(alluserData.filter(el=>el.RockPaperScissors)?.sort((a,b) => b?.RockPaperScissors?.scorre - a?.RockPaperScissors?.scorre))
            setSnakeAreaWin(alluserData.filter(el=>el.SnakeArea)?.sort((a,b) => b?.SnakeArea?.scorre - a?.SnakeArea?.scorre))
            setHangmanWin(alluserData.filter(el=>el.Hangman)?.sort((a,b) => b?.Hangman?.scorre - a?.Hangman?.scorre))
        }


    },[alluserData,hesAccaunt])

    
    return (
        hesAccaunt &&
        <div className="LeaderPage">
          <div className="selectDiv">
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

                        <MenuItem  value='hangman'>
                            hangman
                        </MenuItem>
                            
                                
                    </Select>
                </FormControl>
            </Box>
        </div>
        

        {
            GameName === "RockPaperScissors" &&
                <SingleLeaderGame
                    GAMENAME='RockPaperScissors'
                    DataWiner={RockPaperScissorsWin}
                    title="RockPaperScissors"
                    imgSrc='./Images/rockAndScissors.jpeg'
                />
                
        }
        {
            GameName === "Snake" &&
                <SingleLeaderGame
                    GAMENAME="SnakeArea"
                    DataWiner={snakeAreaWin}
                    title="snake"
                    imgSrc='./Images/snake.png'
                />
        }
        {
            GameName === "HangMan" &&
                <SingleLeaderGame
                    GAMENAME="Hangman"
                    DataWiner={hangmanWin}
                    title="Hangman"
                    imgSrc='./Images/hangMan.png'
                />
        }

            
        </div> 

    );
}

export default LeaderPage;