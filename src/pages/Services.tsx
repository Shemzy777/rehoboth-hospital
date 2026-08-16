import { useState } from 'react';
import { usePageMeta } from '../lib/usePageMeta';
import { PageHeader } from '../components/ui/PageHeader';
import { services } from '../data/services';
import { Photo } from '../components/ui/Photo';
import { getServicePhoto, getLocalServiceImage } from '../lib/images';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

function ServiceThumb({ slug, className }: { slug: string; className?: string }) {
  const local = getLocalServiceImage(slug);
  if (local) {
    return (
      <img
        src={local.src}
        alt={local.alt}
        loading="lazy"
        decoding="async"
        className={`w-full h-full object-cover ${className ?? ''}`}
      />
    );
  }
  return <Photo photo={getServicePhoto(slug)} width={800} className={className} />;
}

export default function Services() {
  usePageMeta('Medical Services', 'Explore the full range of medical services offered at Rehoboth Hospital, from general consultation to specialist and emergency care.');
  const [hovered, setHovered] = useState(services[0].slug);
  const active = services.find((s) => s.slug === hovered) ?? services[0];

  return (
    <>
      <PageHeader
        eyebrow="Medical Services"
        title="Comprehensive care, under one roof."
        description="From general consultation to specialist treatment, our services are designed around your health at every stage of life."
      />
      <section className="py-14 lg:py-16">
        <div className="container-page grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 border-t border-ink">
            {services.map((s, i) => (
              <Link
                key={s.id}
                to={`/services/${s.slug}`}
                onMouseEnter={() => setHovered(s.slug)}
                className="group flex items-center gap-5 py-4 border-b border-silver hover:pl-2 transition-[padding] duration-200"
              >
                <span className="font-mono-label text-xs text-muted w-6 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                <span className="flex-1 min-w-0">
                  <span className="block font-display text-lg text-ink group-hover:text-medical transition-colors">{s.name}</span>
                  <span className="hidden sm:block text-sm text-muted mt-0.5 truncate">{s.shortDescription}</span>
                </span>
                {/* Static thumbnail shown on mobile/tablet where hover isn't available */}
                <span className="lg:hidden w-14 h-14 shrink-0 overflow-hidden">
                  <ServiceThumb slug={s.slug} className="aspect-square" />
                </span>
                <ArrowUpRight className="hidden lg:block w-4 h-4 text-muted shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-medical" aria-hidden="true" />
              </Link>
            ))}
          </div>

          <div className="hidden lg:block lg:col-span-4 lg:col-start-9">
            <div className="sticky top-24">
              <ServiceThumb slug={active.slug} className="aspect-[4/5]" />
              <p className="mt-4 font-display text-lg text-ink">{active.name}</p>
              <p className="mt-1 text-sm text-muted leading-relaxed">{active.shortDescription}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
