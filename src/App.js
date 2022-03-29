// Lilit
import {Route, Routes } from "react-router-dom";
import Layout from "./components/Layaouts/Layouts";
import Home from "./components/Home";
import Register from "./components/Header/LoginRegister/password/Register";
import Login from "./components/Header/LoginRegister/login/Login";
import LeaderPage from "./components/Header/LeaderPage/LeaderPage";
import SingleGame from "./components/Games/SingleGame";
import { getAuth,onAuthStateChanged,signOut } from "firebase/auth";


import "./App.css";
import { useEffect, useState } from "react";



function App() {
  
  const [hesAccaunt,setHasAccount] = useState(false)
  const [alluserData,setAlluserData] = useState('')
  const [accauntData,setAccauntData] = useState('')
  
  
  useEffect(()=>{
    
    const auth = getAuth();
    // signOut(auth)
  
    onAuthStateChanged(auth,(user) => user ?

                setHasAccount(user)
                  : 
                setHasAccount(user) )


  },[])

  
  return (
    <div className="App">
      <Routes>
        
        <Route path="/" element={<Layout hesAccaunt={hesAccaunt} setHasAccount={setHasAccount} setAccauntData={setAccauntData}/>}>
          <Route path="/login" element ={<Login/>}/>
          <Route path="/register" element ={<Register/>}/>
          <Route path="/leaderpage" element={<LeaderPage accauntData={accauntData} setAccauntData={setAccauntData} hesAccaunt={hesAccaunt} />}/>
          <Route path="games/:gameName" element={<SingleGame accauntData={accauntData} setAccauntData={setAccauntData} hesAccaunt={hesAccaunt} />}/>
          <Route path="/" element={<Home />} />
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
