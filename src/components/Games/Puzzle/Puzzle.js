
import { doc, setDoc} from "firebase/firestore"; 


function Puzzle({hesAccaunt,accauntData,db}) {

    function handleClick(){

        
        setDoc(doc(db, "users", hesAccaunt?.uid), {
            ...accauntData,
            Puzzle:{scorre:0},

        });
        


    }

   

    return (
         <div>
             
            puzzle
            {
                hesAccaunt? (
                    <>
                    <h1>{accauntData?.Puzzle?.scorre}</h1>
                    <h1>{accauntData?.email}</h1>
                    <button onClick={handleClick}>save</button>
                    </>
                ):""
                
            }
         </div>

        );
}

export default Puzzle;