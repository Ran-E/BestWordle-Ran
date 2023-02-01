import { Route, Routes } from "react-router-dom";


import "./App.scss";
import Login from "./containers/loginModal/loginModal";
import Game from "./routes/game/game";
import Main from "./routes/root/Main";

function App() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Main />} />
        <Route path="/game" element={<Game />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
