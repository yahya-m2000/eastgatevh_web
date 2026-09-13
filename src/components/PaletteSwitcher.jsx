import { useEffect, useState } from 'react';
import { applyPalette, getStoredPalette, PALETTE_STORAGE_KEY, PALETTES } from '@/lib/palette';

/**
 * Dev-only floating control to A/B the two color systems live, without
 * touching code. Not part of the production design — purely a comparison
 * tool while the palette decision is being made.
 */
const PaletteSwitcher = () => {
  const [palette, setPalette] = useState(getStoredPalette);

  useEffect(() => {
    applyPalette(palette);
    window.localStorage.setItem(PALETTE_STORAGE_KEY, palette);
  }, [palette]);

  return (
    <div className="fixed bottom-4 left-4 z-50 flex gap-1 border border-border bg-surface-raised p-1 text-xs shadow-lg">
      {PALETTES.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setPalette(option)}
          className={
            option === palette
              ? 'bg-ink px-3 py-1.5 font-semibold text-paper'
              : 'px-3 py-1.5 text-ink/60 hover:text-ink'
          }
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default PaletteSwitcher;
