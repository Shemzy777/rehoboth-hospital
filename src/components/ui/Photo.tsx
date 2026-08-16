import { useState } from 'react';
import type { PhotoRef } from '../../lib/images';
import { photoUrl } from '../../lib/images';

/**
 * Real photography component — replaces the old ImageBlock placeholder.
 * - object-fit: cover with sensible default position
 * - lazy loading by default; hero/above-fold images pass priority
 * - requests an appropriately sized asset rather than one huge file
 * - shows a quiet neutral fallback if the remote image fails to load
 */
export function Photo({
  photo,
  className = '',
  rounded = 'rounded-none',
  priority = false,
  width = 1200,
  position = 'center',
}: {
  photo: PhotoRef;
  className?: string;
  rounded?: string;
  priority?: boolean;
  width?: number;
  position?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`bg-paper flex items-center justify-center ${rounded} ${className}`}
        role="img"
        aria-label={photo.alt}
      >
        <span className="text-xs font-mono-label text-muted px-3 text-center">{photo.alt}</span>
      </div>
    );
  }

  return (
    <img
      src={photoUrl(photo, { w: width })}
      srcSet={`${photoUrl(photo, { w: Math.round(width / 2) })} ${Math.round(width / 2)}w, ${photoUrl(photo, { w: width })} ${width}w, ${photoUrl(photo, { w: width * 1.6 })} ${Math.round(width * 1.6)}w`}
      sizes="(min-width: 1024px) 50vw, 100vw"
      alt={photo.alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
      onError={() => setFailed(true)}
      className={`w-full h-full object-cover ${rounded} ${className}`}
      style={{ objectPosition: position }}
    />
  );
}
