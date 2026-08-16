/**
 * Placeholder visual block used wherever a real photograph would go in
 * production (hero imagery, doctor headshots, facility/department photos).
 *
 * Styled as a documentary-style photography placeholder — a muted duotone
 * field with a small caption tag — rather than a bright gradient-and-icon
 * block, so the layout composition reads correctly even before real
 * photography is dropped in.
 *
 * Swap-in point: replace this component's contents with a real <img
 * src="..." /> once production photography is available — every usage
 * already passes a stable `seed` string that can become a filename.
 */
export function ImageBlock({
  seed,
  src,
  alt,
  className = '',
  rounded = 'rounded-none',
  tone = 'light',
}: {
  seed: string;
  src?: string;
  alt?: string;
  icon?: unknown;
  className?: string;
  rounded?: string;
  tone?: 'light' | 'deep';
}) {
  const hash = Array.from(seed).reduce((a, c) => a + c.charCodeAt(0), 0);
  const angle = 105 + (hash % 40);

  const bg =
    tone === 'deep'
      ? `linear-gradient(${angle}deg, #0A2A47 0%, #0F3860 100%)`
      : `linear-gradient(${angle}deg, #E4E7EA 0%, #EEEFEA 100%)`;

  const caption = seed.replace(/-/g, ' ');
  const imgAlt = alt ?? caption;

  if (src) {
    return (
      <div className={`${rounded} ${className} overflow-hidden`}>
        <img
          src={src}
          alt={imgAlt}
          loading="lazy"
          decoding="async"
          className="object-cover w-full h-full"
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={caption}
      className={`relative overflow-hidden ${rounded} ${className}`}
      style={{ background: bg }}
    >
      <div
        className="absolute inset-0 mix-blend-overlay opacity-[0.35]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0px, transparent 1px, transparent 2px, rgba(0,0,0,0.03) 3px)',
        }}
        aria-hidden="true"
      />
      <span
        className={`absolute bottom-0 left-0 px-3 py-1.5 text-[0.625rem] font-mono-label tracking-wide uppercase ${
          tone === 'deep' ? 'text-white/50' : 'text-ink/35'
        }`}
      >
        {caption}
      </span>
    </div>
  );
}
