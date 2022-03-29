// import { getAuth } from "firebase/auth";
// import { doc, getFirestore, setDoc ,collection, getDocs} from "firebase/firestore"; 
// import { useEffect, useState } from "react";
import './LeaderPage.css'

function LeaderPage({hesAccaunt}) {

    // const [value,setValue] = useState('')
    // const [objALl,SetObjALl] = useState('')
    // const [accauntData,setAccauntData] = useState('')
    // const auth = getAuth();
    // const db = getFirestore()
    
    // const obj={
    //     ii:"hgf",
    //     value:+value 
    // }

    // function hendleclick(){

    //     setDoc(doc(db, "users", auth?.currentUser?.uid), {
    //         ...accauntData,
            
    //         game2:{...obj},
            
    //     });

    // }


    // useEffect(async()=>{
    //     if(hesAccaunt){

    //         let arr=[]
    //         const querySnapshot = await getDocs(collection(db, "users"));
    //         //All Data
    //         querySnapshot.forEach((doc) => {
    //             arr.push({...doc.data(),id:doc.id,email:hesAccaunt.email})
               
    //         })
    //         SetObjALl(arr)

    //         //AccauntData
    //         querySnapshot.forEach((doc) => {
    //             if(doc.id === hesAccaunt.uid){
    //                 setAccauntData({...doc.data(),id:doc.id,email:hesAccaunt.email})
    //             }
               
    //         })


    //     }else{
            
    //         setAccauntData('')
    //         SetObjALl('')
    //     }
        
    // },[hesAccaunt])
    
    
    // console.log(objALl)
    // console.log(accauntData)
    
    return (
        <div className="LeaderPage">
            LeaderPage

          
        </div> 
         
    );
}

export default LeaderPage;