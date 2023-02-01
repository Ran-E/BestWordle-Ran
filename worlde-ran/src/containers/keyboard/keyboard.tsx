import React from "react";
import "./keyboard.scss";

interface Props {
  onClick: (letter: string) => void;
}

const Keyboard = ({ onClick }: Props) => {
  const firstRow = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
  const secondRow = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
  const thirdRow = ["z", "x", "c", "v", "b", "n", "m"];

  return (
    <div>
      <div className="letters">
        {firstRow.map((letter) => (
          <button
            className="button"
            key={letter}
            onClick={() => onClick(letter)}
          >
            {letter}
          </button>
        ))}
      </div>
      <div className="letters">
        {secondRow.map((letter) => (
          <button
            className="button"
            key={letter}
            onClick={() => onClick(letter)}
          >
            {letter}
          </button>
        ))}
      </div>
      <div className="letters">
        {thirdRow.map((letter) => (
          <button
            className="button"
            key={letter}
            onClick={() => onClick(letter)}
          >
            {letter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Keyboard;
