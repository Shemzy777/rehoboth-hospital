import { Link } from 'react-router-dom';
import { CalendarDays, FileText, FlaskConical, Pill, Receipt, MessageSquare, Clock, MapPin } from 'lucide-react';
import { usePageMeta } from '../../lib/usePageMeta';
import { portalPatient, portalAppointments, recentActivity } from '../../data/portalMock';

const quickActions = [
  { label: 'Book Appointment', to: '/appointments', icon: CalendarDays },
  { label: 'Medical Records', to: '/portal/records', icon: FileText },
  { label: 'Lab Results', to: '/portal/lab-results', icon: FlaskConical },
  { label: 'Prescriptions', to: '/portal/prescriptions', icon: Pill },
  { label: 'Billing', to: '/portal/billing', icon: Receipt },
  { label: 'Messages', to: '/portal/messages', icon: MessageSquare },
];

export default function PortalDashboard() {
  usePageMeta('Patient Dashboard');
  const upcoming = portalAppointments.upcoming[0];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-brand-navy">Good morning, {portalPatient.firstName}</h1>
        <p className="text-sm text-brand-muted mt-1">Here's what's happening with your care.</p>
      </div>

      {upcoming ? (
        <div className="rounded border border-brand-border bg-white p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-primary mb-3">Upcoming Appointment</p>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="font-bold text-brand-navy">{upcoming.doctor}</p>
              <p className="text-sm text-brand-muted">{upcoming.department}</p>
            </div>
            <div className="flex items-center gap-5 text-sm text-brand-text">
              <span className="flex items-center gap-1.5"><CalendarDays className="w-4 h-4 text-brand-primary" aria-hidden="true" /> {new Date(upcoming.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-brand-primary" aria-hidden="true" /> {upcoming.time}</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="rounded border border-dashed border-brand-border bg-white p-6 text-sm text-brand-muted flex items-center gap-2">
          <MapPin className="w-4 h-4" aria-hidden="true" /> No upcoming appointments scheduled.
        </div>
      )}

      <div>
        <p className="text-sm font-semibold text-brand-navy mb-3">Quick Actions</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {quickActions.map((a) => (
            <Link key={a.label} to={a.to} className="flex flex-col items-center gap-2 rounded border border-brand-border bg-white p-5 text-center hover:border-brand-primary/40 hover:shadow-md transition-all">
              <span className="w-10 h-10 rounded bg-brand-light flex items-center justify-center text-brand-primary">
                <a.icon className="w-5 h-5" aria-hidden="true" />
              </span>
              <span className="text-xs font-semibold text-brand-navy">{a.label}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="rounded border border-brand-border bg-white p-6">
        <p className="text-sm font-semibold text-brand-navy mb-4">Recent Activity</p>
        <ul className="space-y-3">
          {recentActivity.map((r) => (
            <li key={r.id} className="flex items-center justify-between gap-4 text-sm">
              <span className="text-brand-text">{r.label}</span>
              <span className="text-xs text-brand-muted shrink-0">{new Date(r.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
