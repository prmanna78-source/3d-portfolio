import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedLogo from './AnimatedLogo';
import styles from './Preloader.module.css';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds fast load
    const startTime = Date.now();
    let animationFrameId;

    const animateProgress = () => {
      const elapsed = Date.now() - startTime;
      const t = Math.min(elapsed / duration, 1);
      
      // Easing function (easeOutQuart)
      const easedProgress = 1 - Math.pow(1 - t, 4);
      const nextProgress = Math.min(Math.floor(easedProgress * 100), 100);
      
      setProgress(nextProgress);

      if (t < 1) {
        animationFrameId = requestAnimationFrame(animateProgress);
      } else {
        if (onComplete) onComplete();
      }
    };

    animationFrameId = requestAnimationFrame(animateProgress);

    return () => cancelAnimationFrame(animationFrameId);
  }, [onComplete]);

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
          className={styles.logo}
          initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <AnimatedLogo width="240px" height="240px" progress={progress} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Preloader;
