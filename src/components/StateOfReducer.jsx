import React, { useReducer } from 'react';

const initialState = { count: 0 };

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREASE":
            return { count: state.count + 1 };
        case "DECREASE":
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}

function StateOfReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h2>This is my useReduce state in action:</h2>
            <p>{state.count}</p>
            <button onClick={() => dispatch({ type: 'DECREASE' })}>-</button>
            <button onClick={() => dispatch({ type: 'INCREASE' })}>+</button>
        </div>
    );
}

export default StateOfReducer;