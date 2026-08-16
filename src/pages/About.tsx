import { usePageMeta } from '../lib/usePageMeta';
import { PageHeader } from '../components/ui/PageHeader';
import { MissionVision } from '../components/sections/HomeAbout';
import { SectionHeading } from '../components/ui/Primitives';

export default function About() {
  usePageMeta('About Us', 'Learn about Rehoboth Hospital — our story, our mission, and the team behind compassionate, accessible healthcare in Lagos.');

  return (
    <>
      <PageHeader
        eyebrow="About Rehoboth"
        title="Healthcare Built Around You"
        description="For over one decade, Rehoboth Hospital has combined experienced medical professionals, advanced technology, and compassionate care to serve patients and families across Lagos."
      />

      <section className="py-16 lg:py-24">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <img
            src="/images/rehoboth13.png"
            alt="Rehoboth Hospital story and heritage"
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] w-full object-cover"
          />
          <div>
            <SectionHeading eyebrow="Our Story" title="A Hospital Built on Trust" />
            <p className="mt-5 text-brand-muted leading-relaxed">
              Rehoboth Hospital was founded to close the gap between accessible primary care and advanced
              specialist medicine. What began as a small outpatient clinic has grown into a multidisciplinary
              hospital spanning 15+ departments, staffed by consultants trained locally and internationally.
            </p>
            <p className="mt-4 text-brand-muted leading-relaxed">
              Today, our team cares for thousands of patients a year — from routine consultations and
              maternity care to complex surgery and emergency medicine — without losing sight of the
              individual behind every diagnosis.
            </p>
          </div>
        </div>
      </section>

      <MissionVision />
    </>
  );
}
