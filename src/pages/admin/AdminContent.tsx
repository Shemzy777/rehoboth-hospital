import { usePageMeta } from '../../lib/usePageMeta';
import { departments } from '../../data/departments';
import { services } from '../../data/services';
import { articles } from '../../data/articles';

function ManagedList({
  title,
  addLabel,
  columns,
}: {
  title: string;
  addLabel: string;
  columns: { header: string; rows: string[] }[];
}) {
  const rowCount = columns[0]?.rows.length ?? 0;
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <h1 className="text-2xl font-bold text-brand-navy">{title}</h1>
        <button className="rounded-lg bg-brand-primary text-white text-sm font-semibold px-4 py-2.5 hover:bg-brand-deep transition-colors">
          {addLabel}
        </button>
      </div>
      <div className="rounded border border-brand-border bg-white overflow-hidden overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-brand-gray text-left text-xs uppercase tracking-wide text-brand-muted">
            <tr>
              {columns.map((c) => <th key={c.header} className="px-5 py-3 font-semibold">{c.header}</th>)}
              <th className="px-5 py-3 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-border">
            {Array.from({ length: rowCount }).map((_, i) => (
              <tr key={i} className="hover:bg-brand-lighter/50">
                {columns.map((c) => (
                  <td key={c.header} className="px-5 py-3.5 text-brand-text whitespace-nowrap first:font-medium first:text-brand-navy">{c.rows[i]}</td>
                ))}
                <td className="px-5 py-3.5 flex gap-3">
                  <button className="text-brand-primary font-semibold text-xs hover:underline">Edit</button>
                  <button className="text-brand-emergency font-semibold text-xs hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function AdminDepartments() {
  usePageMeta('Admin — Departments');
  return (
    <ManagedList
      title="Departments"
      addLabel="Add Department"
      columns={[
        { header: 'Name', rows: departments.map((d) => d.name) },
        { header: 'Opening Hours', rows: departments.map((d) => d.openingHours) },
        { header: 'Phone', rows: departments.map((d) => d.phone) },
      ]}
    />
  );
}

export function AdminServices() {
  usePageMeta('Admin — Services');
  return (
    <ManagedList
      title="Services"
      addLabel="Add Service"
      columns={[
        { header: 'Name', rows: services.map((s) => s.name) },
        { header: 'Department', rows: services.map((s) => departments.find((d) => d.slug === s.departmentSlug)?.name ?? '—') },
      ]}
    />
  );
}

export function AdminArticles() {
  usePageMeta('Admin — Health Articles');
  return (
    <ManagedList
      title="Health Articles"
      addLabel="Add Article"
      columns={[
        { header: 'Title', rows: articles.map((a) => a.title) },
        { header: 'Category', rows: articles.map((a) => a.category) },
        { header: 'Author', rows: articles.map((a) => a.author) },
        { header: 'Date', rows: articles.map((a) => new Date(a.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })) },
      ]}
    />
  );
}
