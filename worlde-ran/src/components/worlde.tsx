import React, { useState } from "react";

type Props = {
  word: string;
  numberOfLines: number;
  numberOfInputs: number;
};

const Wordle: React.FC<Props> = ({ word, numberOfLines, numberOfInputs }) => {
  const [inputs, setInputs] = useState<string[][]>(
    Array(numberOfLines)
      .fill(null)
      .map(() => Array(numberOfInputs).fill(""))
  );
  const [currentRow, setCurrentRow] = useState(0);
  const [currentCol, setCurrentCol] = useState(0);
  const [color, setColor] = useState<string[][]>(
    Array(numberOfLines)
      .fill(null)
      .map(() => Array(numberOfInputs).fill("white"))
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    row: number,
    col: number
  ) => {
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
      setCurrentCol(col + 1);
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
  };

  return (
    <div>
      {inputs.map((inputRow, i) => (
        <div key={i}>
          {inputRow.map((input, j) => (
            <input
              key={j}
              type="text"
              value={input}
              onChange={(e) => handleChange(e, i, j)}
              style={{ backgroundColor: color[i][j] }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Wordle;
