const React = require('react');
const { useState, useEffect } = React;
const { createRoot } = require('react-dom/client');

const SongContainer = (props) => {
    const [songs, setSongs] = useState(props.songs);
    const [reload, setReload] = useState(false);

    useEffect(() => {
        const loadSongsFromServer = async () => {
            console.log('Loading songs...');
            const response = await fetch('/getSongs');
            const data = await response.json();
            setSongs(data);
        }
        loadSongsFromServer();
    }, [reload]);

    if(songs.length === 0) {
        return(
            <>
                <h2>No songs yet</h2>
            </>
        );
    }

    const songList = songs.map((song) => {
        return (
            <div key={song.title}>
                <h2>{song.artist} - <i>{song.title}</i></h2>
            </div>
        );
    });

    return(
        <>
            <h1>My favorite songs!</h1>
            {songList}
            <button onClick={() => setReload(!reload)}>Reload songs</button>
        </>
    );
}

const init = () => {
    const root = createRoot(document.querySelector('#app'));
    root.render(
        <>
            <SongContainer songs={[]}/>
        </>
    );
};

window.onload = init;