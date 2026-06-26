import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './Preloader.module.css';

const Preloader = ({ onComplete }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Exactly 8 seconds timer to slide up the preloader
    const duration = 8000; 
    const timer = setTimeout(() => {
      if (onComplete) onComplete();
    }, duration);

    return () => clearTimeout(timer);
  }, [onComplete]);

  useEffect(() => {
    // Attempt to force play, which will log a warning if the browser blocks it due to audio
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.warn("Browser blocked autoplay with audio. User interaction required.", error);
      });
    }
  }, []);

  return (
    <motion.div
      className={styles.preloader}
      initial={{ opacity: 1 }}
      exit={{ 
        y: "-100vh", 
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
      }}
    >
      <div className={styles.content}>
        <motion.div 
          className={styles.videoWrapper}
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <video 
            ref={videoRef}
            className={styles.video}
            src="/loading.mp4" 
            autoPlay 
            muted
            playsInline
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Preloader;
