import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { prefersReducedMotion } from '@/lib/useReducedMotion';

const CLIP_HIDDEN = 'inset(0 0 100% 0)';
const CLIP_VISIBLE = 'inset(0 0 0% 0)';

/**
 * One hamburger-icon bar: an ink base layer with a white overlay swiped
 * in/out bottom-to-top when `white` toggles — same technique and same bug
 * history as Logo.jsx (GSAP must own the clip-path exclusively after mount;
 * every retarget kills any tween already running first so rapid toggling
 * retargets smoothly).
 */
const HamburgerBar = ({ white }) => {
  const overlayRef = useRef(null);
  const mounted = useRef(false);

  useLayoutEffect(() => {
    const el = overlayRef.current;
    if (!el) return;
    gsap.set(el, { clipPath: white ? CLIP_VISIBLE : CLIP_HIDDEN });
    mounted.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useLayoutEffect(() => {
    const el = overlayRef.current;
    if (!el || !mounted.current) return;

    const target = white ? CLIP_VISIBLE : CLIP_HIDDEN;
    gsap.killTweensOf(el);

    if (prefersReducedMotion()) {
      gsap.set(el, { clipPath: target });
      return;
    }

    gsap.to(el, { clipPath: target, duration: 0.2, ease: 'power2.inOut' });
  }, [white]);

  return (
    <span className="relative block h-0.5 w-5 bg-ink transition-[height] duration-200 group-hover:h-0.75 sm:w-6">
      <span ref={overlayRef} aria-hidden="true" className="absolute inset-0 block bg-paper" />
    </span>
  );
};

export default HamburgerBar;
