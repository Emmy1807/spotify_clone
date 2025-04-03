import React, {useContext} from 'react'
import { PlayerContext, PlayerProvider } from '@/contexts/PlayerContext' 
import style from './Display.module.css'

const Display = () => {

  const { state, setState } = useContext(PlayerContext)
  const { data, setData } = useContext(PlayerContext)

  return (
    <PlayerProvider>
    <div className={style.Display}>
      {
        state.map((Artists, index) => (
          <div key={index} className={style.all}>
            <div className={style.Artist}>
            <h1>Popular artists</h1>
            <li>{Artists.artists.items.map((Items, index) => (
              <div className={style.con}>
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
          <div className={style.Album}>
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
                      <h3>{eachAlbum?.artists?.name}</h3>
                      {/* <>
                        <h4>{eachAlbum.release_date}</h4> .{eachAlbum.artists.map((each, index) => (
                        <p key={index}>{each.name}</p>
                      ))}</> */}
                  </a>
                  </div>    
                ))}</li>
            </div>
        ))
      }
      
      
    </div>
    </PlayerProvider>
  )
}

export default Display
