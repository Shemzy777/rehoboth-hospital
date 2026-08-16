import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { services } from '../../data/services';
import { articles } from '../../data/articles';
import { faqs } from '../../data/misc';
import { EmptyState } from '../ui/Primitives';

export function GlobalSearch({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setQuery('');
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    if (open) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return null;

    return {
      services: services.filter((s) => s.name.toLowerCase().includes(q)).slice(0, 4),
      articles: articles.filter((a) => a.title.toLowerCase().includes(q)).slice(0, 3),
      faqs: faqs.filter((f) => f.question.toLowerCase().includes(q)).slice(0, 3),
    };
  }, [query]);

  const hasAnyResults =
    results &&
    (results.services.length || results.articles.length || results.faqs.length);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4 bg-brand-navy/40 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="Site search">
      <div className="w-full max-w-xl bg-white rounded shadow-2xl overflow-hidden">
        <div className="flex items-center gap-3 border-b border-brand-border px-4 py-3">
          <Search className="w-5 h-5 text-brand-muted shrink-0" aria-hidden="true" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Search services, articles..."
            className="flex-1 outline-none text-sm placeholder:text-brand-muted"
          />
          <button onClick={onClose} aria-label="Close search" className="text-brand-muted hover:text-brand-navy">
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-4">
          {!results && <p className="text-sm text-brand-muted px-2 py-6 text-center">Start typing to search the hospital site.</p>}

          {results && !hasAnyResults && (
            <div className="px-2">
              <EmptyState title="No results found" description="Try a different service or topic." />
            </div>
          )}

          {results && hasAnyResults && (
            <div className="space-y-5">
              {results.services.length > 0 && (
                <ResultGroup label="Services">
                  {results.services.map((s) => (
                    <Link key={s.id} to={`/services/${s.slug}`} onClick={onClose} className="block px-2 py-2 rounded-lg hover:bg-brand-lighter text-sm font-semibold text-brand-navy">
                      {s.name}
                    </Link>
                  ))}
                </ResultGroup>
              )}
              {results.articles.length > 0 && (
                <ResultGroup label="Health Articles">
                  {results.articles.map((a) => (
                    <Link key={a.id} to={`/health-resources/${a.slug}`} onClick={onClose} className="block px-2 py-2 rounded-lg hover:bg-brand-lighter text-sm font-semibold text-brand-navy">
                      {a.title}
                    </Link>
                  ))}
                </ResultGroup>
              )}
              {results.faqs.length > 0 && (
                <ResultGroup label="FAQs">
                  {results.faqs.map((f) => (
                    <Link key={f.id} to="/faq" onClick={onClose} className="block px-2 py-2 rounded-lg hover:bg-brand-lighter text-sm font-semibold text-brand-navy">
                      {f.question}
                    </Link>
                  ))}
                </ResultGroup>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ResultGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="px-2 text-xs font-semibold uppercase tracking-wide text-brand-muted mb-1">{label}</p>
      <div>{children}</div>
    </div>
  );
}
