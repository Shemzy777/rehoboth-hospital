import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn, LayoutDashboard } from 'lucide-react';
import { usePageMeta } from '../../lib/usePageMeta';
import { Button } from '../../components/ui/Button';

export default function PortalLogin() {
  usePageMeta('Patient Portal Login', 'Sign in to the Rehoboth Hospital Patient Portal to view appointments, records, lab results, and billing.');
  const navigate = useNavigate();

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!id.trim() || !password.trim()) {
      setError('Please enter your email/patient ID and password.');
      return;
    }
    // Demo only — no real authentication backend is connected.
    navigate('/portal/dashboard');
  }

  return (
    <section className="py-16 lg:py-24 bg-brand-gray min-h-[70vh] flex items-center">
      <div className="container-page max-w-md mx-auto w-full">
        <div className="text-center mb-8">
          <span className="w-14 h-14 rounded bg-brand-light flex items-center justify-center mx-auto text-brand-primary">
            <LayoutDashboard className="w-7 h-7" aria-hidden="true" />
          </span>
          <h1 className="mt-4 text-2xl font-extrabold text-brand-navy">Patient Portal</h1>
          <p className="mt-2 text-sm text-brand-muted">Sign in to access your appointments, records, and billing.</p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="rounded border border-brand-border bg-white p-6 sm:p-8">
          {error && <p className="mb-4 text-sm text-brand-emergency" role="alert">{error}</p>}
          <label className="flex flex-col gap-1.5 text-xs font-semibold text-brand-muted mb-4">
            Email / Patient ID
            <input
              value={id}
              onChange={(e) => setId(e.target.value)}
              type="text"
              className="rounded-lg border border-brand-border px-3 py-2.5 text-sm outline-none focus:border-brand-primary"
              autoComplete="username"
            />
          </label>
          <label className="flex flex-col gap-1.5 text-xs font-semibold text-brand-muted mb-2">
            Password
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="rounded-lg border border-brand-border px-3 py-2.5 text-sm outline-none focus:border-brand-primary"
              autoComplete="current-password"
            />
          </label>
          <div className="flex justify-end mb-6">
            <button type="button" className="text-xs font-semibold text-brand-primary hover:underline">Forgot Password?</button>
          </div>
          <Button type="submit" className="w-full" icon={<LogIn className="w-4 h-4" aria-hidden="true" />}>Login</Button>
          <p className="mt-5 text-center text-sm text-brand-muted">
            Don't have an account?{' '}
            <button type="button" className="font-semibold text-brand-primary hover:underline">Create account</button>
          </p>
        </form>
        <p className="mt-4 text-center text-xs text-brand-muted">
          This is a demonstration portal — no real patient data is stored or transmitted.
        </p>
      </div>
    </section>
  );
}
