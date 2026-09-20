import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import styles from './dock.module.css';

export function Dock({ children, className = '', ...props }) {
  const mouseX = useMotionValue(Infinity);

  return (
    <div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={`${styles.dock} ${className}`}
      {...props}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { mouseX });
        }
        return child;
      })}
    </div>
  );
}

export function DockItem({ children, className = '', mouseX, ...props }) {
  const ref = useRef(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [60, 100, 60]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.div
      ref={ref}
      style={{ width, height: width }}
      className={`${styles.dockItem} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function DockIcon({ children, className = '' }) {
  return (
    <div className={`${styles.dockIcon} ${className}`}>
      {children}
    </div>
  );
}

export function DockLabel({ children, className = '' }) {
  return (
    <div className={`${styles.dockLabel} ${className}`}>
      {children}
    </div>
  );
}
