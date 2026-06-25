import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaProjectDiagram, FaServer, FaCogs, FaRocket } from 'react-icons/fa';
import Card3D from './Card3D';
import styles from './WorkProcess.module.css';

const processes = [
  {
    num: "01.",
    title: "Problem Discovery & Data",
    icon: <FaProjectDiagram size={24} color="#000" />
  },
  {
    num: "02.",
    title: "System Architecture",
    icon: <FaServer size={24} color="#000" />
  },
  {
    num: "03.",
    title: "Prototyping & Training",
    icon: <FaCogs size={24} color="#000" />
  },
  {
    num: "04.",
    title: "Deployment & Scaling",
    icon: <FaRocket size={24} color="#000" />
  }
];

const ProcessCardItem = ({ step, index, progress }) => {
  const getTransforms = (i) => {
    switch(i) {
      case 0: return { initX: -200, initY: -200, initRot: -20 };
      case 1: return { initX: 200, initY: -200, initRot: 20 };
      case 2: return { initX: -200, initY: 200, initRot: -20 };
      case 3: return { initX: 200, initY: 200, initRot: 20 };
      default: return { initX: 0, initY: 50, initRot: 0 };
    }
  };
  
  const { initX, initY, initRot } = getTransforms(index);
  
  const x = useTransform(progress, [0, 1], [initX, 0]);
  const y = useTransform(progress, [0, 1], [initY, 0]);
  const rotate = useTransform(progress, [0, 1], [initRot, 0]);
  const scale = useTransform(progress, [0, 1], [0.7, 1]);
  const opacity = useTransform(progress, [0, 0.8], [0, 1]);

  return (
    <motion.div style={{ x, y, rotate, scale, opacity }}>
      <Card3D className={styles.processCard}>
        <div className={styles.topSection}>
          <div className={styles.iconBox}>
            {step.icon}
          </div>
          <div className={styles.hugeNumber}>
            {step.num}
          </div>
        </div>
        
        <div className={styles.bottomSection}>
          <h3>{step.title}</h3>
        </div>
      </Card3D>
    </motion.div>
  );
};

const WorkProcess = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0 1", "1 1"] // "start end", "end end" - animates from when section enters until bottom of section is visible
  });

  return (
    <section className={styles.processSection} id="process" ref={containerRef}>
      <div className="container">
        <div className={styles.header}>
          <h2>Work Process</h2>
          <p>A glimpse into my collaborative and iterative engineering process.</p>
        </div>

        <div className={styles.gridContainer}>
          {processes.map((step, i) => (
            <ProcessCardItem 
              key={i} 
              step={step} 
              index={i} 
              progress={scrollYProgress} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
