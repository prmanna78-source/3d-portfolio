import React from 'react';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import AnimatedLogo from './AnimatedLogo';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <motion.nav
      className={styles.navbar}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.navInner}>
        <div className={styles.logo}>
          <AnimatedLogo width="50px" height="50px" animated={false} />
        </div>
        <div className={styles.navLinks}>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
        <button className={styles.menuBtn}>
          <Menu size={20} />
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
