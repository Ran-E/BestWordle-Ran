import React from "react";
import "./keyboard.scss";

interface Props {
  onClick: (letter: string) => void;
}

const Keyboard = ({ onClick }: Props) => {
  const keyboardLayout = [  
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"]
  ];

  const handleKeyPress = (letter: string) => {
    onClick(letter);
  };

  return (
    <div className="keyboard">
      {keyboardLayout.map((row, i) => (
        <div key={i} className="keyboard__row">
          {row.map((letter, j) => (
            <button
              key={j}
              className="keyboard__button"
              onClick={() => handleKeyPress(letter)}
            >
              {letter}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
