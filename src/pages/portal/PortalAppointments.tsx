import { useState } from 'react';
import { CalendarDays, Clock } from 'lucide-react';
import { usePageMeta } from '../../lib/usePageMeta';
import { portalAppointments } from '../../data/portalMock';
import { Badge } from '../../components/ui/Primitives';
import { EmptyState } from '../../components/ui/Primitives';

const tabs = [
  { key: 'upcoming', label: 'Upcoming' },
  { key: 'past', label: 'Past' },
  { key: 'cancelled', label: 'Cancelled' },
] as const;

export default function PortalAppointments() {
  usePageMeta('My Appointments');
  const [tab, setTab] = useState<(typeof tabs)[number]['key']>('upcoming');
  const list = portalAppointments[tab];

  return (
    <div>
      <h1 className="text-2xl font-bold text-brand-navy mb-6">My Appointments</h1>
      <div className="flex gap-2 mb-6">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            aria-pressed={tab === t.key}
            className={`px-4 py-2 rounded text-sm font-medium border transition-colors ${
              tab === t.key ? 'bg-brand-primary text-white border-brand-primary' : 'border-brand-border text-brand-text hover:border-brand-primary/40 bg-white'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {list.length > 0 ? (
        <div className="space-y-4">
          {list.map((a) => (
            <div key={a.id} className="rounded border border-brand-border bg-white p-5 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-brand-navy">{a.doctor}</p>
                <p className="text-sm text-brand-muted">{a.department}</p>
              </div>
              <div className="flex items-center gap-5 text-sm text-brand-text">
                <span className="flex items-center gap-1.5"><CalendarDays className="w-4 h-4 text-brand-primary" aria-hidden="true" /> {new Date(a.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-brand-primary" aria-hidden="true" /> {a.time}</span>
              </div>
              <Badge tone={a.status === 'Confirmed' ? 'success' : a.status === 'Cancelled' ? 'emergency' : 'neutral'}>{a.status}</Badge>
            </div>
          ))}
        </div>
      ) : (
        <EmptyState title={`No ${tab} appointments`} description="You'll see them here once scheduled." />
      )}
    </div>
  );
}
