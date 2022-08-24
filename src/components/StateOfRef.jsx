import React, { useRef } from 'react';

function StateOfRef() {

    const inputRef = useRef(null);

    const clickHandler = () => {
        inputRef.current.focus();
        console.log(inputRef.current.value);
    }

    return (
        <div>
            <h1>Clicking the button will call the clickHandler, which inturns logs the inputRef.CURRENT.value</h1>
            <input type="text" placeholder='Enter your text here' ref={inputRef} />
            <button onClick={clickHandler}>Change Name</button>
        </div>
    )
}

export default StateOfRef;