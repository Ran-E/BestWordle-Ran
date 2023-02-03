import React, { ChangeEvent,useRef, useState } from "react";

import Keyboard from "../../containers/keyboard/keyboard";
import "./wordle.scss";

interface Props {
  word: string;
  numberOfLines: number;
  numberOfInputs: number;
}


const Wordle = ({ word, numberOfLines, numberOfInputs }: Props) => {
  const [inputs, setInputs] = useState<string[][]>(
    Array(numberOfLines)
      .fill(null)
      .map(() => Array(numberOfInputs).fill(""))
  );

  const fullWord = useRef("");

  const [currentRow, setCurrentRow] = useState(0);
  const [currentCol, setCurrentCol] = useState(0);


  const [color, setColor] = useState<string[][]>(
    Array(numberOfLines)
      .fill(null)
      .map(() => Array(numberOfInputs).fill("white"))
  );
 

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    row: number,
    col: number
  ) => {

        if (!/^[a-zA-Z]+$/.test(e.target.value)) return;

    const updatedInputs = inputs.map((inputRow, i) => {
      if (i === row) {
        return inputRow.map((input, j) => (j === col ? e.target.value : input));
      }
      return inputRow;
    });
    setInputs(updatedInputs);

    if (col === numberOfInputs - 1) {
      setCurrentRow(row + 1);
      setCurrentCol(0);
    } else {
      setCurrentRow(row);
      setCurrentCol(col+1);
    }

    const updatedColor = color.map((colorRow, i) => {
      if (i === row) {
        return colorRow.map((color, j) => {
          if (j === col) {
            if (word.includes(e.target.value)) {
              if (word[j] === e.target.value) {
                return "green";
              }
              return "brown";
            }
            return "white";
          }
          return color;
        });
      }
      return colorRow;
    });
    setColor(updatedColor);

    if(fullWord.current.length < word.length)
    {fullWord.current = fullWord.current + e.target.value;
      document
      .getElementsByTagName("input")[row * numberOfInputs + col + 1].focus(); 

    } 
    else if (fullWord.current.length === word.length) {
      if (fullWord.current == word) {
        alert("Success!");
        fullWord.current="";
        document
        .getElementsByTagName("input")[row * numberOfInputs + col].focus(); 
      } else {
        fullWord.current="";
        alert("Fail!");
        document
        .getElementsByTagName("input")[row * numberOfInputs + col + 1].focus(); 
      }
    }

}
  const handleClick = (letter: string) => {
    const updatedInputs = inputs.map((inputRow, i) => {
      if (i === currentRow) {
        return inputRow.map((input, j) => {
          if (j === currentCol) {
            return letter;
          }
          return input;
        });
      }
      return inputRow;
    });
    setInputs(updatedInputs);

    if (currentRow === numberOfInputs - 1) {
      setCurrentRow(currentRow + 1);
      setCurrentCol(0);
    } else {
      setCurrentRow(currentRow);
      setCurrentCol(currentCol + 1);
    }

    const updatedColor = color.map((colorRow, i) => {
      if (i === currentRow) {
        return colorRow.map((color, j) => {
          if (j === currentCol) {
            if (word.includes(letter)) {
              if (word[j] === letter) {
                return "green";
              }
              return "brown";
            }
            return "white";
          }
          return color;
        });
      }
      return colorRow;
    });
    setColor(updatedColor);

    document
      .getElementsByTagName("input")[currentRow * numberOfInputs + currentCol + 1].focus();
  };
  
  
  return (
    <div>
      {inputs.map((inputRow, i) => (
        <div key={i} className="word">
          {inputRow.map((input, j) => (
            <input
              key={j}
              type="text"
              value={input}
              maxLength={1}
              onChange={(e) => handleChange(e, i, j)}
              style={{ backgroundColor: color[i][j] }}
            />
          ))}
        </div>
      ))}
      <Keyboard onClick={handleClick} />
    </div>
  );
};

export default Wordle;