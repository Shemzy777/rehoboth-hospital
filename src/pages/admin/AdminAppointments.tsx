import { useState } from 'react';
import { usePageMeta } from '../../lib/usePageMeta';
import { adminAppointments } from '../../data/adminMock';
import { EmptyState } from '../../components/ui/Primitives';

const tabs = [
  { key: 'pending', label: 'Pending' },
  { key: 'confirmed', label: 'Confirmed' },
  { key: 'completed', label: 'Completed' },
  { key: 'cancelled', label: 'Cancelled' },
] as const;

export default function AdminAppointments() {
  usePageMeta('Admin — Appointments');
  const [tab, setTab] = useState<(typeof tabs)[number]['key']>('pending');
  const list = adminAppointments[tab];

  return (
    <div>
      <h1 className="text-2xl font-bold text-brand-navy mb-6">Appointments</h1>
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
            {t.label} ({adminAppointments[t.key].length})
          </button>
        ))}
      </div>

      {list.length > 0 ? (
        <div className="rounded border border-brand-border bg-white overflow-hidden overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-brand-gray text-left text-xs uppercase tracking-wide text-brand-muted">
              <tr>
                <th className="px-5 py-3 font-semibold">Reference</th>
                <th className="px-5 py-3 font-semibold">Patient</th>
                <th className="px-5 py-3 font-semibold">Doctor</th>
                <th className="px-5 py-3 font-semibold">Date</th>
                <th className="px-5 py-3 font-semibold">Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-border">
              {list.map((a) => (
                <tr key={a.id} className="hover:bg-brand-lighter/50">
                  <td className="px-5 py-3.5 text-brand-muted whitespace-nowrap">{a.id}</td>
                  <td className="px-5 py-3.5 font-medium text-brand-navy whitespace-nowrap">{a.patient}</td>
                  <td className="px-5 py-3.5 text-brand-text whitespace-nowrap">{a.doctor}</td>
                  <td className="px-5 py-3.5 text-brand-muted whitespace-nowrap">{new Date(a.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</td>
                  <td className="px-5 py-3.5 text-brand-muted whitespace-nowrap">{a.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <EmptyState title={`No ${tab} appointments`} />
      )}
    </div>
  );
}
