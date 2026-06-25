import React from 'react';
import { motion } from 'framer-motion';
import styles from './BrandTicker.module.css';

const technologies = [
  "Python", "C++", "HTML", "Microsoft Azure", 
  "IBM AI", "Oracle", "GenAI", "Machine Learning",
  "Autonomous Systems", "Prompt Engineering", "Ollama LLM"
];

const BrandTicker = () => {
  return (
    <section className={styles.tickerSection}>
      <div className={styles.tickerHeader}>
        <p>TRUSTED TECHNOLOGIES & DOMAINS</p>
      </div>
      <div className={styles.tickerContainer}>
        <motion.div 
          className={styles.tickerTrack}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        >
          {/* Double the list for seamless looping */}
          {[...technologies, ...technologies].map((tech, i) => (
            <div key={i} className={styles.tickerItem}>
              {tech}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BrandTicker;
