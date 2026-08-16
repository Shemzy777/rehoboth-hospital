import { Link } from 'react-router-dom';
import { Phone, ArrowUpRight } from 'lucide-react';
import { Button, TextLink } from '../ui/Button';

export function Hero() {
  return (
    <section className="border-b border-silver">
      <div className="container-page pt-14 pb-20 lg:pt-20 lg:pb-28 grid lg:grid-cols-[0.85fr_1fr] gap-12 lg:gap-16 items-start">
        <div className="animate-fade-up lg:pt-6">
          <p className="eyebrow mb-5">Rehoboth Hospital</p>
          <h1 className="text-[2.5rem] sm:text-5xl lg:text-[3.4rem] font-semibold text-ink leading-[1.05] tracking-tight">
            Healthcare that puts people first.
          </h1>
          <p className="mt-6 text-muted text-lg leading-relaxed max-w-md">
            Good healthcare starts with listening. Our teams work closely with patients and
            families in Lagos to provide the right care, at the right time, for every stage of life.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-6">
            <Button to="/appointments" size="lg">Book an Appointment</Button>
            <TextLink to="/services">Explore Our Services</TextLink>
          </div>

          <div className="mt-14 hidden lg:block">
            <div className="rule w-16 mb-4" />
            <p className="text-sm text-muted max-w-xs leading-relaxed">
              Founded in 2020. Today, over 30 specialists care for patients across 15+ departments.
            </p>
          </div>
        </div>

        <div className="relative">
          <img
            src="/images/rehoboth1.png"
            alt="A team of doctors and nurses walking together through a hospital hallway"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="aspect-[5/6] w-full h-full object-cover"
            style={{ objectPosition: 'center 30%' }}
          />
          <Link
            to="/emergency"
            className="group absolute -bottom-8 left-0 sm:left-8 bg-warm-white border border-silver p-5 max-w-[260px] shadow-[0_12px_32px_-16px_rgba(10,42,71,0.25)]"
          >
            <p className="eyebrow mb-1.5">24/7 Emergency Care</p>
            <p className="text-sm text-ink font-medium leading-snug">Always here when you need us.</p>
            <span className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-brick">
              <Phone className="w-3 h-3" aria-hidden="true" /> 09047028189
              <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export function QuickAccess() {
  const items = [
    { label: 'Laboratory', to: '/services/laboratory-services' },
    { label: 'Patient Portal', to: '/portal' },
    { label: 'Careers', to: '/careers' },
  ];
  return (
    <div className="border-b border-silver bg-paper/60">
      <div className="container-page py-3.5 flex items-center gap-1 overflow-x-auto">
        {items.map((item, i) => (
          <span key={item.to} className="flex items-center shrink-0">
            {i > 0 && <span className="w-px h-3 bg-silver-cool mx-4" aria-hidden="true" />}
            <Link to={item.to} className="text-xs font-medium text-muted hover:text-medical transition-colors whitespace-nowrap">
              {item.label}
            </Link>
          </span>
        ))}
      </div>
    </div>
  );
}
