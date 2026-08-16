import { SectionHeading } from '../ui/Primitives';
import { TextLink } from '../ui/Button';

export function AboutSection() {
  return (
    <section className="py-16 lg:py-24 border-b border-silver">
      <div className="container-page">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="About Rehoboth" title="A hospital built around people, not procedures." />
            <p className="text-muted leading-relaxed mt-6">
              For nearly one decade, our focus has stayed simple: provide trusted healthcare with
              compassion, precision, and dignity. What began as a small outpatient clinic has grown
              into a multidisciplinary hospital, without losing sight of the individual behind every
              diagnosis.
            </p>
            <div className="mt-8 flex items-center gap-6">
              <p className="font-display text-4xl text-ink">
                7+ <span className="block text-sm font-sans font-normal text-muted mt-1">years of continuous care</span>
              </p>
              <TextLink to="/about">Learn More About Us</TextLink>
            </div>
          </div>

          <div className="lg:col-span-7">
            <img
              src="/images/rehoboth5.jpg"
              alt="A team of doctors and nurses walking together through a hospital hallway"
              loading="lazy"
              className="aspect-[16/10] w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function MissionVision() {
  return (
    <section className="py-20 lg:py-28 border-b border-silver">
      <div className="container-page">
        <SectionHeading eyebrow="Our Purpose" title="What we work toward, every day." />

        <div className="mt-12 grid lg:grid-cols-2 gap-x-16 gap-y-10">
          <div className="border-t border-ink pt-5">
            <p className="eyebrow mb-3">Mission</p>
            <p className="font-display text-xl text-ink leading-snug">
              To provide compassionate, accessible healthcare while treating every patient with
              dignity, respect, and care.
            </p>
          </div>
          <div className="border-t border-ink pt-5">
            <p className="eyebrow mb-3">Vision</p>
            <p className="font-display text-xl text-ink leading-snug">
              To become a trusted leader in modern healthcare, improving lives through medical
              excellence and patient-centred care.
            </p>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-silver">
          <p className="eyebrow mb-4">Our Values</p>
          <p className="text-lg text-ink leading-relaxed font-display">
            Compassion — Integrity — Excellence — Respect — Innovation — Patient Safety
          </p>
        </div>
      </div>
    </section>
  );
}
