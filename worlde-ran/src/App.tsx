import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/loginWithLocalStorage/loginWithLocalStorage";
import Game from "./routes/game/game";
import Main from "./routes/root/Main";
import LoginForm from "./containers/logForm/loginModal"
import "./App.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/home" />
      <Route path="/game" element={<Game />}  />
    </Routes>
  );
}

export default App;
