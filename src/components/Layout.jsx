import { useLayoutEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLenis } from 'lenis/react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useReducedMotion } from '@/lib/useReducedMotion';

const Layout = () => {
  const { pathname, hash } = useLocation();
  const previousPath = useRef(pathname);
  const mainRef = useRef(null);
  const lenis = useLenis();
  const reduced = useReducedMotion();
  useLayoutEffect(() => {
    const target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;
    const top = target ? target.getBoundingClientRect().top + window.scrollY - 100 : 0;
    if (lenis) lenis.scrollTo(top, { immediate: true, force: true });
    else window.scrollTo({ top, behavior: 'instant' });
    if (previousPath.current !== pathname) mainRef.current?.focus({ preventScroll: true });
    previousPath.current = pathname;
  }, [pathname, hash, lenis]);
  return (
    <div className="site-shell">
      <Header />
      <main id="main-content" ref={mainRef} tabIndex={-1}>
        <motion.div
          key={pathname}
          initial={reduced ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <Outlet />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};
export default Layout;
