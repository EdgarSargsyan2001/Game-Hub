// Lilit
import { useEffect, useState, createContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { auth } from "./firebase/firebase";

import Register from "./components/Header/LoginRegister/password/Register";
import Login from "./components/Header/LoginRegister/login/Login";
import LeaderPage from "./components/Header/LeaderPage/LeaderPage";
import SingleGame from "./components/Games/SingleGame";
import Layout from "./components/Layaouts/Layouts";
import Home from "./components/Home";
import theme from "./Theme/theme";

import "./App.css";


export const hasAccaunt = createContext();

function App() {


  const [hasUser, setHasUser] = useState(false);

  useEffect(() => {

    onAuthStateChanged(auth, (user) =>

      user ? setHasUser(user) : setHasUser(user)

    );

  }, []);



  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <hasAccaunt.Provider
          value={{ hesAccaunt: hasUser, setHasAccount: setHasUser }}
        >
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/leaderpage" element={<LeaderPage />} />
              <Route path="games/:gameName" element={<SingleGame />} />
            </Route>
          </Routes>
        </hasAccaunt.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
