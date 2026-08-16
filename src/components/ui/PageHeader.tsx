import type { ReactNode } from 'react';

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-silver">
      <div className="container-page py-14 lg:py-20">
        <div className="max-w-3xl">
          {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
          <h1 className="text-[2rem] sm:text-4xl lg:text-[2.75rem] font-semibold text-ink leading-[1.1]">{title}</h1>
          {description && <p className="mt-5 text-muted max-w-xl leading-relaxed">{description}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
