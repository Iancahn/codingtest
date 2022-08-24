import React from 'react';

// import components
import Counter from './components/Counter';
// import Fetch from './components/Fetch';
// The 10 Hooks
import StateOfUse from './components/StateOfUse';
// import StateOfEffect from './components/StateOfEffect';
import StateOfReducer from './components/StateOfReducer';

function App() {
  return (
    <div className="App">
      <h1>The Ben Awad Google Testing of Fancy Mutant Best matrix hacker coders.</h1>
      <Counter />
      {/* <Fetch /> */}
      <h2>Below you will find the 10 React Hooks:</h2>
      <p>useState Example:</p>
      <StateOfUse />
      {/* <StateOfEffect /> */}
      <StateOfReducer />
    </div>
  );
}

export default App;
