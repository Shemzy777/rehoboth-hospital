import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Search, Phone } from 'lucide-react';
import { Logo } from './Logo';
import { GlobalSearch } from './GlobalSearch';
import { Button } from '../ui/Button';

const navLinks = [
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Resources', to: '/health-resources' },
  { label: 'Contact', to: '/contact' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-warm-white/95 backdrop-blur border-b border-silver">
      <div
        className={`container-page flex items-center justify-between gap-6 transition-[padding] duration-200 ${
          scrolled ? 'py-2.5' : 'py-4'
        }`}
      >
        <Logo />

        <nav className="hidden lg:flex items-center gap-6" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `relative text-[0.8125rem] font-medium tracking-wide transition-colors py-1.5 ${
                  isActive ? 'text-ink' : 'text-muted hover:text-ink'
                } after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-px after:transition-transform after:duration-200 ${
                  isActive ? 'after:bg-medical after:scale-x-100' : 'after:bg-medical after:scale-x-0 hover:after:scale-x-100'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-5 shrink-0">
          <button
            onClick={() => setSearchOpen(true)}
            aria-label="Search the site"
            className="text-muted hover:text-ink transition-colors"
          >
            <Search className="w-4 h-4" aria-hidden="true" />
          </button>
          <a href="tel:09047028189" className="flex items-center gap-1.5 text-[0.8125rem] font-semibold text-brick hover:text-brick-deep transition-colors">
            <Phone className="w-3.5 h-3.5" aria-hidden="true" /> Emergency
          </a>
          <div className="w-px h-5 bg-silver" aria-hidden="true" />
          <Button to="/appointments" variant="primary" size="sm">
            Book Appointment
          </Button>
        </div>

        <div className="flex lg:hidden items-center gap-1">
          <button onClick={() => setSearchOpen(true)} aria-label="Search the site" className="p-2 text-ink">
            <Search className="w-5 h-5" aria-hidden="true" />
          </button>
          <a href="tel:09047028189" aria-label="Call emergency line" className="p-2 text-brick">
            <Phone className="w-5 h-5" aria-hidden="true" />
          </a>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            className="p-2 text-ink"
          >
            {mobileOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-silver bg-warm-white max-h-[80vh] overflow-y-auto">
          <nav className="container-page py-2" aria-label="Mobile primary">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `block py-3 border-b border-silver text-sm font-medium ${isActive ? 'text-medical' : 'text-ink'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="container-page pb-5 pt-3 flex flex-col gap-2.5">
            <Button to="/appointments" variant="primary" onClick={() => setMobileOpen(false)}>
              Book Appointment
            </Button>
            <Link
              to="/emergency"
              onClick={() => setMobileOpen(false)}
              className="w-full text-center rounded bg-brick text-white font-semibold py-3 text-sm"
            >
              Emergency: 09047028189
            </Link>
          </div>
        </div>
      )}

      <GlobalSearch open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
