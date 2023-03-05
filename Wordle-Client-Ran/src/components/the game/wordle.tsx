import React, { useEffect, useRef, useState } from 'react';

import Keyboard from '../../containers/keyboard/keyboard';

import './wordle.scss';

interface WordleProps {
  numberOfInputs: number;
  numberOfLines: number;
  word: string;
}

export default function Wordle({ numberOfInputs=5, numberOfLines=3, word}: WordleProps) {
  const [inputValues, setInputValues] = useState<string[][]>        
    (Array(numberOfLines)
      .fill(Array(numberOfInputs)
      .fill('')));
    
  const [currentLine, setCurrentLine] = useState(0);
  const [currentCol, setCurrentCol] = useState(0);

  const [inputColors, setInputColors] = useState<string[][]>([]); // new state variable
  const [letterColors, setLetterColors] = useState('white'); // new state variable

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
    
    if (inputIndex === numberOfInputs - 1) {
      setCurrentLine(lineIndex + 1);
      setCurrentCol(0);
    } else {
      setCurrentLine(lineIndex);
      setCurrentCol(inputIndex+1);
    }

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

  const handleInputClick = (letter: string) => {

 
    const newInputValues = inputValues.map((line, i) => i === currentLine ? [...line] : line);
    newInputValues[currentLine][currentCol] = letter;
    setInputValues(newInputValues)



    if (currentCol === numberOfInputs - 1) {
      setCurrentLine(currentLine + 1);
      setCurrentCol(0);
    } else {
      setCurrentLine(currentLine);
      setCurrentCol(currentCol+1);
    }

      // Focus on the next input
  const nextIndex = currentCol + 1;
  
  if (nextIndex < numberOfInputs && letter != '') {
    inputRefs.current[currentLine][nextIndex]?.focus();
  } else if(letter != '' && newInputValues[currentLine].join('') === word.toUpperCase()){
    setTimeout(() => {
      alert('Well Done!\nYou succeeded!');
    }, 1), inputRefs.current[currentLine][currentCol]?.blur();
    } else if (currentLine + 1 < numberOfLines && letter != '') {
      setTimeout(() => {
        alert('Not terrible!\nTry again.');
      }, 1)
     ,      setTimeout(() => {
      inputRefs.current[currentLine + 1][0]?.focus();
    }, 2);
  } else if (letter != '' && newInputValues[currentLine].join('') != word.toUpperCase()) {
    setTimeout(() => {
      alert('Next time you will do better!');
    }, 1),inputRefs.current[currentLine][currentCol]?.blur();
  }
  
    // Check line result  
    const lineWord = newInputValues[currentLine].join('');
    const lineLetters = lineWord.split('');
    const wordLetters = word.toUpperCase().split('');
    const lineResult = lineLetters.map((newLetter, i) => {
      if (wordLetters.includes(newLetter)) {
        if (newLetter === wordLetters[i]) {
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
        newInputColors[currentLine] = lineResult;
        setInputColors(newInputColors);

        setLetterColors(newInputColors[currentLine][currentCol])
  
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
                onChange={(event) => handleInputChange(lineIndex, inputIndex, event.target.value)}
                onFocus={() => inputRefs.current[lineIndex][inputIndex]!.select()}
                style={{ backgroundColor: color }}
              />
            );
          })}
          <br />
        </div>
      ))}
      <Keyboard onClick={(letter) => handleInputClick(letter)} backgroundColor={letterColors}    />
    </div>
  )}
  