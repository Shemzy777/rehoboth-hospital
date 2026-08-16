import { NavLink, Outlet, Link } from 'react-router-dom';
import {
  LayoutDashboard, Users, Stethoscope, CalendarDays, Building2,
  ClipboardList, Newspaper, Receipt, Bell, LogOut,
} from 'lucide-react';
import { Logo } from '../../components/layout/Logo';

const links = [
  { to: '/admin', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/admin/patients', label: 'Patients', icon: Users },
  { to: '/admin/doctors', label: 'Doctors', icon: Stethoscope },
  { to: '/admin/appointments', label: 'Appointments', icon: CalendarDays },
  { to: '/admin/departments', label: 'Departments', icon: Building2 },
  { to: '/admin/services', label: 'Services', icon: ClipboardList },
  { to: '/admin/articles', label: 'Health Articles', icon: Newspaper },
  { to: '/admin/billing', label: 'Billing', icon: Receipt },
  { to: '/admin/notifications', label: 'Notifications', icon: Bell },
];

export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-brand-gray grid lg:grid-cols-[250px_1fr]">
      <aside className="bg-brand-navy text-white lg:min-h-screen">
        <div className="p-5 border-b border-white/10">
          <Logo light />
          <p className="mt-1 text-[11px] text-white/50 tracking-wide">ADMIN DASHBOARD</p>
        </div>
        <nav className="p-3 flex flex-col gap-1" aria-label="Admin">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive ? 'bg-white/15 text-white' : 'text-white/70 hover:bg-white/10 hover:text-white'
                }`
              }
            >
              <link.icon className="w-4 h-4" aria-hidden="true" />
              {link.label}
            </NavLink>
          ))}
          <Link to="/" className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium text-white/50 hover:bg-white/10 hover:text-white mt-2 border-t border-white/10 pt-4">
            <LogOut className="w-4 h-4" aria-hidden="true" /> Exit Admin
          </Link>
        </nav>
      </aside>

      <main className="p-6 lg:p-10">
        <Outlet />
      </main>
    </div>
  );
}
