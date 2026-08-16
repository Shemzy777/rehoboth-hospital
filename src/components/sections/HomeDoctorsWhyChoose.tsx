import { doctors } from '../../data/doctors';
import { SectionHeading } from '../ui/Primitives';
import { TextLink } from '../ui/Button';
import { ImageBlock } from '../ui/ImageBlock';
import { UserRound } from 'lucide-react';

export function FeaturedDoctors() {
  const featured = doctors.slice(0, 3);
  return (
    <section className="py-20 lg:py-28 border-b border-silver">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <SectionHeading eyebrow="Our Doctors" title="Meet a few of our specialists." />
          <TextLink to="/doctors">View Full Directory</TextLink>
        </div>

        <div className="grid sm:grid-cols-3 gap-8 lg:gap-6">
          {featured.map((d) => (
            <a key={d.id} href={`/doctors/${d.slug}`} className="group block">
              <ImageBlock
                seed={d.photoSeed}
                icon={UserRound}
                className="aspect-[3/4] w-full transition-[filter] duration-300 group-hover:brightness-95"
                rounded="rounded-none"
              />
              <div className="mt-4 border-t border-silver pt-3">
                <p className="font-display text-lg text-ink group-hover:text-medical transition-colors">{d.name}</p>
                <p className="text-sm text-muted mt-0.5">{d.specialty}</p>
                <p className="font-mono-label text-[0.6875rem] text-muted mt-2 tracking-wide">{d.yearsExperience}+ YEARS EXPERIENCE</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

const reasons = [
  { n: '01', title: 'Experienced specialists', body: '50+ consultants across 15+ disciplines, many trained internationally.' },
  { n: '02', title: 'Advanced technology', body: 'Modern diagnostic and treatment equipment across every department.' },
  { n: '03', title: '24/7 availability', body: 'Emergency and inpatient care available around the clock, every day.' },
  { n: '04', title: 'Patient safety first', body: 'Rigorous safety and quality standards guide every stage of care.' },
];

export function WhyChoose() {
  return (
    <section className="py-20 lg:py-28 border-b border-silver">
      <div className="container-page grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <SectionHeading eyebrow="Why Rehoboth" title="Care built on trust, not promises." />
        </div>
        <div className="lg:col-span-7 lg:col-start-6 grid sm:grid-cols-2 gap-x-10 gap-y-8 border-t border-silver pt-8">
          {reasons.map((r) => (
            <div key={r.n}>
              <p className="font-mono-label text-xs text-medical mb-2">{r.n}</p>
              <p className="font-display text-lg text-ink mb-1.5">{r.title}</p>
              <p className="text-sm text-muted leading-relaxed">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
