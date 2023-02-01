import { Route, Routes } from "react-router-dom";

import Game from "./routes/game/game";
import Main from "./routes/root/Main";
import "./App.scss";
import Login from "./containers/loginModal/loginModal";

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
