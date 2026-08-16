import { CreditCard } from 'lucide-react';
import { usePageMeta } from '../../lib/usePageMeta';
import { billing } from '../../data/portalMock';
import { Badge } from '../../components/ui/Primitives';
import { Button } from '../../components/ui/Button';

export default function PortalBilling() {
  usePageMeta('Billing');
  return (
    <div>
      <h1 className="text-2xl font-bold text-brand-navy mb-6">Billing</h1>

      <div className="rounded border border-brand-border bg-white p-6 flex flex-wrap items-center justify-between gap-4 mb-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-muted">Outstanding Balance</p>
          <p className="mt-1 text-3xl font-extrabold text-brand-navy">
            {billing.currency}{billing.outstandingBalance.toLocaleString()}
          </p>
        </div>
        <Button icon={<CreditCard className="w-4 h-4" aria-hidden="true" />}>Pay Now</Button>
      </div>

      <p className="text-sm font-semibold text-brand-navy mb-4">Invoice History</p>
      <div className="rounded border border-brand-border bg-white overflow-hidden overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-brand-gray text-left text-xs uppercase tracking-wide text-brand-muted">
            <tr>
              <th className="px-5 py-3 font-semibold">Description</th>
              <th className="px-5 py-3 font-semibold">Date</th>
              <th className="px-5 py-3 font-semibold">Amount</th>
              <th className="px-5 py-3 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-border">
            {billing.invoices.map((inv) => (
              <tr key={inv.id}>
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
