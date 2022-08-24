import React, { useLayoutEffect, useRef, useEffect } from 'react';

function StateOfLayoutEffect() {
    const inputRef = useRef(null);

    useLayoutEffect(() => {
        console.log(inputRef.current.value);
    }, []);

    useEffect(() => {
        inputRef.current.value = "This will show up on content paint(useEffect), but not logged in console.";
    })

    return (
        <div>
            <input ref={inputRef} value="This will be console logged(useLayoutEffect), because it happens before content is delivered to user" />
        </div>
    )
}

export default StateOfLayoutEffect;