import { usePageMeta } from '../../lib/usePageMeta';
import { doctors } from '../../data/doctors';
import { Badge } from '../../components/ui/Primitives';

export default function AdminDoctors() {
  usePageMeta('Admin — Doctors');
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <h1 className="text-2xl font-bold text-brand-navy">Doctors</h1>
        <button className="rounded-lg bg-brand-primary text-white text-sm font-semibold px-4 py-2.5 hover:bg-brand-deep transition-colors">
          Add Doctor
        </button>
      </div>
      <div className="rounded border border-brand-border bg-white overflow-hidden overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-brand-gray text-left text-xs uppercase tracking-wide text-brand-muted">
            <tr>
              <th className="px-5 py-3 font-semibold">Name</th>
              <th className="px-5 py-3 font-semibold">Specialty</th>
              <th className="px-5 py-3 font-semibold">Experience</th>
              <th className="px-5 py-3 font-semibold">Availability</th>
              <th className="px-5 py-3 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-border">
            {doctors.map((d) => (
              <tr key={d.id} className="hover:bg-brand-lighter/50">
                <td className="px-5 py-3.5 font-medium text-brand-navy whitespace-nowrap">{d.name}</td>
                <td className="px-5 py-3.5 text-brand-text whitespace-nowrap">{d.specialty}</td>
                <td className="px-5 py-3.5 text-brand-muted whitespace-nowrap">{d.yearsExperience}+ years</td>
                <td className="px-5 py-3.5">
                  <Badge tone={d.availability === 'Available Today' ? 'success' : d.availability === 'Fully Booked' ? 'neutral' : 'primary'}>{d.availability}</Badge>
                </td>
                <td className="px-5 py-3.5">
                  <button className="text-brand-primary font-semibold text-xs hover:underline">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
