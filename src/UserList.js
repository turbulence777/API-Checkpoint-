// src/UserList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserList.css'; // Import CSS file for styling

const UserList = () => {
    const [listOfUsers, setListOfUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // https://jsonplaceholder.typicode.com/users
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setListOfUsers(response.data);
                setLoading(false);
            } catch (error) {
                setError('Error fetching users');
                setLoading(false);
            }
        };

        fetchUsers();
    }, []); // Empty dependency array ensures this runs only once after the initial render

    if (loading) {
        return <div className="loader">Loading...</div>;
    }

    if (error) {
        return <div className="error">{error}</div>;
    }

    return (
        <div className="user-list">
            <h1>User List</h1>
            <ul>
                {listOfUsers.map(user => (
                    <li key={user.id} className="user-item">
                        <strong>Name:</strong> {user.name} | <strong>Email:</strong> {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
