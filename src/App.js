import React from 'react';
// import styling
import './App.css'
// The 10 Hooks
import StateOfUse from './components/StateOfUse';
import StateOfEffect from './components/StateOfEffect';
import StateOfReducer from './components/StateOfReducer';

function App() {
  return (
    <div className="App">
      <h1>The Ben Awad Google Testing of Fancy Mutant Best matrix hacker coders.</h1>
      <h2>Below you will find the 10 React Hooks:</h2>
      <div className="grey-background">
        <p>useState Example:</p>
        <StateOfUse />
      </div>
      <div className="white-background">
        <p> This is my UseEffect example:</p>
        <StateOfEffect />
      </div>
      <div className="grey-background">
        <p> This is my UseReducer example:</p>
        <StateOfReducer />
      </div>
    </div>
  );
}

export default App;
