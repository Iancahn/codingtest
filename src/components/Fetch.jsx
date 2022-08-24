import React, { useEffect, useState } from 'react';

function Fetch() {
    const [posts, setPosts] = useState([]);
    const [userInfos, setUserInfos] = useState([]);

    useEffect(() => {
        fetch('https://randomuser.me/api/')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setPosts(data);
                return setUserInfos(data.results)
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [])

    return (
        <div>
            <pre>
                <h2>{userInfos}</h2>
            </pre>
        </div>
    )
}

export default Fetch;


