import { useEffect, useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useLenis } from 'lenis/react';
import SplitHeading from '@/components/motion/SplitHeading';
import FadeIn from '@/components/motion/FadeIn';
import { dispatchHeroReveal } from '@/lib/heroReveal';
import { getStoredPalette, PALETTE_CHANGE_EVENT } from '@/lib/palette';
import { prefersReducedMotion } from '@/lib/useReducedMotion';

/**
 * Homepage opens empty except a centered glyph mark on a dark curtain — no
 * header, no copy. The first scroll/wheel/touch/key input fires a one-time
 * transition: a bar wipes down over the glyph, hides it, then the same
 * motion continues by wiping back up off the header's logo slot to reveal
 * the full wordmark already docked there (Header.jsx listens for the reveal
 * event and un-hides itself; this component only choreographs the wipe
 * bars). Once that settles, the curtain lifts to the Figma skeleton's actual
 * hero underneath: a light, photo-less, text-only section (eyebrow line,
 * serif-scale headline, subhead, hairline "Scroll to explore" row) — the
 * curtain is the only animated addition on top of that skeleton.
 *
 * Every bar transform is driven exclusively through GSAP (never a raw inline
 * `style.transform`/JSX `style={{transform}}`) — mixing the two caused GSAP's
 * transform cache to desync from the DOM's actual starting position, which
 * showed up as a long stall before the animation visibly started and a bar
 * that moved the wrong direction.
 */
const HeroLogoReveal = ({ eyebrow, title, subtitle }) => {
  const glyphRef = useRef(null);
  const wipeBarRef = useRef(null);
  const curtainRef = useRef(null);
  const reducedMotion = useMemo(() => prefersReducedMotion(), []);
  const [revealed, setRevealed] = useState(reducedMotion);
  const hasFiredRef = useRef(false);
  const lenis = useLenis();
  const [palette, setPalette] = useState(getStoredPalette);

  useEffect(() => {
    const onChange = (event) => setPalette(event.detail);
    window.addEventListener(PALETTE_CHANGE_EVENT, onChange);
    return () => window.removeEventListener(PALETTE_CHANGE_EVENT, onChange);
  }, []);

  useEffect(() => {
    if (reducedMotion) return undefined;

    const bar = wipeBarRef.current;
    const glyph = glyphRef.current;
    const curtain = curtainRef.current;
    gsap.set(bar, { yPercent: -100 });

    const headerLogoWrap = document.querySelector('[data-header-logo]');
    let headerWipeBar;

    const fireIntro = () => {
      if (hasFiredRef.current) return;
      hasFiredRef.current = true;
      window.removeEventListener('wheel', fireIntro);
      window.removeEventListener('touchstart', fireIntro);
      window.removeEventListener('keydown', onKeyDown);
      lenis?.stop();
      document.body.style.overflow = 'hidden';

      headerWipeBar = document.createElement('div');
      headerWipeBar.className = 'absolute inset-0 bg-secondary';
      if (headerLogoWrap) {
        headerLogoWrap.style.clipPath = 'inset(0 0 100% 0)';
        headerLogoWrap.appendChild(headerWipeBar);
      }
      gsap.set(headerWipeBar, { yPercent: 100 });

      const tl = gsap.timeline({
        defaults: { duration: 0.5, ease: 'power2.inOut' },
        onComplete: () => {
          setRevealed(true);
          headerWipeBar?.remove();
          if (headerLogoWrap) headerLogoWrap.style.clipPath = '';
          document.body.style.overflow = '';
          lenis?.start();
        },
      });

      tl.to(bar, { yPercent: 0 })
        .set(glyph, { opacity: 0 })
        .to(bar, { yPercent: 100 })
        .call(() => dispatchHeroReveal())
        .to(curtain, { autoAlpha: 0, duration: 0.35 }, '<')
        .set(headerWipeBar, { yPercent: 0 })
        .set(headerLogoWrap, { clipPath: 'inset(0 0 0% 0)' })
        .to(headerWipeBar, { yPercent: -100 }, '<');
    };

    const onKeyDown = (event) => {
      if (['ArrowDown', 'PageDown', ' '].includes(event.key)) fireIntro();
    };

    window.addEventListener('wheel', fireIntro, { passive: true, once: true });
    window.addEventListener('touchstart', fireIntro, { passive: true, once: true });
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('wheel', fireIntro);
      window.removeEventListener('touchstart', fireIntro);
      window.removeEventListener('keydown', onKeyDown);
      headerWipeBar?.remove();
      document.body.style.overflow = '';
    };
  }, [reducedMotion, lenis]);

  return (
    <section className="relative flex min-h-svh flex-col justify-end overflow-hidden bg-paper px-6 pb-20 pt-17 sm:px-10">
      {!reducedMotion && !revealed && (
        <div
          ref={curtainRef}
          data-header-dark
          className="absolute inset-0 z-10 flex items-center justify-center bg-secondary"
        >
          <div className="relative overflow-hidden">
            <img
              ref={glyphRef}
              src={`/logo/1x/brand_logo${palette === 'editorial' ? '_editorial' : ''}.png`}
              alt=""
              aria-hidden="true"
              className="pointer-events-none block h-24 w-auto select-none sm:h-32 md:h-40"
            />
            <div ref={wipeBarRef} aria-hidden="true" className="absolute inset-0 bg-secondary" />
          </div>
          <p className="pointer-events-none absolute bottom-10 text-xs font-semibold uppercase tracking-[0.3em] text-paper/50">
            Scroll
          </p>
        </div>
      )}

      <div className="container-page w-full">
        <p className="mb-10 text-[11px] uppercase tracking-[0.28em] text-muted">{eyebrow}</p>

        <SplitHeading
          as="h1"
          className="max-w-3xl font-display text-[clamp(2.75rem,5.5vw,5.25rem)] font-light leading-[1.06] tracking-tight text-ink"
        >
          {title}
        </SplitHeading>

        {subtitle && (
          <FadeIn delay={0.15}>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted">{subtitle}</p>
          </FadeIn>
        )}

        <FadeIn
          delay={0.25}
          className="mt-24 flex w-full justify-between border-t border-border pt-6 text-xs text-muted"
        >
          <span>Scroll to explore</span>
          <span>Est. 2024 &middot; London</span>
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroLogoReveal;
