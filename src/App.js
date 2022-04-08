// Lilit
import { getAuth,onAuthStateChanged } from "firebase/auth";
import { useEffect, useState ,createContext} from "react";
import { Route, Routes } from "react-router-dom";

import Register from "./components/Header/LoginRegister/password/Register";
import Login from "./components/Header/LoginRegister/login/Login";
import LeaderPage from "./components/Header/LeaderPage/LeaderPage";
import SingleGame from "./components/Games/SingleGame";
import Layout from "./components/Layaouts/Layouts";
import Home from "./components/Home";

import "./App.css";

export const hasAccaunt = createContext()




function App() {
  
  const [hasUser,setHasUser] = useState(false)
  
  
  useEffect(()=>{
    const auth = getAuth();
    
    onAuthStateChanged( auth,(user) => user ? setHasUser(user) : setHasUser(user) )

    
  },[])


  return (
    <div className="App">
      <hasAccaunt.Provider value={{hesAccaunt:hasUser,setHasAccount:setHasUser}}>
       <Routes>

        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element ={<Login/>}/>
          <Route path="/register" element ={<Register/>}/>
          <Route path="/leaderpage" element={<LeaderPage/>}/>
          <Route path="games/:gameName" element={<SingleGame/>}/>
          
        </Route>

       </Routes>
      </hasAccaunt.Provider>

    </div>
  );
}

export default App;
