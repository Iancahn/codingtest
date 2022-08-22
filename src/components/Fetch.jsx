import React, { useEffect, useState } from 'react';

function Fetch() {
    const [posts, setPosts] = useState([]);
    const [randomUserDataJSON, setRandomUserDataJSON] = useState('');

    useEffect(() => {
        fetch('https://randomuser.me/api/')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setPosts(data);
                return setRandomUserDataJSON(JSON.stringify(data));
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [])

    return (
        <div>
            <h2>{randomUserDataJSON}</h2>
        </div>
    )
}

export default Fetch;


