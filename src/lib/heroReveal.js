export const HERO_REVEAL_EVENT = 'eastgate:hero-reveal';

export function dispatchHeroReveal() {
  window.dispatchEvent(new Event(HERO_REVEAL_EVENT));
}
