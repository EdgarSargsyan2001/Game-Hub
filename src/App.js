// Lilit
import {Route, Routes } from "react-router-dom";
import Layout from "./components/Layaouts/Layouts";
import Games from "./components/Games/Games";
import Home from "./components/Header/Home";
import LoginRegister from "./components/Header/LoginRegister/LoginRegister";
import SingleGame from "./components/Games/SingleGame";


import "./App.css";

import { Route, Routes } from "react-router-dom";
import './App.css';
develop

function App() {
  
  return (
    <div className="App">
      <Routes>
// Lilit
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element ={<LoginRegister/>}/>
          <Route path="/games" element={<Games />} />
          <Route path="/games/:gameName" element={<SingleGame/>}/>
        </Route>
// =======

        <Route path="/" element={<div>home</div>} />
        <Route path="page1" element={<div>page1</div>} />

//>>>>>>> develop
      </Routes>
    </div>
  );
}

export default App;
