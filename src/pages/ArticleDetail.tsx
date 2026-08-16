import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, User, Calendar } from 'lucide-react';
import { usePageMeta } from '../lib/usePageMeta';
import { getArticleBySlug, articles } from '../data/articles';
import { ImageBlock } from '../components/ui/ImageBlock';
import { Badge } from '../components/ui/Primitives';
import { ArticleCard } from '../components/ui/Cards';
import NotFound from './NotFound';

export default function ArticleDetail() {
  const { slug } = useParams();
  const article = getArticleBySlug(slug ?? '');

  usePageMeta(article ? article.title : 'Article Not Found', article?.summary);

  if (!article) return <NotFound />;

  const related = articles.filter((a) => a.category === article.category && a.id !== article.id).slice(0, 3);

  return (
    <>
      <section className="bg-brand-lighter border-b border-brand-border">
        <div className="container-page py-14">
          <Link to="/health-resources" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary mb-6">
            <ArrowLeft className="w-4 h-4" aria-hidden="true" /> All Articles
          </Link>
          <Badge tone="primary">{article.category}</Badge>
          <h1 className="mt-4 text-3xl lg:text-4xl font-extrabold text-brand-navy tracking-tight max-w-3xl">{article.title}</h1>
          <div className="mt-4 flex items-center gap-5 text-sm text-brand-muted">
            <span className="flex items-center gap-1.5"><User className="w-4 h-4" aria-hidden="true" /> {article.author}</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" aria-hidden="true" />
              {new Date(article.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </span>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-16">
        <div className="container-page max-w-3xl">
          <ImageBlock seed={article.photoSeed} src={article.src} className="aspect-video w-full mb-10" />
          <p className="text-lg text-brand-navy font-medium leading-relaxed">{article.summary}</p>
          <p className="mt-6 text-brand-text leading-relaxed whitespace-pre-line">{article.body}</p>
          <p className="mt-10 text-xs text-brand-muted border-t border-brand-border pt-6">
            This article is for general information only and does not replace personalised medical advice. Speak with your doctor about your specific situation.
          </p>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-14 lg:py-16 bg-brand-gray">
          <div className="container-page">
            <h2 className="text-xl font-bold text-brand-navy mb-6">More on {article.category}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((a) => (
                <ArticleCard key={a.id} article={a} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
