import { motion } from 'framer-motion';
import { useReducedMotion } from '@/lib/useReducedMotion';

const OFFSETS = {
  up: { y: 24 },
  down: { y: -24 },
  left: { x: 24 },
  right: { x: -24 },
};

const EASE = [0.25, 0.1, 0.25, 1];

const FadeIn = ({ children, direction = 'up', delay = 0, duration = 0.6, className }) => {
  const reduceMotion = useReducedMotion();
  const offset = OFFSETS[direction] ?? OFFSETS.up;

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-40px', amount: 0.2 }}
      transition={{ duration, delay, ease: EASE }}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
