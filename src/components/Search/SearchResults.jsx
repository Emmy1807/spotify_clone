import React, { useContext, useEffect, useState } from 'react'
import { PlayerContext, PlayerProvider } from '@/contexts/PlayerContext' 
import style from './SearchResults.module.css'

const SearchResults = () => {
  const { 
    playTrack,
    currentTrack,
    isPlaying
  } = useContext(PlayerContext);
    const { result, setResult } = useContext(PlayerContext)
    const { state, setState } = useContext(PlayerContext)
    const { data, setData } = useContext(PlayerContext)
    const { Popular, setPopular } = useContext(PlayerContext)

    const handlePlay = (track) => {
    playTrack({
      id: track.id,
      name: track.name,
      artists: track.artists,
      album: track.album,
      preview_url: track.preview_url,
      image: track.album?.images[0]?.url
    });
  };

  return (
    <PlayerProvider>
      
    <div className={style.SearchResults}>  


      {
        result.length > 0 ? (
                   
            result.map((eachMusic, index, array) => (
              <div key={index} className={style.content}>

                {/* Artist content */}
                <div className={style.artist}>
                  <h1>Artists</h1>
                  <li key={index}>{eachMusic.artists.items.map((eachArtist, index) => (
                    <div key={index} className={style.cover}>
                    <a href="">
                      {
                        eachArtist.images.length > 0 && (
                          <img src={eachArtist.images[0].url} alt="Artist" />
                        )
                      }
                    <h2>{eachArtist.name}</h2>  
                    <h3>{eachArtist.type}</h3>  
                    </a>
                    </div>
                  ))}</li>
                  
                </div>

                {/* Album-content */}
                <div className={style.albums}>
                <h1>Albums</h1>
                <li key={index}>{eachMusic.albums.items.map((eachImage, index) => (
                  <div key={index} className={style.frame}>
                  <a href="">
                      {
                        eachImage.images.length > 0 && (
                          <img src={eachImage.images[0].url} alt="Artist" />
                        )
                      }
                      <h2>{eachImage.name}</h2>
                      <>
                        <h4>{eachImage.release_date}</h4> .{eachImage.artists.map((each, index) => (
                        <p key={index}>{each.name}</p>
                      ))}</>
                  </a>
                  </div>    
                ))}</li>
                </div>

                {/* playlist-content */}
                <div className={style.playlist}>
                  <h1>Playlists</h1>
                  <li key={index}>{eachMusic?.playlists?.items?.map((eachPlaylist, index) => (
                    <div key={index} className={style.list}>
                    <a href="">
                      {
                        eachPlaylist?.images.length > 0 && (
                          <img src={eachPlaylist?.images[0].url} alt="image" />
                        )
                      }
                      <h2>{eachPlaylist?.name}</h2>
                      <h3>{eachPlaylist?.owner?.display_name}</h3>
                    </a>
                    </div>
                  ))}</li>
                </div>

                {/* show-content */}
                <div className={style.pod}>
                  <h1>Podcasts</h1>
                  <li key={index}>{eachMusic.shows.items.map((eachshow, index) => (
                    <div key={index} className={style.shows}>
                  <a href="">
                      {
                        eachshow.images.length > 0 && (
                          <img src={eachshow.images[0].url} alt="Artist" />
                        )
                      }
                      <h2>{eachshow.name}</h2>
                      <h3>{eachshow.publisher}</h3>
                  </a>
                  </div>    
                  ))}</li>
  
                </div>

                {/* episode-content */}
                <div className={style.episode}>
                  <h1>Episodes</h1>
                  <li key={index}>{eachMusic.episodes.items.map((eachepi, index) => (
                    <div key={index} className={style.episodes}>
                  <a href="">
                      {
                        eachepi.images.length > 0 && (
                          <img src={eachepi.images[0].url} alt="Artist" />
                        )
                      }
                      <h2>{eachepi.name}</h2>
                      <h3>{eachepi.release_date}</h3>
                  </a>
                  </div>    
                  ))}</li>
  
                </div>

                <div className={style.track}>     
                  <h1>Tracks</h1>
                  <li key={index}>{eachMusic.tracks.items.map((eachTrack, index) => (
                    <div key={index} className={style.each}
                    onClick={() => handlePlay(eachTrack)}
                    >
                  <a href="">
                  <img src={eachTrack?.album?.images[0]?.url} alt="" />
                  <h2>{eachTrack?.album?.name}</h2>
                  <h3>{eachTrack?.artists?.map(artist => artist.name).join(', ')}</h3>
                    {currentTrack?.id === eachTrack.id && isPlaying ? (
                      <span>▶️ Now Playing</span>
                    ) : (
                      <button onClick={(e) => {
                        e.stopPropagation();
                        handlePlay(eachTrack);
                      }}>
                        Play
                      </button>
                    )}
                  
                   </a>  
                   </div>
                   
                   

                    
                  ))}</li>
  
                </div>
              </div>  
            ))
              
        
        ) : (
        
        <div className={style.default}>
          {
            state.map((Artists, index) => (
          <div key={index} className={style.all}> 
            <div className={style.Artist}>
            <h1>Popular artists</h1>
            <li>{Artists.artists.items.map((Items, index) => (
              <div key={index} className={style.con}>
              <a href="">
                      {
                        Items.images.length > 0 && (
                          <img src={Items.images[0].url} alt="Artist" />
                        ) 
                      }
                      <h2>{Items.name}</h2>
                      <h3>{Items.type}</h3>  
              </a>    
              </div>    
            ))}</li>
            </div>
          </div>
        ))
      }

      {
        data.map((Album, index) => (
          <div key={index} className={style.Album}>
              <h1>Popular albums and singles</h1>
                <li key={index}>{Album.albums.items.map((eachAlbum, index) => (
                  <div key={index} className={style.Frame}>
                  <a href="">
                      {
                        eachAlbum.images.length > 0 && (
                          <img src={eachAlbum.images[0].url} alt="Artist" />
                        )
                      }
                      <h2>{eachAlbum.name}</h2>
                      <>{eachAlbum.artists.map((albumName, index) => (
                        <h4 key={index}>{albumName.name}</h4>
                      ))}</>
                      
                  </a>
                  </div>    
                ))}</li>
            </div>
        ))
      }
        </div>
          
        )
      }
      
      </div>
    </PlayerProvider>
  )
}

export default SearchResults
