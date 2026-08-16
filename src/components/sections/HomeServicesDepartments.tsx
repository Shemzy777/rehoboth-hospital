import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { services, getServiceBySlug } from '../../data/services';
import { departments } from '../../data/departments';
import { SectionHeading } from '../ui/Primitives';
import { TextLink } from '../ui/Button';
import { ImageBlock } from '../ui/ImageBlock';

export function ServicesPreview() {
  const featured = getServiceBySlug('surgery') ?? services[0];
  const rest = services.filter((s) => s.id !== featured.id).slice(0, 6);

  return (
    <section className="py-20 lg:py-28 border-b border-silver">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <SectionHeading eyebrow="Medical Services" title="Comprehensive care, under one roof." />
          <TextLink to="/services">View All Services</TextLink>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 mb-14">
          <div className="lg:col-span-7">
            <img
              src="/images/rehoboth8.png"
              alt="Surgical team operating in an operating room"
              loading="lazy"
              className="aspect-[16/9] w-full h-full object-cover"
            />
          </div>
          <div className="lg:col-span-4 lg:col-start-9 lg:pt-2">
            <p className="eyebrow mb-3">Featured Service</p>
            <h3 className="font-display text-2xl text-ink mb-3">{featured.name}</h3>
            <p className="text-muted leading-relaxed mb-5">{featured.longDescription}</p>
            <TextLink to={`/services/${featured.slug}`}>View Service</TextLink>
          </div>
        </div>

        <div className="border-t border-silver">
          {rest.map((s) => (
            <Link
              key={s.id}
              to={`/services/${s.slug}`}
              className="group flex items-center justify-between gap-6 py-4 border-b border-silver hover:bg-paper/50 transition-colors -mx-2 px-2"
            >
              <div>
                <p className="font-medium text-ink text-sm">{s.name}</p>
                <p className="text-sm text-muted mt-0.5 hidden sm:block">{s.shortDescription}</p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-medical" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DepartmentsPreview() {
  const list = departments.slice(0, 8);
  const [hovered, setHovered] = useState(list[0].slug);
  const active = list.find((d) => d.slug === hovered) ?? list[0];

  return (
    <section className="py-20 lg:py-28 border-b border-silver">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <SectionHeading eyebrow="Departments" title="15+ specialties, one hospital." />
          <TextLink to="/departments">View All Departments</TextLink>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 border-t border-ink">
            {list.map((d, i) => (
              <Link
                key={d.slug}
                to={`/departments/${d.slug}`}
                onMouseEnter={() => setHovered(d.slug)}
                className="group flex items-center gap-5 py-4 border-b border-silver hover:pl-2 transition-[padding] duration-200"
              >
                <span className="font-mono-label text-xs text-muted w-6 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                <span className="flex-1 font-display text-lg sm:text-xl text-ink group-hover:text-medical transition-colors">
                  {d.name}
                </span>
                <ArrowUpRight className="w-4 h-4 text-muted shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-medical" aria-hidden="true" />
              </Link>
            ))}
          </div>

          <div className="hidden lg:block lg:col-span-4 lg:col-start-9">
            <ImageBlock seed={active.photoSeed} className="aspect-[4/5] w-full sticky top-24" rounded="rounded-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
