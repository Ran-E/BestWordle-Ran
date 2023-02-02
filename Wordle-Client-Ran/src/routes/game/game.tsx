import "./game.scss";

import Wordle from "../../components/the game/wordle";
import Navbar from "../../containers/Header/header";
export default function Game() {
  return (
    <>
      <div>
        <Navbar />
        <Wordle word={"hello"} numberOfLines={5} numberOfInputs={5}  />
      </div>
      <footer className="footerGame">Copyright &copy; 2023 Ran Elbaz</footer>
    </>
  );
}
