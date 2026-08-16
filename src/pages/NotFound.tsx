import { Link } from 'react-router-dom';
import { Home, Stethoscope } from 'lucide-react';
import { usePageMeta } from '../lib/usePageMeta';
import { Button } from '../components/ui/Button';

export default function NotFound() {
  usePageMeta('Page Not Found');

  return (
    <section className="py-24 lg:py-32">
      <div className="container-page text-center max-w-lg mx-auto">
        <span className="w-16 h-16 rounded bg-brand-light flex items-center justify-center mx-auto text-brand-primary">
          <Stethoscope className="w-8 h-8" aria-hidden="true" />
        </span>
        <h1 className="mt-6 text-3xl font-extrabold text-brand-navy">Page Not Found</h1>
        <p className="mt-3 text-brand-muted">
          The page you're looking for doesn't exist or may have moved. Let's get you back on track.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button to="/" icon={<Home className="w-4 h-4" aria-hidden="true" />}>Back to Home</Button>
          <Link to="/contact" className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-brand-primary hover:underline">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
