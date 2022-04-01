import Games from "./Games/Games";
import { useEffect, useState } from "react";
import { getFirestore,collection, getDocs} from "firebase/firestore";


function Home({accauntData,setAccauntData,hesAccaunt}) {

    const [flag,setFlag] = useState(false)
    

    console.log()

    useEffect(()=>{
        async function GetData(){
            if(hesAccaunt){
                    const db = getFirestore()
                    const querySnapshot = await getDocs(collection(db, "users"));
            
                    //AccauntData
                    querySnapshot.forEach((doc) => {
                        if(doc.id === hesAccaunt.uid){
                            setAccauntData({...doc.data(),id:doc.id,email:hesAccaunt.email,i:true})
                        }
                    
                    })

                    setTimeout(()=>{
                        setFlag(true)
                    },0)

                }else{
                    setFlag(true)
                setAccauntData('')
                
            }
        }
        GetData()

        
      },[hesAccaunt,setAccauntData])



    //<SportsEsportsIcon sx={{ fontSize: 50, color:"white",margin:"30%"}}/>
    return (
        flag && 

        <div>
            <Games hesAccaunt={hesAccaunt} />
        </div>
    );
}

export default Home;