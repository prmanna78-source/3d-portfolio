import React, { useRef, useState } from 'react';
import { useScroll, useTransform, motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';
import Card3D from './Card3D';
import styles from './Projects.module.css';

const projects = [
  {
    title: "AI-Based Gas Sensing Quadrotor",
    tags: ["Autonomous Systems", "AI"],
    desc: "Designed an autonomous drone capable of detecting harmful gases in hazardous terrains to reduce human risk.",
    color: "#111",
    images: [
      "/projects/drone/drone_1.jpg",
      "/projects/drone/drone_2.jpg",
      "/projects/drone/drone_3.jpg",
      "/projects/drone/drone_4.jpg"
    ]
  },
  {
    title: "AI-AQI Detecting Quadrotor",
    tags: ["Hardware", "Data Analytics"],
    desc: "Developed an aerial vehicle with a live dashboard for real-time Air Quality Index monitoring.",
    color: "#1a1a1a",
    video: "/projects/aqi_drone/demo.mp4"
  },
  {
    title: "Offline AI Chatbot (ASTERYX AI)",
    tags: ["GenAI", "Ollama LLM", "Python"],
    desc: "Built a fully offline AI conversational agent using local LLMs to ensure privacy and rapid inference without internet dependency.",
    color: "#222",
    images: [
      "/projects/asteryx/asteryx_1.png",
      "/projects/asteryx/asteryx_2.png",
      "/projects/asteryx/asteryx_3.png",
      "/projects/asteryx/asteryx_4.png"
    ]
  },
  {
    title: "ARUCO Marker Precision Landing UAV",
    tags: ["Computer Vision", "UAV", "Autonomy"],
    desc: "Developed a computer vision system utilizing ArUco markers for autonomous, high-precision UAV landing in GPS-denied environments.",
    color: "#151515",
    video: "/projects/aruco_landing/video.mp4"
  }
];

const ProjectCard = ({ proj, i, progress, range, targetScale, onOpenModal }) => {
  const containerRef = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={containerRef} className={styles.cardContainer}>
      <Card3D
        className={styles.projectCard}
        style={{
          scale,
          top: `calc(10vh + ${i * 40}px)`,
          cursor: (proj.images || proj.video) ? 'pointer' : 'default'
        }}
        onClick={() => {
          if (proj.images || proj.video) onOpenModal(proj);
        }}
      >
        <div className={styles.cardInner}>
          <div className={styles.content}>
            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>
            <div className={styles.tags}>
              {proj.tags.map((tag, j) => (
                <span key={j}>{tag}</span>
              ))}
            </div>
          </div>
          <button
            className={styles.viewBtn}
            onClick={(e) => {
              e.stopPropagation();
              if (proj.images || proj.video) onOpenModal(proj);
            }}
          >
            <ArrowUpRight size={24} />
          </button>
        </div>
      </Card3D>
    </div>
  );
};

const Projects = () => {
  const containerRef = useRef(null);
  const [activeProject, setActiveProject] = useState(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  return (
    <section className={styles.projectsSection} id="projects" ref={containerRef}>
      <div className="container">
        <div className={styles.header}>
          <h2>Selected Works</h2>
          <p>A showcase of my projects in AI, ML, and Autonomous Systems.</p>
        </div>

        <div className={styles.cardsWrapper}>
          {projects.map((proj, i) => {
            const targetScale = 1 - ((projects.length - i) * 0.08);
            const range = [i * (1 / projects.length), 1];
            return (
              <ProjectCard
                key={i}
                proj={proj}
                i={i}
                progress={scrollYProgress}
                range={range}
                targetScale={targetScale}
                onOpenModal={setActiveProject}
              />
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              className={styles.modalContent}
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.closeBtn} onClick={() => setActiveProject(null)}>
                <X size={24} />
              </button>
              <div className={styles.imageGallery} data-lenis-prevent>
                {activeProject.video && (
                  <video
                    controls
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={styles.projectVideo}
                    src={activeProject.video}
                  />
                )}
                {activeProject.images && activeProject.images.map((img, idx) => (
                  <img key={idx} src={img} alt={`${activeProject.title} ${idx + 1}`} />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
