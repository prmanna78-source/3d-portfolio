import React from 'react';
import { motion } from 'framer-motion';

export function TextShimmer({ children, className = '', duration = 2, ...props }) {
  return (
    <motion.span
      className={className}
      style={{
        display: 'inline-block',
        backgroundImage: 'linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0.3) 100%)',
        backgroundSize: '200% auto',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        color: 'transparent',
      }}
      animate={{ backgroundPosition: ['200% center', '-200% center'] }}
      transition={{
        repeat: Infinity,
        duration: duration,
        ease: 'linear',
      }}
      {...props}
    >
      {children}
    </motion.span>
  );
}
