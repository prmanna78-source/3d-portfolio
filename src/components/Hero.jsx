import React from 'react';
import { motion } from 'framer-motion';
import PhoneMockup from './PhoneMockup';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.heroSection} id="hero">
      {/* Animated Pixel Marquee Background - Full Width */}
      <div className={styles.marqueeBackground}>
        <div className={styles.marqueeTrack}>
          <span>EXPLORE MY PORTFOLIO • AI/ML ENGINEER • CREATIVE DEVELOPER • </span>
          <span>EXPLORE MY PORTFOLIO • AI/ML ENGINEER • CREATIVE DEVELOPER • </span>
          <span>EXPLORE MY PORTFOLIO • AI/ML ENGINEER • CREATIVE DEVELOPER • </span>
          <span>EXPLORE MY PORTFOLIO • AI/ML ENGINEER • CREATIVE DEVELOPER • </span>
        </div>
      </div>

      <div className={styles.container}>
        {/* Minimalist Live Background Aura */}
        <div className={styles.liveAura}>
          <div className={styles.auraCore}></div>
        </div>

        {/* Center Content: Phone Mockup */}
        <div className={styles.centerContent}>
          <PhoneMockup />
        </div>

      </div>
    </section>
  );
};

export default Hero;
