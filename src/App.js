import React from 'react';
// import styling
import './App.css'
// The 10 Hooks
import StateOfUse from './components/StateOfUse';
import StateOfEffect from './components/StateOfEffect';
import StateOfReducer from './components/StateOfReducer';
import StateOfRef from './components/StateOfRef';
import StateOfLayoutEffect from './components/StateOfLayoutEffect';
import StateOfImperativeHandle from './components/StateOfImperativeHandle';

function App() {
  return (
    <div className="App">
      <h1>The Ben Awad Google Testing of Fancy Mutant Best matrix hacker coders.</h1>
      <h2>Below you will find the 10 React Hooks:</h2>
      <div className="grey-background">
        <p> 01 | useState Example:</p>
        <StateOfUse />
      </div>
      <div className="white-background">
        <p> 02 | This is my useEffect example:</p>
        <StateOfEffect />
      </div>
      <div className="grey-background">
        <p> 03 | This is my useReducer example:</p>
        <StateOfReducer />
      </div>
      <div className="white-background">
        <p> 04 | This is my useRef example:</p>
        <StateOfRef />
      </div>
      <div className="grey-background">
        <p> 05 | This is my useLayoutEffect example:</p>
        <StateOfLayoutEffect />
      </div>
      <div className="white-background">
        <p> 06 | This is my useImperativeHandle example:</p>
        <StateOfImperativeHandle />
      </div>
    </div>
  );
}

export default App;
