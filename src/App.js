// Lilit
import {Route, Routes } from "react-router-dom";
import Layout from "./components/Layaouts/Layouts";
import Home from "./components/Home";
import LoginRegister from "./components/Header/LoginRegister/LoginRegister";
import Register from "./components/Header/LoginRegister/Register";
import Login from "./components/Header/LoginRegister/Login";
import LeaderPage from "./components/Header/LeaderPage/LeaderPage";
import SingleGame from "./components/Games/SingleGame";


import "./App.css";



function App() {
  
  return (
    <div className="App">
      <Routes>
        
        <Route path="/" element={<Layout/>}>
          <Route path="/login" element ={<Login/>}/>
          <Route path="/register" element ={<Register/>}/>
          <Route path="/leaderpage" element={<LeaderPage/>}/>
          <Route path="games/:gameName" element={<SingleGame/>}/>
          <Route path="/" element={<Home />} />
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
