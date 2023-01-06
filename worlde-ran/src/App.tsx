import React from 'react';
import TextInputs from './components/TextInputs';
// import Keyboard from './components/Keyboard';

function App() {
  return (
    <div>
        <TextInputs numInputsPerLine={5} numLines={9}/>
        {/* <Keyboard onInput={this.handleInput} onEnter={this.handleEnter} onDelete={this.handleDelete} /> */}
    </div>
  );
}


export default App;