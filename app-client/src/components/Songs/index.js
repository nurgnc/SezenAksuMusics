import {Song} from '../'
import React from 'react'

const Songs = ({songs}) => {
    return (
        <div className="row songs-container justify-content-center align-items-center">
            
        {songs.map(song=>
            <div className="col-6">
                <Song key= {song.id} song={song}/>
            </div>
        )}

        </div>
    );
}

export default Songs;