import React from 'react';
import styles from './Background.module.css';
import BlobBackground from './BlobBackground';

const Background = () => {
  return (
    <div className={styles.bgContainer}>
      <BlobBackground />
      <div className={styles.noiseOverlay}></div>
      <div className={styles.fadeOverlay}></div>
    </div>
  );
};

export default Background;
