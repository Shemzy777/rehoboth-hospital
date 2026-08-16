/**
 * Central image registry.
 *
 * Every photograph used on the site is declared here as a stable base
 * Unsplash CDN id (free-license, verified) plus descriptive alt text.
 * Components never hardcode an image URL — they look it up by key through
 * `photoUrl()`, so a real production photo can replace any entry by
 * changing one line here.
 *
 * `photoUrl` builds a properly sized, compressed, cropped URL on demand
 * (auto=format picks WebP/AVIF when the browser supports it).
 */

export interface PhotoRef {
  /** Unsplash CDN base id, e.g. "photo-1234567890-abcdef123456" */
  id: string;
  /** Descriptive alt text — never generic ("photo", "image1") */
  alt: string;
  /** Optional focal point for cover-cropping, default center */
  position?: string;
}

export function photoUrl(
  photo: PhotoRef,
  { w = 1200, h, q = 75 }: { w?: number; h?: number; q?: number } = {}
) {
  const params = new URLSearchParams({
    auto: 'format',
    fit: 'crop',
    w: String(w),
    q: String(q),
  });
  if (h) params.set('h', String(h));
  return `https://images.unsplash.com/${photo.id}?${params.toString()}`;
}

// ---- Verified, sourced photography ----------------------------------
// Each entry below was individually verified (fetched from its Unsplash
// photo page) rather than guessed. Free-license only — no Unsplash+.

export const heroPhoto: PhotoRef = {
  id: 'photo-1516841273335-e39b37888115',
  alt: 'A team of doctors and nurses walking together through a hospital hallway',
};

export const aboutPhoto: PhotoRef = {
  id: 'photo-1516841273335-e39b37888115',
  alt: 'Medical team walking through Rehoboth Hospital during morning rounds',
};

export const servicePhotos: Record<string, PhotoRef> = {
  'general-consultation': {
    id: 'photo-1758691462863-9e1b8a863140',
    alt: 'A doctor consulting with a patient in an office, discussing treatment',
  },
  surgery: {
    id: 'photo-1639154968821-6dbc3efb8d23',
    alt: 'Two surgeons performing surgery on a patient in an operating theatre',
  },
  'health-screening': {
    id: 'photo-1631815587646-b85a1bb027e1',
    alt: 'A doctor checking the blood pressure of a patient during a health screening',
  },
  vaccination: {
    id: 'photo-1576766125535-b04e15fd0273',
    alt: 'A healthcare worker administering a vaccine to a young patient',
  },
  'maternity-care': {
    id: 'photo-1759802147238-5c18d1463bd4',
    alt: 'A newborn baby with medical staff present shortly after childbirth',
  },
};

/** Fallback used for services without a sourced photo yet (see README). */
export const genericServicePhoto: PhotoRef = servicePhotos['general-consultation'];

export function getServicePhoto(slug: string): PhotoRef {
  return servicePhotos[slug] ?? genericServicePhoto;
}

export interface LocalServiceImage {
  src: string;
  alt: string;
}

export const localServiceImages: Record<string, LocalServiceImage> = {
  'general-consultation': {
    src: '/images/rehoboth3.jpg',
    alt: 'Doctor consulting with a patient at Rehoboth Hospital',
  },
  'emergency-care': {
    src: '/images/rehoboth9.png',
    alt: 'Emergency care team attending to a patient at Rehoboth Hospital',
  },
  'laboratory-services': {
    src: '/images/rehoboth14.png',
    alt: 'Laboratory technician running diagnostic tests at Rehoboth Hospital',
  },
  'radiology-imaging': {
    src: '/images/rehoboth15.png',
    alt: 'Radiology and MRI imaging equipment at Rehoboth Hospital',
  },
  pharmacy: {
    src: '/images/rehoboth16.png',
    alt: 'Pharmacist dispensing medication at Rehoboth Hospital pharmacy',
  },
  physiotherapy: {
    src: '/images/rehoboth4.jpg',
    alt: 'Physiotherapist working with a patient during rehabilitation session',
  },
  'dental-care': {
    src: '/images/rehoboth17.png',
    alt: 'Dental care professional providing treatment at Rehoboth Hospital',
  },
  'eye-care': {
    src: '/images/rehoboth18.png',
    alt: 'Ophthalmologist performing an eye examination at Rehoboth Hospital',
  },
  'ambulance-services': {
    src: '/images/rehoboth19.png',
    alt: 'Rehoboth Hospital ambulance and paramedic team ready for emergency transport',
  },
};

export function getLocalServiceImage(slug: string): LocalServiceImage | undefined {
  return localServiceImages[slug];
}
