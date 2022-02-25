import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

export default function GithubWithEffect() {

    const [repositories, setRepositories] = useState([] as Array<string>);

    useEffect(() => {
        console.log('request wird losgeschickt');
        fetch('http://localhost:8080/github/gossie')
            .then(response => response.json())
            .then((responseBody: Array<string>) => setRepositories(responseBody));
        console.log("fetch wurde aufgerufen");
    }, []);

    return (
        <div>
            <div>
                {
                    repositories.length > 0
                    ? 
                        repositories.map(repositoryName => <div>{repositoryName}</div>)
                    :
                        <div>Die Liste ist leer oder es gab einen Fehler.</div>
                }
            </div>
        </div>
    );
}
