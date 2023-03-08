import React, { MutableRefObject, useEffect, useRef, useState } from "react";

import Keyboard from "../../containers/keyboard/keyboard";

import "./wordle.scss";

interface WordleProps {
  numberOfInputs: number;
  numberOfLines: number;
  word: string;
}
function updateInput(
  inputValues: string[][],
  lineIndex: number,
  inputIndex: number,
  lettersOnly: string,
  setInputValues: React.Dispatch<React.SetStateAction<string[][]>>,
  numberOfInputs: number,
  setCurrentLine: React.Dispatch<React.SetStateAction<number>>,
  setCurrentCol: React.Dispatch<React.SetStateAction<number>>
) {
  const newInputValues = inputValues.map((line, i) =>
    i === lineIndex ? [...line] : line
  );
  newInputValues[lineIndex][inputIndex] = lettersOnly.toUpperCase();

  setInputValues(newInputValues);

  if (inputIndex === numberOfInputs - 1) {
    setCurrentLine(lineIndex + 1);
    setCurrentCol(0);
  } else {
    setCurrentLine(lineIndex);
    setCurrentCol(inputIndex + 1);
  }
  return newInputValues;
}

function colorInputsAndButtons(
  newInputValues: string[][],
  lineIndex: number,
  word: string,
  inputColors: string[][],
  setInputColors: React.Dispatch<React.SetStateAction<string[][]>>,
  setLetterColors: React.Dispatch<React.SetStateAction<string>>,
  inputIndex: number
) {
  const lineWord = newInputValues[lineIndex].join("");
  const lineLetters = lineWord.split("");
  const wordLetters = word.toUpperCase().split("");
  const lineResult = lineLetters.map((newLetter, i) => {
    if (wordLetters.includes(newLetter)) {
      if (newLetter === wordLetters[i]) {
        return "green";
      } else {
        return "brown";
      }
    } else {
      return "red";
    }
  });
  // set color values for each input in the line
  const newInputColors = [...inputColors];
  newInputColors[lineIndex] = lineResult;
  setInputColors(newInputColors);

  setLetterColors(newInputColors[lineIndex][inputIndex]);
}

function focusOnTheNextInput(
  inputIndex: number,
  numberOfInputs: number,
  lettersOnly: string,
  inputRefs: MutableRefObject<HTMLInputElement[][]>,
  lineIndex: number,
  newInputValues: string[][],
  word: string,
  numberOfLines: number
) {
  const nextIndex = inputIndex + 1;

  if (nextIndex < numberOfInputs && lettersOnly != "") {
    inputRefs.current[lineIndex][nextIndex]?.focus();
  } else if (
    lettersOnly != "" &&
    newInputValues[lineIndex].join("") === word.toUpperCase()
  ) {
    setTimeout(() => {
      alert("Well Done!\nYou succeeded!");
    }, 1),
      inputRefs.current[lineIndex][inputIndex]?.blur();
  } else if (lineIndex + 1 < numberOfLines && lettersOnly != "") {
    setTimeout(() => {
      alert("Not terrible!\nTry again.");
    }, 1),
      setTimeout(() => {
        inputRefs.current[lineIndex + 1][0]?.focus();
      }, 2);
  } else if (
    lettersOnly != "" &&
    newInputValues[lineIndex].join("") != word.toUpperCase()
  ) {
    setTimeout(() => {
      alert("Next time you will do better!");
    }, 1),
      inputRefs.current[lineIndex][inputIndex]?.blur();
  }
}
export default function Wordle({
  numberOfInputs = 5,
  numberOfLines = 3,
  word,
}: WordleProps) {
  const [inputValues, setInputValues] = useState<string[][]>(
    Array(numberOfLines).fill(Array(numberOfInputs).fill(""))
  );

  const [currentLine, setCurrentLine] = useState(0);
  const [currentCol, setCurrentCol] = useState(0);

  const [inputColors, setInputColors] = useState<string[][]>([]);
  const [letterColors, setLetterColors] = useState("white");

  const inputRefs = useRef<HTMLInputElement[][]>(
    Array.from({ length: numberOfLines }, () =>
      Array.from({ length: numberOfInputs })
    )
  );

  useEffect(() => {
    inputRefs.current[0][0]?.focus();
  }, []);

  const handleInputChange = (
    lineIndex: number,
    inputIndex: number,
    value: string
  ) => {
    const lettersOnly = value.replace(/[^a-zA-Z]/g, "");
    const newInputValues = updateInput(
      inputValues,
      lineIndex,
      inputIndex,
      lettersOnly,
      setInputValues,
      numberOfInputs,
      setCurrentLine,
      setCurrentCol
    );

    // Focus on the next input
    focusOnTheNextInput(
      inputIndex,
      numberOfInputs,
      lettersOnly,
      inputRefs,
      lineIndex,
      newInputValues,
      word,
      numberOfLines
    );

    // Set color values for each input in the line
    colorInputsAndButtons(
      newInputValues,
      lineIndex,
      word,
      inputColors,
      setInputColors,
      setLetterColors,
      inputIndex
    );
  };

  const handleInputClick = (letter: string) => {
    const lineIndex = currentLine;
    const lettersOnly = letter;
    const inputIndex = currentCol;

    const newInputValues = updateInput(
      inputValues,
      lineIndex,
      inputIndex,
      lettersOnly,
      setInputValues,
      numberOfInputs,
      setCurrentLine,
      setCurrentCol
    );

    // Focus on the next input
    focusOnTheNextInput(
      inputIndex,
      numberOfInputs,
      lettersOnly,
      inputRefs,
      lineIndex,
      newInputValues,
      word,
      numberOfLines
    );

    // Set color values for each input in the line
    colorInputsAndButtons(
      newInputValues,
      lineIndex,
      word,
      inputColors,
      setInputColors,
      setLetterColors,
      inputIndex
    );
  };

  return (
    <div>
      {inputValues.map((line, lineIndex) => (
        <div key={lineIndex} className="word">
          {line.map((value, inputIndex) => {
            const color = inputColors[lineIndex]?.[inputIndex];
            return (
              <input
                key={inputIndex}
                type="text"
                maxLength={1}
                value={value}
                ref={(input) =>
                  (inputRefs.current[lineIndex][inputIndex] = input!)
                }
                onChange={(event) =>
                  handleInputChange(lineIndex, inputIndex, event.target.value)
                }
                onFocus={() =>
                  inputRefs.current[lineIndex][inputIndex]!.select()
                }
                style={{ backgroundColor: color }}
              />
            );
          })}
          <br />
        </div>
      ))}
      <Keyboard
        onClick={(letter) => handleInputClick(letter)}
        backgroundColor={letterColors}
      />
    </div>
  );
}
