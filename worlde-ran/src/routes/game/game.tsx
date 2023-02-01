import "./game.scss";

import Worlde from "../../components/the game/worlde";
import Navbar from "../../containers/Header/header";
import Keyboard from "../../containers/keyboard/keyboard";

export default function Game() {
  return (
    <>
      <div>
        <Navbar />
        <Worlde word={"hello"} numberOfLines={5} numberOfInputs={5} />
      </div>
      <footer className="footerGame">Copyright &copy; 2023 Ran Elbaz</footer>
    </>
  );
}
