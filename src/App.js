import React from 'react';

// import components
import Counter from './components/Counter';
// import Fetch from './components/Fetch';
// The 10 Hooks
import StateOfUse from './components/StateOfUse';

function App() {
  return (
    <div className="App">
      <h1>The Ben Awad Google Testing Fancy Fancy Best coder matrix hacker course.</h1>
      <Counter />
      {/* <Fetch /> */}
      <h2>Below you will find the 10 React Hooks:</h2>
      <p>useState Example:</p>
      <StateOfUse />
    </div>
  );
}

export default App;
