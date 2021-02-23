import React from 'react'

const Song = ({song}) => {
    const src = "https://www.youtube.com/embed/"+song.song_yt_url
    return (
        <div className="card-container"><div className="card"><iframe width="400" height="300" src={src} 
        frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
        <div className="card-body">{song.singer+" - "+song.song_name}</div></div>
    );
}

export default Song;