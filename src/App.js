// src/App.js

import React from 'react';
import './App.css';
import UserList from './UserList'; // Import the UserList component

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Welcome to the User List App</h1>
                <UserList /> {/* Use the UserList component */}
            </header>
        </div>
    );
}

export default App;
