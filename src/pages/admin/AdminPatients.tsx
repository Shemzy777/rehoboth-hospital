import { usePageMeta } from '../../lib/usePageMeta';
import { adminPatients } from '../../data/adminMock';
import { Badge } from '../../components/ui/Primitives';

export default function AdminPatients() {
  usePageMeta('Admin — Patients');
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <h1 className="text-2xl font-bold text-brand-navy">Patients</h1>
        <button className="rounded-lg bg-brand-primary text-white text-sm font-semibold px-4 py-2.5 hover:bg-brand-deep transition-colors">
          Add Patient
        </button>
      </div>
      <div className="rounded border border-brand-border bg-white overflow-hidden overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-brand-gray text-left text-xs uppercase tracking-wide text-brand-muted">
            <tr>
              <th className="px-5 py-3 font-semibold">Name</th>
              <th className="px-5 py-3 font-semibold">ID</th>
              <th className="px-5 py-3 font-semibold">Gender</th>
              <th className="px-5 py-3 font-semibold">Phone</th>
              <th className="px-5 py-3 font-semibold">Last Visit</th>
              <th className="px-5 py-3 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-border">
            {adminPatients.map((p) => (
              <tr key={p.id} className="hover:bg-brand-lighter/50">
                <td className="px-5 py-3.5 font-medium text-brand-navy whitespace-nowrap">{p.name}</td>
                <td className="px-5 py-3.5 text-brand-muted whitespace-nowrap">{p.id}</td>
                <td className="px-5 py-3.5 text-brand-text whitespace-nowrap">{p.gender}</td>
                <td className="px-5 py-3.5 text-brand-text whitespace-nowrap">{p.phone}</td>
                <td className="px-5 py-3.5 text-brand-muted whitespace-nowrap">{new Date(p.lastVisit).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</td>
                <td className="px-5 py-3.5">
                  <Badge tone={p.status === 'Active' ? 'success' : 'neutral'}>{p.status}</Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
