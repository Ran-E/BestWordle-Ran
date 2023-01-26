import { Route, Routes } from "react-router-dom";
import Game from "./routes/game/game";
import Main from "./routes/root/Main";
import "./App.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/home" />
      <Route path="/game" element={<Game />} />
    </Routes>
  );
}

export default App;
