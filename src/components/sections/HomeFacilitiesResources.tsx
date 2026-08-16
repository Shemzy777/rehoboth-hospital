import { Link } from 'react-router-dom';
import { facilities } from '../../data/misc';
import { articles } from '../../data/articles';
import { SectionHeading } from '../ui/Primitives';
import { TextLink } from '../ui/Button';
import { ImageBlock } from '../ui/ImageBlock';

export function FacilitiesPreview() {
  const [large, ...small] = facilities.slice(0, 5);
  return (
    <section className="py-20 lg:py-28 border-b border-silver">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <SectionHeading eyebrow="Our Facilities" title="Spaces designed around better care." />
          <TextLink to="/facilities">View All Facilities</TextLink>
        </div>

        <div className="grid lg:grid-cols-12 gap-4">
          <div className="lg:col-span-8">
            <ImageBlock seed={large.photoSeed} src={large.src} className="aspect-[16/10] w-full" rounded="rounded-none" />
            <p className="mt-3 text-sm text-muted">{large.name} — {large.description}</p>
          </div>
          <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-4">
            {small.slice(0, 2).map((f) => (
              <div key={f.id}>
                <ImageBlock seed={f.photoSeed} src={f.src} className="aspect-square w-full" rounded="rounded-none" />
                <p className="mt-2 text-xs text-muted">{f.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function HealthResourcesPreview() {
  const [featured, ...rest] = articles.slice(0, 4);
  return (
    <section className="py-20 lg:py-28 border-b border-silver">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <SectionHeading eyebrow="Health & Wellness" title="Guidance for a healthier life." />
          <TextLink to="/health-resources">View All Articles</TextLink>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          <Link to={`/health-resources/${featured.slug}`} className="group lg:col-span-7">
            <ImageBlock seed={featured.photoSeed} src={featured.src} className="aspect-[16/9] w-full" rounded="rounded-none" />
            <p className="eyebrow mt-5 mb-2">{featured.category}</p>
            <h3 className="font-display text-2xl text-ink group-hover:text-medical transition-colors leading-snug">{featured.title}</h3>
            <p className="mt-2 text-sm text-muted">
              {featured.author} — {new Date(featured.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
          </Link>

          <div className="lg:col-span-4 lg:col-start-9 border-t border-silver">
            {rest.map((a) => (
              <Link key={a.id} to={`/health-resources/${a.slug}`} className="group block py-5 border-b border-silver">
                <p className="eyebrow mb-1.5">{a.category}</p>
                <p className="font-medium text-ink text-sm leading-snug group-hover:text-medical transition-colors">{a.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
