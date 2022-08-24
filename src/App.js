import React from 'react';

// The 10 Hooks
import StateOfUse from './components/StateOfUse';
import StateOfEffect from './components/StateOfEffect';
import StateOfReducer from './components/StateOfReducer';

function App() {
  return (
    <div className="App">
      <h1>The Ben Awad Google Testing of Fancy Mutant Best matrix hacker coders.</h1>
      <h2>Below you will find the 10 React Hooks:</h2>
      <p>useState Example:</p>
      <StateOfUse />
      <p> This is my UseEffect example:</p>
      <StateOfEffect />
      <p> This is my UseReducer example:</p>
      <StateOfReducer />
    </div>
  );
}

export default App;
