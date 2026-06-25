import React from 'react';
import styles from './Stats.module.css';

const Stats = () => {
  const stats = [
    { label: "Certifications", value: "10+" },
    { label: "Hackathons", value: "3+" },
    { label: "Projects", value: "5+" },
    { label: "Virtual Internships", value: "5+" }
  ];

  return (
    <section className={styles.statsSection}>
      <div className="container">
        <div className={styles.statsGrid}>
          {stats.map((stat, i) => (
            <div key={i} className={styles.statItem}>
              <h2>{stat.value}</h2>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
