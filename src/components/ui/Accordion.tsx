import { useState, type ReactNode } from 'react';
import { Plus } from 'lucide-react';

export function Accordion({ items }: { items: { id: string; question: string; answer: ReactNode }[] }) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="border-t border-ink">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className="border-b border-silver">
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`accordion-panel-${item.id}`}
                id={`accordion-trigger-${item.id}`}
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="w-full flex items-center justify-between gap-4 text-left py-5 group"
              >
                <span className="font-display text-lg text-ink group-hover:text-medical transition-colors">{item.question}</span>
                <Plus
                  className={`w-4 h-4 shrink-0 text-muted transition-transform duration-200 ${isOpen ? 'rotate-45 text-medical' : ''}`}
                  aria-hidden="true"
                />
              </button>
            </h3>
            {isOpen && (
              <div
                id={`accordion-panel-${item.id}`}
                role="region"
                aria-labelledby={`accordion-trigger-${item.id}`}
                className="pb-5 text-muted text-sm leading-relaxed max-w-xl"
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
