import { Users, CalendarDays, Stethoscope, Building2, TrendingUp } from 'lucide-react';
import { usePageMeta } from '../../lib/usePageMeta';
import { adminStats, adminNotifications, adminAppointments } from '../../data/adminMock';
import { Badge } from '../../components/ui/Primitives';

const statCards = [
  { label: 'Total Patients', value: adminStats.totalPatients.toLocaleString(), icon: Users },
  { label: 'Appointments This Month', value: adminStats.appointments.toLocaleString(), icon: CalendarDays },
  { label: 'Doctors', value: adminStats.doctors.toLocaleString(), icon: Stethoscope },
  { label: 'Departments', value: adminStats.departments.toLocaleString(), icon: Building2 },
  { label: 'Revenue (This Month)', value: `₦${(adminStats.revenue / 1_000_000).toFixed(1)}M`, icon: TrendingUp },
];

export default function AdminDashboard() {
  usePageMeta('Admin Dashboard');
  const pendingAndConfirmed = [...adminAppointments.pending, ...adminAppointments.confirmed].slice(0, 5);

  return (
    <div>
      <h1 className="text-2xl font-bold text-brand-navy mb-1">Dashboard Overview</h1>
      <p className="text-sm text-brand-muted mb-8">Hospital-wide statistics and recent activity.</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
        {statCards.map((s) => (
          <div key={s.label} className="rounded border border-brand-border bg-white p-5">
            <span className="w-10 h-10 rounded bg-brand-light flex items-center justify-center text-brand-primary">
              <s.icon className="w-5 h-5" aria-hidden="true" />
            </span>
            <p className="mt-3 text-2xl font-extrabold text-brand-navy">{s.value}</p>
            <p className="text-xs text-brand-muted mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="rounded border border-brand-border bg-white p-6">
          <p className="font-semibold text-brand-navy mb-4">Upcoming Appointments</p>
          <div className="space-y-3">
            {pendingAndConfirmed.map((a) => (
              <div key={a.id} className="flex items-center justify-between text-sm border-b border-brand-border last:border-0 pb-3 last:pb-0">
                <div>
                  <p className="font-medium text-brand-navy">{a.patient}</p>
                  <p className="text-xs text-brand-muted">{a.doctor} — {new Date(a.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}, {a.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded border border-brand-border bg-white p-6">
          <p className="font-semibold text-brand-navy mb-4">Recent Notifications</p>
          <div className="space-y-3">
            {adminNotifications.slice(0, 4).map((n) => (
              <div key={n.id} className="flex items-center justify-between gap-3 text-sm border-b border-brand-border last:border-0 pb-3 last:pb-0">
                <p className="text-brand-text">{n.message}</p>
                {!n.read && <Badge tone="primary">New</Badge>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
