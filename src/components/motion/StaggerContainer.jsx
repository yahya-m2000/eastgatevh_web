import { motion } from 'framer-motion';
import { useReducedMotion } from '@/lib/useReducedMotion';

const EASE = [0.25, 0.1, 0.25, 1];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

export const StaggerContainer = ({ children, className }) => {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-40px', amount: 0.2 }}
      variants={containerVariants}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ children, className }) => {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={itemVariants}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </motion.div>
  );
};
