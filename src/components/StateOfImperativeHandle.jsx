import React, { useState, useRef } from 'react';
// import components
import CustomInput from './CustomInput';

function useImperativeHandle() {
    const [value, setValue] = useState('red')
    const inputRef = useRef();

    return (
        <div>
            <CustomInput
                ref={inputRef}
                value={value}
                onChange={e => setValue(e.target.value)} />
            <br />
            <button onClick={() => inputRef.current.alertHi()}>Focus</button>
        </div>
    )
}

export default useImperativeHandle;