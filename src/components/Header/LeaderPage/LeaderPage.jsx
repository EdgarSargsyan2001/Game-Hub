// import { getAuth } from "firebase/auth";
import { getFirestore ,collection, getDocs} from "firebase/firestore"; 
import { useEffect, useState } from "react";
import SingleLeaderGame from './singleLeaderGame'
import './LeaderPage.css'

function LeaderPage({hesAccaunt,alluserData,setAlluserData}) {

    const [RockPaperScissorsWin,setRockPaperScissorsWin] = useState('')
    const db = getFirestore()


    // console.log(alluserData)

    useEffect(async()=>{
        if(hesAccaunt){

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
        
    },[hesAccaunt])

    useEffect(()=>{

        if(alluserData && hesAccaunt){

            let Winner = 0
            let WunnerData = ''

            alluserData.forEach(el=>{
                if(el.RockPaperScissors.scorre > Winner ){

                    Winner = el.RockPaperScissors.scorre
                    WunnerData = el
                    
                }

            })

            setRockPaperScissorsWin(WunnerData)
        }

    },[alluserData])
    
    return (
        hesAccaunt &&
        <div className="LeaderPage">
          
            <SingleLeaderGame
                DataWiner={RockPaperScissorsWin}
                title="RockPaperScissors"
                imgSrc='./Images/rockAndScissors.jpeg'
            />
            <SingleLeaderGame
                // DataWiner={RockPaperScissorsWin}
                title="GameTime"
                imgSrc='./Images/GameTime.jpeg'
            />
            
            <SingleLeaderGame
                // DataWiner={RockPaperScissorsWin}
                title="hangMan"
                imgSrc='./Images/hangMan.png'
            />
            
            <SingleLeaderGame
                // DataWiner={RockPaperScissorsWin}
                title="pazl"
                imgSrc='./Images/pazl.jpeg'
            />
            <SingleLeaderGame
                // DataWiner={RockPaperScissorsWin}
                title="Tangs"
                imgSrc='./Images/Tangs.jpeg'
            />
            <SingleLeaderGame
                // DataWiner={RockPaperScissorsWin}
                title="zar"
                imgSrc='./Images/zar.jpeg'
            />
            
            
        </div> 

    );
}

export default LeaderPage;