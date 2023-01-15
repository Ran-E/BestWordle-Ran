import React, { useEffect, useRef, useState } from 'react';
import '../styles/TextInputGrid.scss';

type Inputs = {
  [key: string]: string;
}

export const TextInputs = (props: { numLines: number, numInputsPerLine: number }) => {
  const [inputs, setInputs] = useState<Inputs>({});
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    if (value.length > 1) {
      return;
    }
    setInputs({ ...inputs, [name]: value });
  };

  useEffect(()=>{
    if(inputRefs.current[0].value === ""){
      inputRefs.current[0].focus()
    }
  })

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      return;
    }
    const currentIndex = parseInt(event.currentTarget.name, 10);
    const nextIndex = currentIndex + 1;
    if (nextIndex >= props.numInputsPerLine * props.numLines) {
      return;
    }
    inputRefs.current[nextIndex].focus();
  };


  return (
    <>
    <div className='mainGrid'>
      {[...Array(props.numLines)].map((_, index) => (
        <div key={index} id={'playGrid'+index} className='playGrid'>
          {[...Array(props.numInputsPerLine)].map((_, inputIndex) => {
            const inputName = index * props.numInputsPerLine + inputIndex;
            return (
              <input
                key={inputName}
                name={inputName.toString()}
                // ref={(input) => inputRefs.current[inputName] = input}
                value={inputs[inputName.toString()] || ''}
                onChange={handleChange}
                onKeyUp={handleKeyDown}
              />
            );
          })}
        </div>
      ))}
    </div>
    </>

  );
};

export default TextInputs;
