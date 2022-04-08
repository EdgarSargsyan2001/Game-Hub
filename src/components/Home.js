import { collection, getDocs, getFirestore} from "firebase/firestore";
import { useEffect,useContext } from "react";
import Games from "./Games/Games";
import { hasAccaunt } from '../App'



function Home() {

    const {hesAccaunt} = useContext(hasAccaunt);

    useEffect(async()=>{
         
        if(hesAccaunt){

            let arr=[]
            const db = getFirestore()
            const querySnapshot = await getDocs(collection(db, "users"));
    
            //AccauntData
            querySnapshot.forEach((doc) => {

                arr.push({...doc.data(),id:doc.id})

                if(doc.id === hesAccaunt.uid){
                    localStorage.setItem("AccauntData",
                        JSON.stringify(
                            {...doc.data(),id:doc.id,email:hesAccaunt.email}
                        )
                    )
                        
                }
            
            })

            //AllUserData
            localStorage.setItem("AllUserData",JSON.stringify(arr))
           
        }
        
    },[hesAccaunt])



    return (

        <div>
            <Games hesAccaunt={hesAccaunt} />
        </div>
    );

}

export default Home;