import { useState } from 'react';
import { ArrowLeft, ArrowRight, Phone, MapPin } from 'lucide-react';
import { testimonials } from '../../data/misc';
import { Button } from '../ui/Button';

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];
  const total = testimonials.length;

  return (
    <section className="py-20 lg:py-28 border-b border-silver">
      <div className="container-page">
        <p className="eyebrow mb-10">Patient Stories</p>
        <div className="max-w-3xl">
          <p className="font-display text-2xl sm:text-3xl lg:text-[2.25rem] text-ink leading-[1.3]">
            &ldquo;{t.quote}&rdquo;
          </p>
          <p className="mt-6 text-sm text-muted">
            <span className="text-ink font-medium">{t.name}</span> — {t.service} Patient
          </p>
        </div>

        <div className="mt-10 flex items-center gap-5">
          <button
            onClick={() => setIndex((i) => (i - 1 + total) % total)}
            aria-label="Previous testimonial"
            className="w-9 h-9 rounded-full border border-silver-cool flex items-center justify-center hover:border-medical hover:text-medical transition-colors"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          </button>
          <span className="font-mono-label text-xs text-muted">
            {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
          <button
            onClick={() => setIndex((i) => (i + 1) % total)}
            aria-label="Next testimonial"
            className="w-9 h-9 rounded-full border border-silver-cool flex items-center justify-center hover:border-medical hover:text-medical transition-colors"
          >
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
        <p className="mt-6 text-xs text-muted">Demonstration testimonials shown for this preview build.</p>
      </div>
    </section>
  );
}

export function AppointmentCta() {
  return (
    <section className="py-16 lg:py-20 border-b border-silver">
      <div className="container-page flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        <div>
          <p className="eyebrow mb-3">Ready when you are</p>
          <h2 className="font-display text-2xl lg:text-3xl text-ink max-w-md leading-snug">
            Booking a visit takes less than five minutes.
          </h2>
        </div>
        <Button to="/appointments" size="lg">Book an Appointment</Button>
      </div>
    </section>
  );
}

export function EmergencyCta() {
  return (
    <section className="py-16 lg:py-20">
      <div className="container-page grid lg:grid-cols-[auto_1fr_auto] items-center gap-8 lg:gap-14">
        <div>
          <p className="font-display text-6xl lg:text-7xl text-brick leading-none">24/7</p>
        </div>
        <div className="border-l border-silver pl-8 lg:pl-14">
          <p className="eyebrow text-brick mb-2">Need Urgent Care?</p>
          <p className="text-ink font-medium">
            Our Emergency Department is available 24 hours a day, 7 days a week.
          </p>
          <a href="tel:09047028189" className="mt-3 flex items-center gap-2 text-sm font-semibold text-ink hover:text-brick transition-colors w-fit">
            <Phone className="w-3.5 h-3.5" aria-hidden="true" /> 09047028189
          </a>
        </div>
        <Button to="/emergency" variant="emergency" icon={<MapPin className="w-4 h-4" aria-hidden="true" />}>
          Get Directions
        </Button>
      </div>
    </section>
  );
}
