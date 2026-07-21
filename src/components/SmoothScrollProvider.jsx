import { useEffect } from 'react';
import { ReactLenis, useLenis } from 'lenis/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prefersReducedMotion } from '@/lib/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

const LenisScrollTriggerSync = () => {
  const lenis = useLenis(() => {
    ScrollTrigger.update();
  });

  useEffect(() => {
    if (!lenis) return undefined;

    const tick = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => gsap.ticker.remove(tick);
  }, [lenis]);

  return null;
};

const SmoothScrollProvider = ({ children }) => {
  if (prefersReducedMotion()) {
    return children;
  }

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.4,
        touchMultiplier: 0,
        smoothWheel: true,
        wheelMultiplier: 1,
        infinite: false,
        autoRaf: false,
      }}
    >
      <LenisScrollTriggerSync />
      {children}
    </ReactLenis>
  );
};

export default SmoothScrollProvider;
