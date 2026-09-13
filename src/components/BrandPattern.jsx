import { useMemo } from 'react';
import { cn } from '@/lib/utils';

const GLYPH_SRC = '/logo/1x/brand_logo_one_colour.png';
const GLYPH_RATIO = 138 / 191;

/**
 * Faint staggered field of the brand's ᴲE mark for dark surfaces, matching
 * the tote bag / notebook / box treatment in the brand mockups: a tonal
 * watermark (same colour family as the surface, not the teal brand colour),
 * individual glyphs scattered in a brick grid with alternating rows offset
 * by half a cell. Each glyph is its own no-repeat mask layer (CSS
 * background-repeat can't add gaps around a tiled image, so the field is
 * generated explicitly rather than tiled) — using mask-image instead of
 * background-image lets the color come from `currentColor` rather than the
 * source PNG's own baked-in teal pixels.
 */
export const GlyphWatermark = ({
  className,
  opacity = 0.08,
  glyphWidth = 32,
  cellWidth = 56,
  cellHeight = 56,
}) => {
  const glyphHeight = glyphWidth * GLYPH_RATIO;

  const { maskImage, maskSize, maskRepeat, maskPosition } = useMemo(() => {
    const cols = Math.ceil(1600 / cellWidth) + 1;
    const rows = Math.ceil(1200 / cellHeight) + 1;
    const images = [];
    const sizes = [];
    const repeats = [];
    const positions = [];

    for (let row = 0; row < rows; row += 1) {
      const rowOffset = row % 2 === 1 ? cellWidth / 2 : 0;
      for (let col = 0; col < cols; col += 1) {
        images.push(`url('${GLYPH_SRC}')`);
        sizes.push(`${glyphWidth}px ${glyphHeight}px`);
        repeats.push('no-repeat');
        positions.push(`${col * cellWidth + rowOffset}px ${row * cellHeight}px`);
      }
    }

    return {
      maskImage: images.join(', '),
      maskSize: sizes.join(', '),
      maskRepeat: repeats.join(', '),
      maskPosition: positions.join(', '),
    };
  }, [cellWidth, cellHeight, glyphWidth, glyphHeight]);

  return (
    <div
      aria-hidden="true"
      className={cn('pointer-events-none absolute inset-0 overflow-hidden bg-current', className)}
      style={{
        opacity,
        WebkitMaskImage: maskImage,
        maskImage,
        WebkitMaskSize: maskSize,
        maskSize,
        WebkitMaskRepeat: maskRepeat,
        maskRepeat,
        WebkitMaskPosition: maskPosition,
        maskPosition,
      }}
    />
  );
};
