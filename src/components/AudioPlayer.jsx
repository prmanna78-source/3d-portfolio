import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './AudioPlayer.module.css';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.warn("Audio play blocked", e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={styles.audioContainer}>
      {/* NOTE: Add your audio file named bg-music.mp3 to the public folder */}
      <audio 
        ref={audioRef} 
        src="/bg-music.mp3" 
        loop 
      />
      <motion.button 
        className={styles.toggleButton}
        onClick={togglePlay}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title={isPlaying ? "Pause Music" : "Play Music"}
      >
        <span className={`${styles.bar} ${isPlaying ? styles.playing : ''}`} style={{ animationDelay: '0.0s' }}></span>
        <span className={`${styles.bar} ${isPlaying ? styles.playing : ''}`} style={{ animationDelay: '0.2s' }}></span>
        <span className={`${styles.bar} ${isPlaying ? styles.playing : ''}`} style={{ animationDelay: '0.4s' }}></span>
        <span className={`${styles.bar} ${isPlaying ? styles.playing : ''}`} style={{ animationDelay: '0.6s' }}></span>
      </motion.button>
    </div>
  );
};

export default AudioPlayer;
