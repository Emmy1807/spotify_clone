import React, { useContext, useEffect, useRef } from 'react';
import { PlayerContext } from '@/contexts/PlayerContext';

const AudioPlayer = () => {
  const { currentTrack, isPlaying, setIsPlaying } = useContext(PlayerContext);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentTrack]);

  if (!currentTrack) return null;

  return (
    <div className="audio-player">
      <audio
        ref={audioRef}
        src={currentTrack.preview_url}
        onEnded={() => setIsPlaying(false)}
      />
      <div className="now-playing">
        Now Playing: {currentTrack.name} by {currentTrack.artists.map(a => a.name).join(', ')}
      </div>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default AudioPlayer;