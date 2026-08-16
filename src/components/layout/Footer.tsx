import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-page pt-16 pb-10">
        <div className="grid lg:grid-cols-[1.3fr_1fr_1fr] gap-12 lg:gap-8 pb-14">
          <div>
            <Logo light />
            <p className="mt-6 text-sm text-white/60 max-w-xs leading-relaxed">
              Trusted, compassionate healthcare for individuals and families in Lagos, Nigeria —
              combining experienced medical professionals with modern medical technology.
            </p>
          </div>

          <FooterColumn
            title="Quick Links"
            links={[
              { label: 'About', to: '/about' },
              { label: 'Services', to: '/services' },
              { label: 'Contact', to: '/contact' },
            ]}
          />
          <FooterColumn
            title="Resources"
            links={[
              { label: 'Health Articles', to: '/health-resources' },
            ]}
          />
        </div>

        <div className="rule bg-white/10 mb-8" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-sm text-white/70">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            <span className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 shrink-0" aria-hidden="true" /> 221 Camp Davies Rd, Ishefun, Ayobo, Lagos</span>
            <span className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 shrink-0" aria-hidden="true" /> 09047028189</span>
            <span className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 shrink-0" aria-hidden="true" /> info@rehoboth-hospital.com</span>
          </div>
          <span className="flex items-center gap-2 text-brick font-semibold font-mono-label text-xs tracking-wide">
            EMERGENCY — 24/7 — 09047028189
          </span>
        </div>

        <div className="rule bg-white/10 my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>&copy; 2026 Rehoboth Hospital. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link to="/privacy-policy" className="hover:text-white/70">Privacy Policy</Link>
            <Link to="/terms-of-use" className="hover:text-white/70">Terms of Use</Link>
            <Link to="/accessibility" className="hover:text-white/70">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; to: string }[] }) {
  return (
    <div>
      <p className="eyebrow text-white/50 mb-4">{title}</p>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link to={link.to} className="text-sm text-white/70 hover:text-white transition-colors">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
