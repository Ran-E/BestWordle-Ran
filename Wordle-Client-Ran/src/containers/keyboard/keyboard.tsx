import React from "react";
import "./keyboard.scss";

interface Props {
  onClick: (letter: string) => void;
}

const Keyboard = ({ onClick }: Props) => {
  const keyboardLayout = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["z", "x", "c", "v", "b", "n", "m"],
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
