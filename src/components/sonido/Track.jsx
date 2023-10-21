import React, { useState } from 'react';
import "./s.css";
import song from './relax.mp3'

const Track = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const audio = document.getElementById('audio');
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div>
      <audio id="audio" className='audiodisplay' controls autoPlay loop>
        <source src={song} type="audio/mpeg" />
      </audio>
      <button onClick={togglePlay}>
      {isPlaying ? 'Pausar' : 'Reproducir'}
      </button>
  
    </div>
  );
};

export default Track;
