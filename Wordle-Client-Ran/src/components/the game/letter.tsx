import { ChangeEvent, useEffect, useRef, useState } from "react";
import Keyboard from "../../containers/keyboard/keyboard";
import "./wordle.scss";


interface LetterProps {
  index: number;
  id: string;
  value: string;
}

export default function Letter({ index, id, value }: LetterProps) {
  const [inputValue, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);



  useEffect(() => {
    if (index === 0) {
      inputRef.current?.focus();
    }
  }, [index]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const lettersOnly = inputValue.replace(/[^a-zA-Z]/g, '');
    setValue(lettersOnly.toUpperCase());
  };
  
  const handleInputClick = (letter: string) => {
    const inputValue = letter;
    const lettersOnly = inputValue.replace(/[^a-zA-Z]/g, '');
    setValue(lettersOnly.toUpperCase());
  };

  return(
    <><input
      type="text"
      ref={inputRef}
      maxLength={1}
      onChange={handleInputChange}
      value={inputValue}
      id={id}

       />
    {/* <Keyboard onClick={(letter) => handleInputClick(letter)} /> */}
    </>
  );
};

