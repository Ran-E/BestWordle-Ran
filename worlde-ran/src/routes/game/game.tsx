import React, { useState } from "react";

import Worlde from "../../components/the game/worlde";
import Navbar from "../../containers/Header/header";
// import Keyboard from './containers/keyboard/Keyboard';
// import Navbar from "../../containers/Header/Nav";

export default function Game() {
  return (
    <div>
      <Navbar />
      <Worlde word={"hello"} numberOfLines={5} numberOfInputs={5} />
    </div>
  );
}
