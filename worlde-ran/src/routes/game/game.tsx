import React, { useState } from "react";

import Worlde from "../../components/worlde";
// import Navbar from "../../containers/Navbar/Navbar";
import Navbar from "../../containers/Header/header";
// import Keyboard from './containers/keyboard/Keyboard';

export default function Game() {
  return (
    <div>
      <Navbar />
      <Worlde word={"hello"} numberOfLines={5} numberOfInputs={5} />
    </div>
  );
}
