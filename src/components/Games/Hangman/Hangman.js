
import { doc, setDoc} from "firebase/firestore"; 


function Hangman({hesAccaunt,accauntData,db}) {

    function handleClick(){

        setDoc(doc(db, "users", hesAccaunt?.uid), {
            ...accauntData,
            Hangman:{scorre:0},
            
        });
    

    }
    

    
    return (
         <div>
             
            Hangman
            {
                hesAccaunt? (
                    <>
                    <h1>{accauntData?.Hangman?.scorre}</h1>
                    <h1>{accauntData?.email}</h1>
                    <button onClick={handleClick}>save</button>
                    </>

                ):""
                
            }
         </div>

        );
}

export default Hangman;