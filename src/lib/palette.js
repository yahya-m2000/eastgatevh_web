/**
 * Which color system is live. "brand" is the original teal/navy/purple
 * identity; "editorial" is the ink/paper/gold system adopted from the
 * Figma redesign. Both are fully defined in global.css as CSS variables
 * keyed off `data-palette` on <html> — flipping this constant (or using
 * the dev-only switcher in PaletteSwitcher.jsx) is the only thing that
 * changes; no component code differs between palettes.
 */
export const PALETTES = ['brand', 'editorial'];
export const DEFAULT_PALETTE = 'editorial';
export const PALETTE_STORAGE_KEY = 'eastgate-palette';
export const PALETTE_CHANGE_EVENT = 'eastgate:palette-change';

export const getStoredPalette = () => {
  if (typeof window === 'undefined') return DEFAULT_PALETTE;
  const stored = window.localStorage.getItem(PALETTE_STORAGE_KEY);
  return PALETTES.includes(stored) ? stored : DEFAULT_PALETTE;
};

export const applyPalette = (palette) => {
  if (typeof document === 'undefined') return;
  document.documentElement.setAttribute('data-palette', palette);
  window.dispatchEvent(new CustomEvent(PALETTE_CHANGE_EVENT, { detail: palette }));
};
