import Games from "./Games/Games";
import { useEffect } from "react";
import { getFirestore,collection, getDocs,setDoc,doc} from "firebase/firestore"; 

function Home({accauntData,setAccauntData,hesAccaunt}) {

    const db = getFirestore()

    console.log()

    useEffect(async(accauntData)=>{

        if(hesAccaunt){
            const querySnapshot = await getDocs(collection(db, "users"));
    
            //AccauntData
            querySnapshot.forEach((doc) => {
                if(doc.id === hesAccaunt.uid){
                    setAccauntData({...doc.data(),id:doc.id,email:hesAccaunt.email,i:true})
                }
               
            })
        }else{
          
          setAccauntData('')
    
        }
        
      },[hesAccaunt])

    //<SportsEsportsIcon sx={{ fontSize: 50, color:"white",margin:"30%"}}/>
    return (
        
        <div>
            <Games />
        </div>);
}

export default Home;