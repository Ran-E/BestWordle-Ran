import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/loginWithLocalStorage/loginWithLocalStorage";
import Welcome from "./routes/game/game";
import Root from "./routes/root/root";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />} />
      <Route path="/home" />
      <Route path="/game" element={<Welcome />} />
    </Routes>
  );
}

export default App;
