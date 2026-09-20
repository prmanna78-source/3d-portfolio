import React from 'react';
import { motion } from 'framer-motion';

export function TextRoll({
  children,
  className = '',
  variants,
  transition = { type: 'spring', damping: 20, stiffness: 100 },
  style,
  ...props
}) {
  const text = typeof children === 'string' ? children : '';
  const letters = text.split('');

  const defaultVariants = {
    enter: {
      initial: { rotateX: 0, filter: 'blur(0px)' },
      animate: { rotateX: 90, filter: 'blur(2px)' },
    },
    exit: {
      initial: { rotateX: 90, filter: 'blur(2px)' },
      animate: { rotateX: 0, filter: 'blur(0px)' },
    },
  };

  const currentVariants = variants || defaultVariants;

  return (
    <motion.span
      className={`relative inline-block ${className}`}
      initial="initial"
      whileHover="animate"
      style={{ perspective: '1000px', display: 'inline-block', ...style }}
      {...props}
    >
      <motion.span className="inline-flex relative">
        {letters.map((letter, i) => (
          <motion.span
            key={`enter-${i}`}
            className="inline-block"
            variants={currentVariants.enter}
            transition={{ ...transition, delay: i * 0.03 }}
            style={{ display: 'inline-block', transformOrigin: 'bottom' }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </motion.span>
      <motion.span className="absolute left-0 top-0 inline-flex" style={{ pointerEvents: 'none' }}>
        {letters.map((letter, i) => (
          <motion.span
            key={`exit-${i}`}
            className="inline-block"
            variants={currentVariants.exit}
            transition={{ ...transition, delay: i * 0.03 }}
            style={{ display: 'inline-block', transformOrigin: 'top' }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </motion.span>
    </motion.span>
  );
}
