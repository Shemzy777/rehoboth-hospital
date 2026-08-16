import { usePageMeta } from '../lib/usePageMeta';
import { PageHeader } from '../components/ui/PageHeader';
import { facilities } from '../data/misc';
import { ImageBlock } from '../components/ui/ImageBlock';

export default function Facilities() {
  usePageMeta('Our Facilities', 'Explore the modern facilities at Rehoboth Hospital, from our Emergency Department to our Intensive Care Unit and diagnostic centre.');
  const [first, second, third, ...rest] = facilities;

  return (
    <>
      <PageHeader eyebrow="Our Facilities" title="Spaces designed around better care." description="Every facility at Rehoboth Hospital is designed around patient comfort, safety, and clinical excellence." />
      <section className="py-14 lg:py-20">
        <div className="container-page space-y-4">
          <ImageBlock seed={first.photoSeed} src={first.src} className="aspect-[21/9] w-full" />
          <p className="text-sm text-ink font-medium max-w-md">{first.name} — <span className="text-muted font-normal">{first.description}</span></p>

          <div className="grid sm:grid-cols-2 gap-4 pt-6">
            {[second, third].map((f) => (
              <div key={f.id}>
                <ImageBlock seed={f.photoSeed} src={f.src} className="aspect-[4/3] w-full" />
                <p className="mt-3 text-sm text-ink font-medium">{f.name}</p>
                <p className="mt-1 text-xs text-muted">{f.description}</p>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-3 gap-4 pt-2">
            {rest.map((f) => (
              <div key={f.id}>
                <ImageBlock seed={f.photoSeed} src={f.src} className="aspect-square w-full" />
                <p className="mt-3 text-sm text-ink font-medium">{f.name}</p>
                <p className="mt-1 text-xs text-muted">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
