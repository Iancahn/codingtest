import React, { useEffect, useState } from 'react';
import axios from 'axios';

function StateOfEffect() {

    const [data, setData] = useState('');

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/comments")
            .then((response) => {
                setData(response.data[0].email);
            });
    });

    return (
        <div>
            <h1>Hello World {data}</h1>
            <p>The text above is being pulled from an API with AXIOS. And then set to our date with a certain place in the array.</p>
        </div>
    )
}

export default StateOfEffect;