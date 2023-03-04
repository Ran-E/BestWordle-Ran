import React, { useEffect, useRef, useState } from 'react';

import './wordle.scss';

interface WordleProps {
  numberOfInputs: number;
  numberOfLines: number;
  word: string;
}

export default function Wordle({ numberOfInputs, numberOfLines, word}: WordleProps) {
  const [inputValues, setInputValues] = useState<string[][]>        
    (Array(numberOfLines)
      .fill(Array(numberOfInputs)
      .fill('')));

  const [inputColors, setInputColors] = useState<string[][]>([]); // new state variable

  const inputRefs = useRef<HTMLInputElement[][]>(Array.from({ length: numberOfLines }, () =>  
    Array.from({ length: numberOfInputs })));

  useEffect(() => {
    inputRefs.current[0][0]?.focus();
  }, []);

  const handleInputChange = (lineIndex: number, inputIndex: number, value: string) => {
    const lettersOnly = value.replace(/[^a-zA-Z]/g, '');
    const newInputValues = inputValues.map((line, i) => i === lineIndex ? [...line] : line);
    newInputValues[lineIndex][inputIndex] = lettersOnly.toUpperCase();
    setInputValues(newInputValues);

  // Focus on the next input
  const nextIndex = inputIndex + 1;
  if (nextIndex < numberOfInputs && lettersOnly != '') {
    inputRefs.current[lineIndex][nextIndex]?.focus();
  } else if(lettersOnly != '' && newInputValues[lineIndex].join('') === word.toUpperCase()){
    setTimeout(() => {
      alert('Well Done!\nYou succeeded!');
    }, 1), inputRefs.current[lineIndex][inputIndex]?.blur();
    } else if (lineIndex + 1 < numberOfLines && lettersOnly != '') {
      setTimeout(() => {
        alert('Not terrible!\nTry again.');
      }, 1)
     ,      setTimeout(() => {
      inputRefs.current[lineIndex + 1][0]?.focus();
    }, 2);
  } else if (lettersOnly != '' && newInputValues[lineIndex].join('') != word.toUpperCase()) {
    setTimeout(() => {
      alert('Next time you will do better!');
    }, 1),inputRefs.current[lineIndex][inputIndex]?.blur();
  }

  // Check line result  
  const lineWord = newInputValues[lineIndex].join('');
  const lineLetters = lineWord.split('');
  const wordLetters = word.toUpperCase().split('');
  const lineResult = lineLetters.map((letter, i) => {
    if (wordLetters.includes(letter)) {
      if (letter === wordLetters[i]) {
        return 'green';
      } else {
        return 'brown';
      }
    } else {
      return 'red';
    }
  });
      // set color values for each input in the line
      const newInputColors = [...inputColors];
      newInputColors[lineIndex] = lineResult;
      setInputColors(newInputColors);

      
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
                ref={(input) => (inputRefs.current[lineIndex][inputIndex] = input!)}
                onChange={(event) =>
                  handleInputChange(lineIndex, inputIndex, event.target.value)
                }
                onFocus={() => inputRefs.current[lineIndex][inputIndex]!.select()}
                style={{ backgroundColor: color }}
              />
              
            );
          })}
          <br />
        </div>
      ))}
    </div>
  )}
  