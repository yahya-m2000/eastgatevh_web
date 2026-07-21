import { useEffect, useRef } from 'react';
import SplitType from 'split-type';
import { gsap } from 'gsap';
import { prefersReducedMotion } from '@/lib/useReducedMotion';

/**
 * Word-by-word rise reveal, fired immediately on mount (no scroll trigger) —
 * intended for above-the-fold hero headings only.
 */
const SplitHeading = ({ as: Tag = 'h1', children, className }) => {
  const elRef = useRef(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el || prefersReducedMotion()) return undefined;

    const splitter = new SplitType(el, { types: 'lines,words' });

    gsap.from(splitter.words, {
      y: '120%',
      stagger: 0.02,
      duration: 1,
      ease: 'power2.out',
    });

    return () => splitter.revert();
  }, []);

  return (
    <Tag ref={elRef} data-split-heading className={className}>
      {children}
    </Tag>
  );
};

export default SplitHeading;
