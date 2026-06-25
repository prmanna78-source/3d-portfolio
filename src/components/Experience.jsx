import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Card3D from './Card3D';
import styles from './Experience.module.css';

const items = [
  {
    type: "Experience",
    year: "Recent",
    title: "Intern - Drone Technologies and UAV Systems",
    subtitle: "MAINCRAFTS TECHNOLOGIES (Remote)",
    desc: "Engaged in remote internship focusing on drone technologies, UAV systems, and autonomous flight operations."
  },
  {
    type: "Experience",
    year: "2025 - Present",
    title: "Core Member",
    subtitle: "CAS (Centre for Autonomous Systems) Labs",
    desc: "Contributing to research and development in autonomous robotics and sensing systems."
  },
  {
    type: "Experience",
    year: "2025 - Present",
    title: "Core Team Member",
    subtitle: "GitHub Community GITAM",
    desc: "Organizing technical events, mentoring volunteers, and fostering a collaborative team environment."
  },
  {
    type: "Experience",
    year: "March 2026",
    title: "Data Analytics Job Simulation",
    subtitle: "Tata Group (Forage)",
    desc: "Conducted exploratory data analysis (EDA) using GenAI tools and proposed predictive modeling frameworks."
  },
  {
    type: "Experience",
    year: "March 2026",
    title: "Technology Risk Job Simulation",
    subtitle: "EY (Forage)",
    desc: "Navigated technology risk frameworks, identifying vulnerabilities and drafting mitigation strategies."
  },
  {
    type: "Experience",
    year: "Dec 2025",
    title: "AI in Action Intern",
    subtitle: "Vista Equity Partners (Forage)",
    desc: "Designed GenAI workflows for data reconciliation and insight summarization applying structured prompt engineering."
  },
  {
    type: "Experience",
    year: "Nov 2025",
    title: "Robotics & Controls Intern",
    subtitle: "Johnson & Johnson (Forage)",
    desc: "Simulated robotics and control systems workflows tailored for medical device automation."
  },
  {
    type: "Experience",
    year: "2025",
    title: "Technology Job Simulation",
    subtitle: "Deloitte Australia (Forage)",
    desc: "Explored cloud platforms, cyber security frameworks, and data analytics solutions."
  },
  {
    type: "Certification",
    year: "2025",
    title: "Microsoft Security Copilot & Azure",
    subtitle: "Microsoft Certified",
    desc: "Earned 7 badges covering Security Copilot Agents, GenAI, and Azure Resource Management & Deployment."
  },
  {
    type: "Certification",
    year: "2025",
    title: "Oracle Fusion AI Agent Studio",
    subtitle: "Oracle Certified Foundation Associate",
    desc: "Certified in building and managing AI agents within the Oracle Fusion ecosystem."
  },
  {
    type: "Certification",
    year: "2025",
    title: "AI Fundamentals",
    subtitle: "IBM",
    desc: "Foundations for understanding AI concepts, models, and real-world applications."
  },
  {
    type: "Certification",
    year: "2024 - 2025",
    title: "Tech & Dev Workshops",
    subtitle: "BE10X, GDG, Upgrad & GITAM",
    desc: "Completed AI Tools Workshop (BE10X), GDG DevFest, Basic Python (Upgrad), and built an IoT Wireless Sprinkler System (GITAM)."
  }
];

const Card = ({ item }) => {
  return (
    <div className={styles.cardContainer}>
      <Card3D className={styles.card}>
        <div className={styles.cardHeader}>
          <span className={styles.typeBadge}>{item.type}</span>
          <span className={styles.year}>{item.year}</span>
        </div>
        <div className={styles.cardBody}>
          <h2>{item.title}</h2>
          <h3>{item.subtitle}</h3>
          <p>{item.desc}</p>
        </div>
      </Card3D>
    </div>
  );
};

const Experience = () => {
  const targetRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]); // adjust based on item count

  return (
    <section className={styles.scrollTrack} id="experience" ref={targetRef}>
      <div className={styles.stickyContainer}>
        <div className="container" style={{ paddingBottom: '40px' }}>
          <div className={styles.header}>
            <h2>Experience & Certifications</h2>
            <p>My professional journey mapped out.</p>
          </div>
        </div>
        <div className={styles.scrollWindow}>
          <motion.div style={{ x }} className={styles.cardsWrapper}>
            {items.map((item, i) => (
              <Card key={i} item={item} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

