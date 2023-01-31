import "./game.scss";

import Worlde from "../../components/the game/worlde";
import Navbar from "../../containers/Header/header";
import Keyboard from "../../containers/keyboard/keyboard";
// import Navbar from "../../containers/Header/Nav";

export default function Game() {
  return (
    <>
      <div>
        <Navbar />
        <Worlde word={"hello"} numberOfLines={5} numberOfInputs={5} />
        <Keyboard />
      </div>
      <footer className="footerGame">Copyright &copy; 2023 Ran Elbaz</footer>
    </>
  );
}
