import { useParams, Link } from 'react-router-dom';
import { CalendarCheck, ArrowLeft, ArrowUpRight } from 'lucide-react';
import { usePageMeta } from '../lib/usePageMeta';
import { getServiceBySlug, services } from '../data/services';
import { getServicePhoto, photoUrl, getLocalServiceImage } from '../lib/images';
import { Button } from '../components/ui/Button';
import NotFound from './NotFound';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug ?? '');

  usePageMeta(service ? service.name : 'Service Not Found', service?.shortDescription);

  if (!service) return <NotFound />;

  const localHeroSrc = (() => {
    const local = getLocalServiceImage(service.slug);
    if (local) return { src: local.src, alt: local.alt, isLocal: true as const };
    const photo = getServicePhoto(service.slug);
    return { src: photoUrl(photo, { w: 1920 }), alt: photo.alt, isLocal: false as const };
  })();
  const related = services.filter((s) => s.departmentSlug === service.departmentSlug && s.id !== service.id).slice(0, 3);

  return (
    <>
      {/* Photographic hero — the service's own image as a full-width background */}
      <section className="relative">
        <div className="relative min-h-[420px] flex items-end overflow-hidden">
          <img
            src={localHeroSrc.src}
            alt=""
            aria-hidden="true"
            loading="eager"
            fetchPriority="high"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Gradient overlay tuned for text contrast without hiding the photo */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(0deg, rgba(10,26,43,0.88) 0%, rgba(10,26,43,0.55) 45%, rgba(10,26,43,0.15) 75%, rgba(10,26,43,0.05) 100%)',
            }}
            aria-hidden="true"
          />
          <div className="container-page relative py-10 lg:py-14 text-white">
            <Link to="/services" className="inline-flex items-center gap-1.5 text-sm font-medium text-white/80 hover:text-white mb-6">
              <ArrowLeft className="w-4 h-4" aria-hidden="true" /> All Services
            </Link>
            <p className="eyebrow text-white/70 mb-3">Medical Service</p>
            <h1 className="text-3xl lg:text-5xl font-semibold leading-[1.05] max-w-2xl">{service.name}</h1>
            <p className="mt-4 text-white/85 max-w-xl leading-relaxed">{service.shortDescription}</p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container-page grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="eyebrow mb-4">About This Service</h2>
            <p className="text-muted leading-relaxed">{service.longDescription}</p>
          </div>

          <div>
            <div className="border border-silver p-6 sticky top-24">
              <h3 className="font-display text-lg text-ink">Ready to book?</h3>
              <p className="mt-2 text-sm text-muted">Schedule a visit for this service in a few quick steps.</p>
              <Button to={`/appointments?service=${service.slug}`} className="mt-4 w-full" icon={<CalendarCheck className="w-4 h-4" aria-hidden="true" />}>
                Book Appointment
              </Button>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="container-page mt-16 pt-12 border-t border-silver">
            <h2 className="eyebrow mb-6">Related Services</h2>
            <div className="border-t border-ink">
              {related.map((s) => (
                <Link
                  key={s.id}
                  to={`/services/${s.slug}`}
                  className="group flex items-center justify-between gap-6 py-4 border-b border-silver hover:pl-2 transition-[padding] duration-200"
                >
                  <span className="font-display text-lg text-ink group-hover:text-medical transition-colors">{s.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-muted shrink-0 group-hover:text-medical transition-colors" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
