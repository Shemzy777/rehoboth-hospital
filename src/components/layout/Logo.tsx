import { Link } from 'react-router-dom';

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3 shrink-0" aria-label="Rehoboth Hospital home">
      <img
        src="/images/rehoboth logo.png"
        alt="Rehoboth Hospital"
        className={`h-10 w-auto object-contain ${light ? 'brightness-0 invert' : ''}`}
      />
    </Link>
  );
}
