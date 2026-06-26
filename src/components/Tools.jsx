import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiCplusplus, SiOllama, SiFigma, SiDrone, SiOpencv, SiYolo, SiEdgeimpulse } from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';
import { MatlabIcon, GazeboIcon } from './BrandIcons';
import Card3D from './Card3D';
import styles from './Tools.module.css';

const toolsList = [
  {
    name: "Python",
    category: "Core Language",
    icon: <FaPython color="#3776AB" size={40} />
  },
  {
    name: "C++",
    category: "Systems Programming",
    icon: <SiCplusplus color="#00599C" size={40} />
  },
  {
    name: "Azure",
    category: "Cloud Platform",
    icon: <VscAzure color="#0089D6" size={40} />
  },
  {
    name: "Ollama",
    category: "Local LLMs",
    icon: <SiOllama color="#FFFFFF" size={40} />
  },
  {
    name: "HTML/CSS",
    category: "Web Frontend",
    icon: (
      <div style={{ display: 'flex', gap: '8px' }}>
        <FaHtml5 color="#E34F26" size={36} />
        <FaCss3Alt color="#1572B6" size={36} />
      </div>
    )
  },
  {
    name: "Ardupilot",
    category: "Autonomous Systems",
    icon: <SiDrone color="#52b7ff" size={40} />
  },
  {
    name: "OpenCV",
    category: "Computer Vision",
    icon: <SiOpencv color="#5C3EE8" size={40} />
  },
  {
    name: "YOLO",
    category: "Object Detection",
    icon: <SiYolo color="#00FFFF" size={40} />
  },
  {
    name: "Edge Impulse",
    category: "Edge AI",
    icon: <SiEdgeimpulse color="#FFFFFF" size={40} />
  },
  {
    name: "Gazebo",
    category: "Simulation",
    icon: <GazeboIcon color="#F15A24" size={40} />
  },
  {
    name: "MATLAB",
    category: "Data Analysis & Sim",
    icon: <MatlabIcon size={40} />
  }
];

const Tools = () => {
  return (
    <section className={styles.toolsSection} id="tools">
      <div className="container">
        <div className={styles.header}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Mastered Tools
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Proficient in industry-standard software, AI frameworks, and development tools.
          </motion.p>
        </div>

        <div className={styles.toolsGrid}>
          {toolsList.map((tool, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, rotateX: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
            >
              <Card3D className={styles.toolPill}>
                <div className={styles.pillTop}>
                  {tool.icon}
                </div>
                <div className={styles.pillBottom}>
                  <h3>{tool.name}</h3>
                  <p>{tool.category}</p>
                </div>
              </Card3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
