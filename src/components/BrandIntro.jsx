import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useLenis } from 'lenis/react';
import { designContent } from '@/content/siteContent';
import { IntroReadyContext } from '@/lib/introContext';
import { useReducedMotion } from '@/lib/useReducedMotion';

const bands = [0, 1, 2, 3, 4];
const BrandIntro = ({ children }) => {
  const { pathname } = useLocation();
  const reduced = useReducedMotion();
  const lenis = useLenis();
  const [phase, setPhase] = useState(() => (pathname === '/' && !reduced ? 'waiting' : 'done'));
  const skipRef = useRef(null);
  const active = phase !== 'done' && !reduced && pathname === '/';
  const ready = !active || phase === 'revealing';

  useEffect(() => {
    if (!active) return undefined;
    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = 'hidden';
    lenis?.stop();
    return () => {
      root.style.overflow = previousOverflow;
      lenis?.start();
    };
  }, [active, lenis]);

  useEffect(() => {
    if (!active || phase !== 'waiting') return undefined;
    let cancelled = false;
    let minimumTimer;
    let maximumTimer;
    const minimum = new Promise((resolve) => {
      minimumTimer = window.setTimeout(resolve, 1300);
    });
    const maximum = new Promise((resolve) => {
      maximumTimer = window.setTimeout(resolve, 2200);
    });
    const image = new Image();
    image.src = designContent.home.image;
    const imageReady = image.decode ? image.decode().catch(() => {}) : Promise.resolve();
    const assets = Promise.allSettled([document.fonts?.ready, imageReady]);
    Promise.all([minimum, Promise.race([assets, maximum])]).then(() => {
      if (!cancelled) setPhase('revealing');
    });
    return () => {
      cancelled = true;
      clearTimeout(minimumTimer);
      clearTimeout(maximumTimer);
    };
  }, [active, phase]);

  useEffect(() => {
    if (phase !== 'revealing') return undefined;
    const timer = window.setTimeout(() => setPhase('done'), 750);
    return () => window.clearTimeout(timer);
  }, [phase]);

  useEffect(() => {
    if (!active || phase !== 'waiting') return undefined;
    const dismiss = (event) => {
      if (event.key === 'Escape' || event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        setPhase('done');
      }
    };
    window.addEventListener('keydown', dismiss);
    return () => window.removeEventListener('keydown', dismiss);
  }, [active, phase]);

  // Only the initial homepage load has an intro; client-side navigation stays immediate.
  return (
    <IntroReadyContext.Provider value={ready}>
      <div
        className="intro-page"
        data-intro-ready={ready}
        inert={ready ? undefined : ''}
        aria-hidden={ready ? undefined : true}
      >
        {children}
      </div>
      {active && (
        <motion.div
          className="brand-intro"
          aria-hidden={phase === 'revealing' ? true : undefined}
          animate={{ opacity: phase === 'revealing' ? 0 : 1 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          style={{ pointerEvents: phase === 'waiting' ? 'auto' : 'none' }}
        >
          <motion.div
            className="intro-lockup"
            role="status"
            aria-label={designContent.loading.label}
            animate={{ opacity: phase === 'revealing' ? 0 : 1, y: phase === 'revealing' ? -6 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="intro-logo-slices" aria-hidden="true">
              {bands.map((band) => (
                <div
                  className="intro-logo-slice"
                  key={band}
                  style={{ clipPath: `inset(${band * 20}% 0 ${80 - band * 20}% 0)` }}
                >
                  <motion.img
                    src="/logo/1x/full_brand_logo.png"
                    alt=""
                    width={617}
                    height={94}
                    initial={{ opacity: 0, y: band % 2 ? -10 : 10, x: band % 2 ? 14 : -14 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    transition={{
                      delay: 0.12 + band * 0.045,
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                </div>
              ))}
            </div>
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.45 }}
            >
              {designContent.descriptor}
            </motion.p>
          </motion.div>
          <button
            ref={skipRef}
            className="intro-skip"
            type="button"
            disabled={phase === 'revealing'}
            onClick={() => setPhase('done')}
          >
            {designContent.loading.skip}
          </button>
        </motion.div>
      )}
    </IntroReadyContext.Provider>
  );
};
export default BrandIntro;
