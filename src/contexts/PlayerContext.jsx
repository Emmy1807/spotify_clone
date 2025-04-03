"use client"
import { AlbumContent, ArtistsContent, ExploreMusic, PopularContent, RadioContent } from '@/lib/api/authClient';
import { createContext, useContext, useEffect, useState } from 'react';

export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [result, setResult] = useState([])
  const [state, setState] = useState([])
  const [data, setData] = useState([])
  const [Popular, setPopular] = useState([])

  const playTrack = (track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
    // Here you would typically also connect to your audio player
  };

  useEffect(()=>{
    const fetchDefaultMusic = async()=>{
      const data = await ArtistsContent()
      setState([data])   
    }
    fetchDefaultMusic();

    const fetchAlbums = async()=>{
      const data = await AlbumContent()
      setData([data])
    }
    fetchAlbums();

    const fetchpopular = async()=>{
      const data = await RadioContent()
      setPopular([data])
    }
    fetchpopular();

  }, [])
  // const [currentTrack, setCurrentTrack] = useState(null);
  // const [isPlaying, setIsPlaying] = useState(false);

  // const playTrack = (track) => {
  //   setCurrentTrack(track);
  //   setIsPlaying(true);
  // };

  // const pauseTrack = () => {
  //   setIsPlaying(false);
  // };

  return (
    <PlayerContext.Provider value={{result, setResult, state, setState, data, setData, Popular, setPopular, currentTrack, isPlaying, playTrack, setIsPlaying}}>
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => useContext(PlayerContext);