import axios from 'axios';
import React, { useEffect, useState } from 'react';

function SingleUser({ username }) {
    const [showd, setShowd] = useState(null);

    async function getApidata() {
        try {
            const res = await axios.get(`https://api.github.com/users/${username}`);
            setShowd(res.data);
        } catch (error) {
            console.error("Error fetching data:", error);
            setShowd(null);
        }
    }

    useEffect(() => {
        if (username) {
            getApidata();
        }
    }, [username]);

    return (
        <div className="user-container">
            {showd ? (
                <>
                    <img src={showd.avatar_url}  className="user-avatar" />
                    <h2>{showd.login}</h2>
                    <h2>{showd.id}</h2>
                </>
            ) : (
                <p>No user Found!!😓😓</p>
            )}
        </div>
    );
}

export default SingleUser;
