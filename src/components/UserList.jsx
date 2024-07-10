import React from 'react';
import useFetch from '../Customhooks/useFetch';

function UserList() {
    const { myData, loading } = useFetch();
    console.log(myData);

    return (
        <div className="user-list-container">
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul className="user-list">
                    {myData.map((elm) => (
                        <li key={elm.id} className="user-list-item">
                            <img src={elm.avatar_url
} className="user-avatar"  />
                             <p>{elm.login}</p>
                            <p>ID: {elm.id}</p>
                           
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default UserList;
