import "./game.scss";

import Navbar from "../../containers/Header/header";
import Wordle from "../../components/the game/wordle";
export default function Game() {
  return (
    <>
      <div>
        <Navbar />
        <Wordle numberOfInputs={3} numberOfLines={8} word={"abc"}  />

        {/* <Wordle word={"hello"} numberOfLines={5} numberOfInputs={5}  /> */}
      </div>
      <footer className="footerGame">Copyright &copy; 2023 Ran Elbaz</footer>
    </>
  );
}
