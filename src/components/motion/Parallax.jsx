import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prefersReducedMotion } from '@/lib/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

/**
 * Outer div is the ScrollTrigger measurement target; inner div is what actually
 * transforms. Keeping them separate avoids the trigger re-measuring an element
 * it is simultaneously moving, which otherwise causes jitter/feedback loops.
 */
const Parallax = ({ children, speed = 40, className, innerClassName }) => {
  const triggerRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return undefined;

    const trigger = triggerRef.current;
    const inner = innerRef.current;
    if (!trigger || !inner) return undefined;

    gsap.set(inner, { y: -speed });
    const tween = gsap.to(inner, {
      y: speed,
      ease: 'none',
      scrollTrigger: {
        trigger,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [speed]);

  return (
    <div ref={triggerRef} className={className}>
      <div ref={innerRef} className={innerClassName}>
        {children}
      </div>
    </div>
  );
};

export default Parallax;
