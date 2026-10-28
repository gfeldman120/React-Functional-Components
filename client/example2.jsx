const React = require('react');
const { useState } = React;
const { createRoot } = require('react-dom/client');

const HelloUser = (props) => {

    // let username = props.username;
    const [username, setUsername] = useState(props.username);

    return(
        <div>
            <p>Hello {username}</p>
            <label>Change name: </label>
            <input
                type='text'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
        </div>
    );
};

const init = () => {
    const root = createRoot(document.querySelector('#app'));
    root.render(
        <div>
            <HelloUser username='GJF'/>
        </div>
    );
};

window.onload = init;