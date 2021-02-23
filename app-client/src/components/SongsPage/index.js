import Songs from '../Songs'
import React, { useState, useEffect } from 'react'
import song from '../../../src/images/song.jpg'
import song2 from '../../../src/images/song-2.jpg'
import song3 from '../../../src/images/song-3.jpg'
import song4 from '../../../src/images/song-4.jpg'
import song5 from '../../../src/images/song-5.jpg'
import song6 from '../../../src/images/song-6.jpg'
import { GrNext, GrPrevious } from 'react-icons/gr'

const SongsPage = () => {

  const [songs, setSongs] = useState([])
  const [page, setPage] = useState(1)
  const [img, setImg] = useState(song);

  const fetchSongsByPage = async (page) => {
    console.log(page)
    const url = "http://localhost:5000/songs/" + page;
    const response = await fetch(url);
    const songs_list = await response.json();
    setSongs(songs_list.songs)
  }

  useEffect(()=>{
    fetchSongsByPage(page)
    getİmage()
  },[page])

  const nextPage = () => {
    setPage(page + 1)
  }
  const prePage = () => {
    setPage(page - 1)
  }

  function getİmage() {
    var image_arr = [song, song2, song3, song4, song5, song6]
    var randomNumber = Math.floor(Math.random() * image_arr.length);
    var image = image_arr[randomNumber];
    setImg(image)
  }

  return <div className="" style={{ backgroundImage: 'url(' + img + ')', backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
    <div className="page-buttons">
      <button className="btn col-6 pre-btn mx-4 my-3" onClick={prePage}>
          <div >
            <GrPrevious style={{color: 'blue'}} color={"white"} size={25}/>
          </div>
      </button>
      <button className="btn col-6 next-btn mx-4 my-3" onClick={nextPage}>
          <div>
            <GrNext size={25}/>
          </div>
      </button>
    </div>
    <Songs songs={songs} />
  </div>
}

export default SongsPage;
