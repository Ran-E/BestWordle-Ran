import React, { useState } from "react";

import TextInputs from "../../components/TextInputs";
import Navbar from "../../containers/Navbar/Navbar";
// import Keyboard from './containers/keyboard/Keyboard';

// const handleInput = (input: string) => {
//   console.log(`Input received: ${input}`);
// };

// const handleEnter = () => {
//   console.log("Enter button clicked");
// };

// const handleDelete = () => {
//   console.log("Delete button clicked");
// };

export default function Game() {
  return (
    <div>
      <Navbar />
      <h1>2</h1>
      <TextInputs numInputsPerLine={5} numLines={9} />
      {/* <Keyboard
        onInput={handleInput}
        onEnter={handleEnter}
        onDelete={handleDelete}
      /> */}
    </div>
  );
}
