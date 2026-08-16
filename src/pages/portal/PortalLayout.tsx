import { NavLink, Outlet, Link } from 'react-router-dom';
import { LayoutDashboard, CalendarDays, FileText, FlaskConical, Pill, Receipt, MessageSquare, LogOut } from 'lucide-react';
import { portalPatient } from '../../data/portalMock';

const links = [
  { to: '/portal/dashboard', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/portal/appointments', label: 'Appointments', icon: CalendarDays },
  { to: '/portal/records', label: 'Medical Records', icon: FileText },
  { to: '/portal/lab-results', label: 'Lab Results', icon: FlaskConical },
  { to: '/portal/prescriptions', label: 'Prescriptions', icon: Pill },
  { to: '/portal/billing', label: 'Billing', icon: Receipt },
  { to: '/portal/messages', label: 'Messages', icon: MessageSquare },
];

export default function PortalLayout() {
  return (
    <section className="bg-brand-gray min-h-[75vh]">
      <div className="container-page py-10 grid lg:grid-cols-[240px_1fr] gap-8">
        <aside className="lg:sticky lg:top-24 h-fit">
          <div className="rounded border border-brand-border bg-white p-4">
            <div className="flex items-center gap-3 px-2 pb-4 mb-2 border-b border-brand-border">
              <span className="w-9 h-9 rounded-full bg-brand-light flex items-center justify-center text-brand-primary font-bold text-sm">
                {portalPatient.firstName[0]}
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-brand-navy truncate">{portalPatient.fullName}</p>
                <p className="text-xs text-brand-muted truncate">{portalPatient.patientId}</p>
              </div>
            </div>
            <nav className="flex flex-col gap-1" aria-label="Patient portal">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) =>
                    `flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive ? 'bg-brand-primary text-white' : 'text-brand-text hover:bg-brand-lighter'
                    }`
                  }
                >
                  <link.icon className="w-4 h-4" aria-hidden="true" />
                  {link.label}
                </NavLink>
              ))}
              <Link to="/" className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium text-brand-muted hover:bg-brand-lighter mt-2 border-t border-brand-border pt-4">
                <LogOut className="w-4 h-4" aria-hidden="true" /> Log Out
              </Link>
            </nav>
          </div>
        </aside>

        <div>
          <Outlet />
        </div>
      </div>
    </section>
  );
}
