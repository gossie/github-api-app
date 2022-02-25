import React, { useState } from 'react';

export default function GithubWithButtonAndPost() {

    const [userName, setUserName] = useState('');
    const [repositories, setRepositories] = useState([] as Array<string>);

    const getRepositoryNames = () => {

        const requestBody = {
            userName: userName
        };

        console.log('request wird losgeschickt');
        fetch(`http://localhost:8080/github`, {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            console.log('antwort ist da');
            return response.json();
        })
        .then((responseBody: Array<string>) => {
            console.log('body entpackt');
            setRepositories(responseBody);
        });

        console.log("fetch wurde aufgerufen");
    };

    return (
        <div>
            <div>
                <h3>Hier wird ein POST Request gemacht</h3>
                <input type='text' placeholder='GitHub username' value={userName} onChange={ev => setUserName(ev.target.value)} />
                <button onClick={() => getRepositoryNames()}>Senden</button>
            </div>
            <div>
                {
                    repositories.length > 0
                    ? 
                        repositories.map(repositoryName => <div key={repositoryName}>{repositoryName}</div>)
                    :
                        <div>Die Liste ist leer oder es gab einen Fehler.</div>
                }
            </div>
        </div>
    );
}
