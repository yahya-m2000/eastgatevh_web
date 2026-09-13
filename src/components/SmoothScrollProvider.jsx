import { ReactLenis } from 'lenis/react';
import { useReducedMotion } from '@/lib/useReducedMotion';

// Native touch scrolling; only wheel input receives gentle interpolation.
const SmoothScrollProvider = ({ children }) => {
  const reduced = useReducedMotion();
  if (reduced) return children;
  return (
    <ReactLenis
      root
      options={{ lerp: 0.1, syncTouch: false, smoothWheel: true, autoRaf: true, anchors: true }}
    >
      {children}
    </ReactLenis>
  );
};
export default SmoothScrollProvider;
