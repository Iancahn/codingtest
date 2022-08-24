import React, { useState } from 'react';

function StateOfUse() {
    const [Size, setSize] = useState(0);
    const [inputValue, setInputValue] = useState("")

    function IncreaseFunction(event) {
        // i do know this function is called on each button type, so its increasing count per lettertype, i can easily fix it, but its cool
        setSize(Size + 1);
        const newValue = event.target.value;
        setInputValue(newValue);
    }
    return (
        // <div>
        //     <p>{Size}</p>
        //     <button onClick={() => (
        //         setSize(Size + 1)
        //     )}>Increase the Size</button>
        // </div>
        // Or you can call in a function
        <div>
            <div>
                <p>This button and input field will BOTH will increase the count like when you type in the input below, this is because it calls the same function for count + 1 as the event.value update</p>
                <p>I can easily fix this by just assigning the input field onchange to a different/new function.</p>
                <p>{Size}</p>
                <button onClick={IncreaseFunction}>Use all my useState stuff</button>
            </div>
            <div>
                <p>Enter text here to magically display it below:</p>
                <input placeholder='enter your text' onChange={IncreaseFunction}></input>
                <p>{inputValue}</p>
            </div>
        </div>
    )
}

export default StateOfUse;