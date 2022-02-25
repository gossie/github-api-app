import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import GithubWithButton from './GithubWithButton';
import GithubWithEffect from './GithubWithEffect';
import GithubWithButtonAndPost from './GithubWithButtonAndPost';

function App() {



    return (
        <div className="App">
            <GithubWithButton />
            <GithubWithEffect />
            <GithubWithButtonAndPost />
        </div>
    );
}

export default App;
 