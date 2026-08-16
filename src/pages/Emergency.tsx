import { Phone, MapPin } from 'lucide-react';
import { usePageMeta } from '../lib/usePageMeta';

const steps = [
  'Stay calm and assess the situation. If it is safe, remain with the patient.',
  'Call our emergency line immediately, or dial your local emergency number for an ambulance.',
  'Give a clear location and a brief description of the emergency to the dispatcher.',
  'If trained to do so, provide basic first aid while help is on the way.',
  'Head to the Emergency Department entrance — clearly signposted at the hospital\'s main gate.',
];

export default function Emergency() {
  usePageMeta('Emergency Care', 'Rehoboth Hospital\'s Emergency Department is open 24/7. Call our emergency hotline immediately for urgent or life-threatening conditions.');

  return (
    <>
      <section className="border-b border-silver">
        <div className="container-page py-16 lg:py-24 grid lg:grid-cols-[auto_1fr] gap-8 lg:gap-16 items-start">
          <p className="font-display text-7xl sm:text-8xl text-brick leading-none">24/7</p>
          <div className="lg:pt-3 border-l-0 lg:border-l border-silver lg:pl-16">
            <p className="eyebrow text-brick mb-3">Need Urgent Care?</p>
            <h1 className="font-display text-3xl lg:text-4xl text-ink leading-tight max-w-xl">
              Our Emergency Department is available 24 hours a day, 7 days a week.
            </h1>
            <a
              href="tel:09047028189"
              className="mt-6 inline-flex items-center gap-2.5 text-lg font-semibold text-ink hover:text-brick transition-colors"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              09047028189
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 border-b border-silver">
        <div className="container-page grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-3">Ambulance Services</p>
            <p className="text-muted leading-relaxed text-sm">Our ambulance fleet is dispatched around the clock, staffed by trained personnel equipped for pre-hospital stabilisation.</p>
          </div>
          <div className="lg:col-span-4">
            <p className="eyebrow mb-3">Hospital Location</p>
            <p className="text-muted leading-relaxed text-sm">221 Camp Davies Rd, Ishefun, Ayobo, Lagos. The Emergency entrance is clearly signposted at the main gate, with dedicated ambulance access.</p>
          </div>
          <div className="lg:col-span-4">
            <p className="eyebrow mb-3">24/7 Availability</p>
            <p className="text-muted leading-relaxed text-sm">Staffed around the clock by an experienced emergency medicine and trauma team, every day of the year.</p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container-page grid lg:grid-cols-2 gap-14">
          <div>
            <p className="eyebrow mb-6">What To Do In An Emergency</p>
            <ol className="border-t border-ink">
              {steps.map((s, i) => (
                <li key={s} className="flex gap-5 py-4 border-b border-silver">
                  <span className="font-mono-label text-xs text-brick shrink-0 pt-0.5">{String(i + 1).padStart(2, '0')}</span>
                  <p className="text-sm text-ink leading-relaxed">{s}</p>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <p className="eyebrow mb-6">Directions</p>
            <div className="border border-silver aspect-video flex items-center justify-center bg-paper/50">
              <p className="text-sm text-muted flex items-center gap-2">
                <MapPin className="w-4 h-4" aria-hidden="true" /> Map placeholder — embed live directions here
              </p>
            </div>
            <p className="mt-4 text-sm text-muted leading-relaxed">221 Camp Davies Rd, Ishefun, Ayobo, Lagos. Ambulance and emergency vehicle access is available directly at the Emergency Department entrance.</p>
          </div>
        </div>
      </section>
    </>
  );
}
