import React, { useEffect, useState } from "react";
import "./keyboard.scss";

interface Props {
  onClick: (letter: string) => void;
  backgroundColor: string;
}

interface PreviousLetter {
  letter: string;
  backgroundColor: string;
}

const Keyboard = ({ onClick, backgroundColor }: Props) => {
  const keyboardLayout = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"]
  ];
  const [currentLetter, setCurrentLetter] = useState("");
  const [previousLetters, setPreviousLetters] = useState<PreviousLetter[]>([]);

  const handleKeyPress = (letter: string) => {
    setPreviousLetters([...previousLetters, { letter: currentLetter, backgroundColor }]);
    setCurrentLetter(letter);
    onClick(letter);
  };

  const getButtonStyle = (letter: string) => {
    if (letter === currentLetter) {
      return { backgroundColor };
    } else {
      const match = previousLetters.find(({ letter: prevLetter }) => prevLetter === letter);
      return match ? { backgroundColor: match.backgroundColor } : {};
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    const key = event.key.toUpperCase();
    if (keyboardLayout.flat().includes(key)) {
      event.preventDefault();
      handleKeyPress(key);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [currentLetter]);

  return (
    <div className="keyboard">
      {keyboardLayout.map((row, i) => (
        <div key={i} className="keyboard__row">
          {row.map((letter, j) => (
            <button
              key={j}
              className="keyboard__button"
              style={getButtonStyle(letter)}
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
