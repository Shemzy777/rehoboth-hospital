import { usePageMeta } from '../../lib/usePageMeta';
import { billing } from '../../data/portalMock';
import { adminNotifications } from '../../data/adminMock';
import { Badge } from '../../components/ui/Primitives';

export function AdminBilling() {
  usePageMeta('Admin — Billing');
  return (
    <div>
      <h1 className="text-2xl font-bold text-brand-navy mb-6">Billing</h1>
      <div className="rounded border border-brand-border bg-white overflow-hidden overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-brand-gray text-left text-xs uppercase tracking-wide text-brand-muted">
            <tr>
              <th className="px-5 py-3 font-semibold">Invoice</th>
              <th className="px-5 py-3 font-semibold">Description</th>
              <th className="px-5 py-3 font-semibold">Date</th>
              <th className="px-5 py-3 font-semibold">Amount</th>
              <th className="px-5 py-3 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-border">
            {billing.invoices.map((inv) => (
              <tr key={inv.id} className="hover:bg-brand-lighter/50">
                <td className="px-5 py-3.5 text-brand-muted whitespace-nowrap">{inv.id.toUpperCase()}</td>
                <td className="px-5 py-3.5 font-medium text-brand-navy whitespace-nowrap">{inv.description}</td>
                <td className="px-5 py-3.5 text-brand-muted whitespace-nowrap">{new Date(inv.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</td>
                <td className="px-5 py-3.5 text-brand-text whitespace-nowrap">{billing.currency}{inv.amount.toLocaleString()}</td>
                <td className="px-5 py-3.5">
                  <Badge tone={inv.status === 'Paid' ? 'success' : 'emergency'}>{inv.status}</Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function AdminNotifications() {
  usePageMeta('Admin — Notifications');
  return (
    <div>
      <h1 className="text-2xl font-bold text-brand-navy mb-6">Notifications</h1>
      <div className="rounded border border-brand-border bg-white divide-y divide-brand-border">
        {adminNotifications.map((n) => (
          <div key={n.id} className="flex items-center justify-between gap-4 px-5 py-4">
            <div className="flex items-center gap-3">
              {!n.read && <span className="w-2 h-2 rounded-full bg-brand-primary shrink-0" aria-label="Unread" />}
              <p className={`text-sm ${n.read ? 'text-brand-text' : 'font-semibold text-brand-navy'}`}>{n.message}</p>
            </div>
            <span className="text-xs text-brand-muted shrink-0">{new Date(n.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
