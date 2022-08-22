import React, { useState } from 'react';

function Counter() {

    const [count, setCount] = useState(0);

    return (
        <div>
            <p>This is the current count: {count}</p>
            <button onClick={() => (setCount(count + 1))}>Increase Count</button>
        </div>
    )
}

export default Counter;


