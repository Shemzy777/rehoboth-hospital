import { useMemo, useState } from 'react';
import { usePageMeta } from '../lib/usePageMeta';
import { PageHeader } from '../components/ui/PageHeader';
import { articles, articleCategories } from '../data/articles';
import { ArticleCard } from '../components/ui/Cards';
import { ImageBlock } from '../components/ui/ImageBlock';
import { EmptyState } from '../components/ui/Primitives';
import { Link } from 'react-router-dom';

export default function HealthResources() {
  usePageMeta('Health Resources', 'Practical, evidence-based health articles from the Rehoboth Hospital clinical team, covering heart health, nutrition, and more.');
  const [category, setCategory] = useState('All');

  const filtered = useMemo(
    () => (category === 'All' ? articles : articles.filter((a) => a.category === category)),
    [category]
  );
  const [featured, ...rest] = filtered;

  return (
    <>
      <PageHeader eyebrow="Health Resources" title="Guidance for a healthier life." description="Practical, evidence-based articles from our clinical team." />
      <section className="py-14 lg:py-20">
        <div className="container-page">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-12 border-b border-silver pb-5">
            {['All', ...articleCategories].map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                aria-pressed={category === c}
                className={`text-sm font-medium transition-colors pb-1 border-b ${
                  category === c ? 'text-ink border-medical' : 'text-muted border-transparent hover:text-ink'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {featured ? (
            <>
              <Link to={`/health-resources/${featured.slug}`} className="group grid lg:grid-cols-12 gap-8 mb-16 items-center">
                <div className="lg:col-span-7">
                  <ImageBlock seed={featured.photoSeed} src={featured.src} className="aspect-[16/9] w-full" />
                </div>
                <div className="lg:col-span-4 lg:col-start-9">
                  <p className="eyebrow mb-3">{featured.category}</p>
                  <h2 className="font-display text-2xl sm:text-3xl text-ink leading-snug group-hover:text-medical transition-colors">{featured.title}</h2>
                  <p className="mt-4 text-base text-muted leading-relaxed">{featured.summary}</p>
                  <p className="mt-5 text-sm text-muted">
                    {featured.author} — {new Date(featured.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </p>
                </div>
              </Link>

              {rest.length > 0 && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14 border-t border-silver pt-14">
                  {rest.map((a) => (
                    <ArticleCard key={a.id} article={a} />
                  ))}
                </div>
              )}
            </>
          ) : (
            <EmptyState title="No articles found" description="Try a different category." />
          )}
        </div>
      </section>
    </>
  );
}
