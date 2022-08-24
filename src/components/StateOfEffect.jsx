import React, { useEffect } from 'react';
import axios from 'axios';

function StateOfEffect() {

    useEffect(() => {
        console.log("hello my people")
    });

    return (
        <div>
            <h1>Hello World</h1>
        </div>
    )
}

export default StateOfEffect;