import { usePageMeta } from '../../lib/usePageMeta';
import { medicalRecords, labResults, prescriptions } from '../../data/portalMock';
import { Badge } from '../../components/ui/Primitives';

export function PortalMedicalRecords() {
  usePageMeta('Medical Records');
  return (
    <div>
      <h1 className="text-2xl font-bold text-brand-navy mb-6">Medical Records</h1>
      <div className="space-y-4">
        {medicalRecords.map((r) => (
          <div key={r.id} className="rounded border border-brand-border bg-white p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="font-semibold text-brand-navy">{r.visitType}</p>
              <span className="text-xs text-brand-muted">{new Date(r.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            </div>
            <p className="mt-3 text-sm"><span className="text-brand-muted">Diagnosis: </span><span className="text-brand-text">{r.diagnosis}</span></p>
            <p className="mt-1 text-sm"><span className="text-brand-muted">Treatment: </span><span className="text-brand-text">{r.treatment}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PortalLabResults() {
  usePageMeta('Lab Results');
  return (
    <div>
      <h1 className="text-2xl font-bold text-brand-navy mb-6">Lab Results</h1>
      <div className="rounded border border-brand-border bg-white overflow-hidden overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-brand-gray text-left text-xs uppercase tracking-wide text-brand-muted">
            <tr>
              <th className="px-5 py-3 font-semibold">Test</th>
              <th className="px-5 py-3 font-semibold">Date</th>
              <th className="px-5 py-3 font-semibold">Result</th>
              <th className="px-5 py-3 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-border">
            {labResults.map((r) => (
              <tr key={r.id}>
                <td className="px-5 py-3.5 font-medium text-brand-navy whitespace-nowrap">{r.test}</td>
                <td className="px-5 py-3.5 text-brand-muted whitespace-nowrap">{new Date(r.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</td>
                <td className="px-5 py-3.5 text-brand-text whitespace-nowrap">{r.result}</td>
                <td className="px-5 py-3.5">
                  <Badge tone={r.status === 'Normal' ? 'success' : 'primary'}>{r.status}</Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function PortalPrescriptions() {
  usePageMeta('Prescriptions');
  return (
    <div>
      <h1 className="text-2xl font-bold text-brand-navy mb-6">Prescriptions</h1>
      <div className="space-y-4">
        {prescriptions.map((p) => (
          <div key={p.id} className="rounded border border-brand-border bg-white p-5 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-brand-navy">{p.medication}</p>
              <p className="text-sm text-brand-muted">{p.dosage}</p>
              <p className="text-xs text-brand-muted mt-1">Prescribed by {p.doctor} — {new Date(p.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
            </div>
            <Badge tone={p.status === 'Active' ? 'success' : 'neutral'}>{p.status}</Badge>
          </div>
        ))}
      </div>
    </div>
  );
}
