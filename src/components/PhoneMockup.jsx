import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import styles from './PhoneMockup.module.css';

const PhoneMockup = () => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 40 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 40 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-12, 12]);

  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], [100, 0]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], [100, 0]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className={styles.phoneContainer} ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <motion.div 
        className={styles.iphone}
        style={{ rotateX, rotateY, willChange: 'transform' }}
      >
        {/* Hardware Side Buttons */}
        <div className={styles.actionBtn}></div>
        <div className={styles.volUpBtn}></div>
        <div className={styles.volDownBtn}></div>
        <div className={styles.powerBtn}></div>
        
        {/* Outer Metallic Frame */}
        <div className={styles.frame}>
          {/* Inner Black Bezel */}
          <div className={styles.bezel}>
            {/* Screen Layer */}
            <div className={styles.screen}>
              {/* Dynamic Island Notch */}
              <div className={styles.dynamicIsland}>
                <div className={styles.camera}></div>
              </div>
              
              {/* Screen Content as Requested */}
              <div className={styles.screenContent}>
                <img src="/portrait.jpg" alt="Ujjwal Manna" className={styles.profileImg} />
                
                <div className={styles.glassCard}>
                  <div className={styles.homeIndicator}></div>
                  <h2 className={styles.name}>Ujjwal Manna</h2>
                  <p className={styles.role}>I'm an AI & ML Enthusiast</p>
                  <p className={styles.bio}>
                    "I design and build intelligent systems, scalable software, and I love what I do."
                  </p>
                  <div className={styles.location}>
                    <span>📍 Available Worldwide</span>
                  </div>
                </div>
              </div>
              
              {/* Moving Glare Reflection */}
              <motion.div 
                className={styles.glare}
                style={{
                  background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 60%)`
                }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PhoneMockup;
