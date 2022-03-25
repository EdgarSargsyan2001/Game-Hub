import {Route, Routes } from "react-router-dom";
import Layout from "./components/Layaouts/Layouts";
import Games from "./components/Games/Games";
import Home from "./components/Header/Home";
import LoginRegister from "./components/Header/LoginRegister/LoginRegister";
import SingleGame from "./components/Games/SingleGame";


import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element ={<LoginRegister/>}/>
          <Route path="/games" element={<Games />} />
          <Route path="/games/:gameName" element={<SingleGame/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
