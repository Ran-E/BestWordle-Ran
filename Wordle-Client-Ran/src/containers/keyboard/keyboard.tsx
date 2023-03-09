import React, { useCallback, useEffect, useMemo, useState } from "react";
import "./keyboard.scss";

interface Props {
  onClick: (letter: string) => void;
  backgroundColor: string;
}

interface PreviousLetter {
  letter: string;
  backgroundColor: string;
}

function Keyboard({ onClick, backgroundColor }: Props) {
  const keyboardLayout = useMemo(
    () => [
      ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
      ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
      ["Z", "X", "C", "V", "B", "N", "M"],
    ],
    []
  );

  const [previousLetters, setPreviousLetters] = useState<PreviousLetter[]>([]);
  const [currentLetter, setCurrentLetter] = useState<string>("");

  const handleKeyPress = useCallback(
    (letter: string) => {
      setPreviousLetters((prevLetters) => [
        ...prevLetters,
        { letter: currentLetter, backgroundColor },
      ]);
      setCurrentLetter(letter);
      onClick(letter);
    },
    [backgroundColor, currentLetter, onClick]
  );

  const getButtonStyle = useCallback(
    (letter: string) => {
      if (letter === currentLetter) {
        return { backgroundColor };
      } else {
        const match = previousLetters.find(
          ({ letter: prevLetter }) => prevLetter === letter
        );
        return match ? { backgroundColor: match.backgroundColor } : {};
      }
    },
    [backgroundColor, currentLetter, previousLetters]
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toUpperCase();
      if (keyboardLayout.flat().includes(key)) {
        if (event.ctrlKey) {
          event.preventDefault();
        }
        handleKeyPress(key);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [keyboardLayout, handleKeyPress]);

  const renderButton = (letter: string, index: number) => (
    <button
      key={index}
      className="keyboard__button"
      style={getButtonStyle(letter)}
      onClick={() => handleKeyPress(letter)}
    >
      {letter}
    </button>
  );

  const renderRow = (row: string[], index: number) => (
    <div key={index} className="keyboard__row">
      {row.map(renderButton)}
    </div>
  );

  return <div className="keyboard">{keyboardLayout.map(renderRow)}</div>;
}

export default Keyboard;
