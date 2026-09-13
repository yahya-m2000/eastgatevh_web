import { motion } from 'framer-motion';
import { useReducedMotion } from '@/lib/useReducedMotion';
import { useContext } from 'react';
import { IntroReadyContext } from '@/lib/introContext';

// A nonbreaking space INSIDE each animated word preserves its visual width.
// Ordinary trailing spaces collapse at the edge of an inline-block mask.
const SplitHeading = ({ as: Tag = 'h1', children, className }) => {
  const reduced = useReducedMotion();
  const introReady = useContext(IntroReadyContext);
  if (typeof children !== 'string') return <Tag className={className}>{children}</Tag>;
  const words = children.trim().split(/\s+/);
  return (
    <Tag className={className} aria-label={children}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="word-mask" aria-hidden="true">
          <motion.span
            initial={reduced ? false : { y: '105%' }}
            animate={{ y: reduced || introReady ? 0 : '105%' }}
            transition={{
              duration: 0.8,
              delay: Math.min(i * 0.025, 0.25),
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {`${word}${i < words.length - 1 ? '\u00a0' : ''}`}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
};
export default SplitHeading;
