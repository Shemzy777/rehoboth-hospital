import { usePageMeta } from '../lib/usePageMeta';
import { PageHeader } from '../components/ui/PageHeader';
import { SectionHeading } from '../components/ui/Primitives';
import { jobs } from '../data/misc';
import { JobCard } from '../components/ui/Cards';

const benefits = [
  { title: 'Health & wellness cover', description: 'Comprehensive medical cover for staff and eligible dependents.' },
  { title: 'Continuous learning', description: 'Ongoing training, certifications, and support for professional development.' },
  { title: 'Career growth', description: 'Clear pathways for advancement across clinical and administrative roles.' },
  { title: 'Supportive team culture', description: 'A collaborative, multidisciplinary environment built on mutual respect.' },
];

export default function Careers() {
  usePageMeta('Careers', 'Explore current openings and build your career at Rehoboth Hospital across medical, nursing, administrative, and internship roles.');

  return (
    <>
      <PageHeader eyebrow="Careers" title="Build your career at Rehoboth." description="Join a team dedicated to compassionate, high-quality healthcare — across medical, nursing, and administrative roles." />

      <section className="py-14 lg:py-20 border-b border-silver">
        <div className="container-page">
          <SectionHeading eyebrow="Why Work With Us" title="A career that makes a difference." />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 border-t border-silver pt-8">
            {benefits.map((b, i) => (
              <div key={b.title}>
                <p className="font-mono-label text-xs text-medical mb-2">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="font-display text-lg text-ink">{b.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Open Positions" title="Current opportunities." description="Medical, nursing, administrative, and internship roles across the hospital." />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
            {jobs.map((j) => (
              <JobCard key={j.id} job={j} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
