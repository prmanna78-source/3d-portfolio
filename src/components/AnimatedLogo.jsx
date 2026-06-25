import React from 'react';
import { motion } from 'framer-motion';

const AnimatedLogo = ({ width = "200px", height = "auto", progress = 100 }) => {
  return (
    <div style={{ position: "relative", width, height: height === "auto" ? width : height, display: "inline-block" }}>
      {/* Faded ghost layer */}
      <img
        src="/logo.png"
        alt="UM Logo"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          opacity: 0.12,
          userSelect: "none",
          pointerEvents: "none",
        }}
      />

      {/* Fill layer — clips from bottom to top based on progress */}
      <motion.img
        src="/logo.png"
        alt="UM Logo Fill"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "contain",
          userSelect: "none",
          pointerEvents: "none",
          filter: "drop-shadow(0 0 16px rgba(184, 135, 40, 0.4))",
        }}
        animate={{ clipPath: `inset(${100 - progress}% 0 0 0)` }}
        transition={{ duration: 0.08, ease: "linear" }}
      />
    </div>
  );
};

export default AnimatedLogo;
