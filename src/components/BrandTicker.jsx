import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaHtml5, FaRobot, FaCogs, FaTerminal } from 'react-icons/fa';
import { SiOllama } from 'react-icons/si';
import { IBMIcon, OracleIcon, OpenAIIcon, CppIcon, AzureIcon } from './BrandIcons';
import styles from './BrandTicker.module.css';

const row1 = [
  { name: "Python", icon: <FaPython color="#3776AB" /> },
  { name: "C++", icon: <CppIcon color="#00599C" /> },
  { name: "HTML", icon: <FaHtml5 color="#E34F26" /> },
  { name: "Microsoft Azure", icon: <AzureIcon color="#0089D6" /> },
  { name: "IBM AI", icon: <IBMIcon color="#0530AD" /> },
  { name: "Oracle", icon: <OracleIcon color="#F80000" /> },
];

const row2 = [
  { name: "GenAI", icon: <OpenAIIcon color="#10a37f" /> },
  { name: "Machine Learning", icon: <FaRobot color="#FF6F00" /> },
  { name: "Autonomous Systems", icon: <FaCogs color="#00E5FF" /> },
  { name: "Prompt Engineering", icon: <FaTerminal color="#20D489" /> },
  { name: "Ollama LLM", icon: <SiOllama color="#F8F8F8" /> }
];

const BrandTicker = () => {
  return (
    <section className={styles.tickerSection}>
      <div className={styles.tickerHeader}>
        <h3 className={styles.gradientText}>Trusted Technologies & Domains</h3>
        <p className={styles.subtitle}>Empowering next-generation solutions</p>
      </div>

      <div className={styles.tickerContainer}>
        {/* Row 1: Moves Left */}
        <div className={styles.trackWrapper}>
          <motion.div 
            className={styles.tickerTrack}
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
          >
            {/* Multiplying the array to ensure it loops seamlessly on ultrawide monitors */}
            {[...row1, ...row1, ...row1, ...row1].map((tech, i) => (
              <div key={`r1-${i}`} className={styles.tickerCard}>
                <div className={styles.iconContainer}>{tech.icon}</div>
                <span className={styles.techName}>{tech.name}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2: Moves Right */}
        <div className={styles.trackWrapper}>
          <motion.div 
            className={styles.tickerTrack}
            animate={{ x: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
          >
            {[...row2, ...row2, ...row2, ...row2].map((tech, i) => (
              <div key={`r2-${i}`} className={styles.tickerCard}>
                <div className={styles.iconContainer}>{tech.icon}</div>
                <span className={styles.techName}>{tech.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandTicker;
