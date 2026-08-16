import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

type Variant = 'primary' | 'secondary' | 'outline' | 'emergency';
type Size = 'md' | 'lg' | 'sm';

const variantStyles: Record<Variant, string> = {
  primary: 'bg-medical text-white hover:bg-medical-deep',
  secondary: 'bg-transparent text-ink border border-ink hover:bg-ink hover:text-warm-white',
  outline: 'bg-transparent text-ink border border-silver-cool hover:border-medical hover:text-medical',
  emergency: 'bg-brick text-white hover:bg-brick-deep',
};

const sizeStyles: Record<Size, string> = {
  sm: 'text-sm px-3.5 py-2',
  md: 'text-sm px-5 py-2.5',
  lg: 'text-[0.9375rem] px-6 py-3',
};

const base =
  'inline-flex items-center justify-center gap-2 rounded font-semibold transition-all duration-150 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap';

interface CommonProps {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  icon,
  to,
  href,
  ...rest
}: CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { to?: string; href?: string }) {
  const cls = `${base} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={cls}>
        {children}
        {icon}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
        {icon}
      </a>
    );
  }
  return (
    <button className={cls} {...rest}>
      {children}
      {icon}
    </button>
  );
}

/**
 * Editorial text link -- "Explore Our Services (arrow)" -- used in place of a
 * secondary button wherever the action is exploratory rather than primary.
 */
export function TextLink({
  to,
  href,
  children,
  className = '',
  onClick,
}: {
  to?: string;
  href?: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const cls = `group inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-medical transition-colors ${className}`;
  const content = (
    <>
      <span className="border-b border-current pb-0.5">{children}</span>
      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
    </>
  );
  if (to) {
    return (
      <Link to={to} className={cls} onClick={onClick}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={cls} onClick={onClick}>
        {content}
      </a>
    );
  }
  return (
    <button type="button" className={cls} onClick={onClick}>
      {content}
    </button>
  );
}
