import type { ReactNode } from 'react';
import { Loader2, SearchX, AlertTriangle } from 'lucide-react';

export function Badge({
  children,
  tone = 'primary',
}: {
  children: ReactNode;
  tone?: 'primary' | 'success' | 'emergency' | 'neutral';
}) {
  const dotTones: Record<string, string> = {
    primary: 'bg-medical',
    success: 'bg-success',
    emergency: 'bg-brick',
    neutral: 'bg-muted',
  };
  return (
    <span className="inline-flex items-center gap-1.5 text-[0.6875rem] font-mono-label tracking-wide uppercase text-muted">
      <span className={`w-1.5 h-1.5 rounded-full ${dotTones[tone]}`} aria-hidden="true" />
      {children}
    </span>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="eyebrow mb-3">
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="text-[1.75rem] sm:text-3xl md:text-[2.25rem] font-semibold text-ink leading-[1.15]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-muted text-base leading-relaxed">{description}</p>
      )}
    </div>
  );
}

export function LoadingState({ label = 'Loading...' }: { label?: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-16 text-muted">
      <Loader2 className="w-5 h-5 animate-spin text-medical" aria-hidden="true" />
      <p className="text-sm">{label}</p>
    </div>
  );
}

export function EmptyState({
  title = 'Nothing found',
  description = 'Try changing your search or filters.',
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-16 text-center border border-dashed border-silver-cool rounded">
      <SearchX className="w-6 h-6 text-muted" aria-hidden="true" />
      <p className="font-semibold text-ink">{title}</p>
      <p className="text-sm text-muted max-w-sm">{description}</p>
    </div>
  );
}

export function ErrorState({
  title = 'Something went wrong',
  description = "We couldn't complete this request. Please try again.",
  onRetry,
}: {
  title?: string;
  description?: string;
  onRetry?: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-16 text-center border border-brick/20 bg-brick/5 rounded">
      <AlertTriangle className="w-6 h-6 text-brick" aria-hidden="true" />
      <p className="font-semibold text-ink">{title}</p>
      <p className="text-sm text-muted max-w-sm">{description}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-2 text-sm font-semibold text-medical hover:underline"
        >
          Try again
        </button>
      )}
    </div>
  );
}
