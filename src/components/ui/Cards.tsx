import { Link } from 'react-router-dom';
import { MapPin, ArrowUpRight, Briefcase } from 'lucide-react';
import type { Doctor, Service, Department, Article, Facility, Job } from '../../types';
import { ImageBlock } from './ImageBlock';
import { Badge } from './Primitives';

export function DoctorCard({ doctor }: { doctor: Doctor }) {
  const availabilityTone =
    doctor.availability === 'Available Today'
      ? 'success'
      : doctor.availability === 'Fully Booked'
        ? 'neutral'
        : 'primary';

  return (
    <Link to={`/doctors/${doctor.slug}`} className="group block">
      <ImageBlock seed={doctor.photoSeed} className="aspect-[3/4] w-full" />
      <div className="mt-4 border-t border-silver pt-3">
        <Badge tone={availabilityTone as 'primary' | 'success' | 'neutral'}>{doctor.availability}</Badge>
        <p className="mt-2 font-display text-lg text-ink group-hover:text-medical transition-colors">{doctor.name}</p>
        <p className="text-sm text-muted mt-0.5">{doctor.specialty}</p>
        <p className="font-mono-label text-[0.6875rem] text-muted mt-2 tracking-wide">{doctor.yearsExperience}+ YEARS EXPERIENCE</p>
      </div>
    </Link>
  );
}

export function ServiceRow({ service, index }: { service: Service; index?: number }) {
  return (
    <Link
      to={`/services/${service.slug}`}
      className="group flex items-center justify-between gap-6 py-5 border-b border-silver hover:bg-paper/50 transition-colors -mx-2 px-2"
    >
      <div className="flex items-baseline gap-5">
        {index !== undefined && <span className="font-mono-label text-xs text-muted w-6 shrink-0">{String(index + 1).padStart(2, '0')}</span>}
        <div>
          <p className="font-display text-lg text-ink group-hover:text-medical transition-colors">{service.name}</p>
          <p className="text-sm text-muted mt-1">{service.shortDescription}</p>
        </div>
      </div>
      <ArrowUpRight className="w-4 h-4 text-muted shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-medical" aria-hidden="true" />
    </Link>
  );
}

export function DepartmentCard({ department, index }: { department: Department; index?: number }) {
  return (
    <Link to={`/departments/${department.slug}`} className="group flex items-center gap-5 py-5 border-b border-silver hover:pl-2 transition-[padding] duration-200">
      {index !== undefined && <span className="font-mono-label text-xs text-muted w-6 shrink-0">{String(index + 1).padStart(2, '0')}</span>}
      <span className="flex-1">
        <span className="block font-display text-lg sm:text-xl text-ink group-hover:text-medical transition-colors">{department.name}</span>
        <span className="block text-sm text-muted mt-1 line-clamp-1">{department.description}</span>
      </span>
      <ArrowUpRight className="w-4 h-4 text-muted shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-medical" aria-hidden="true" />
    </Link>
  );
}

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link to={`/health-resources/${article.slug}`} className="group block">
      <ImageBlock seed={article.photoSeed} src={article.src} className="aspect-[4/3] w-full" />
      <div className="mt-5">
        <p className="eyebrow mb-3">{article.category}</p>
        <p className="font-display text-xl sm:text-[1.375rem] text-ink leading-snug group-hover:text-medical transition-colors">{article.title}</p>
        <p className="mt-3 text-sm text-muted">
          {article.author} — {new Date(article.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
        </p>
      </div>
    </Link>
  );
}

export function ArticleRow({ article }: { article: Article }) {
  return (
    <Link to={`/health-resources/${article.slug}`} className="group flex items-center justify-between gap-6 py-5 border-b border-silver">
      <div>
        <p className="eyebrow mb-1.5">{article.category}</p>
        <p className="font-medium text-ink text-sm leading-snug group-hover:text-medical transition-colors">{article.title}</p>
      </div>
      <ArrowUpRight className="w-4 h-4 text-muted shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-medical" aria-hidden="true" />
    </Link>
  );
}

export function FacilityCard({ facility, ratio = 'aspect-[4/3]' }: { facility: Facility; ratio?: string }) {
  return (
    <div>
      <ImageBlock seed={facility.photoSeed} src={facility.src} className={`${ratio} w-full`} />
      <p className="mt-3 text-sm text-ink font-medium">{facility.name}</p>
      <p className="mt-1 text-xs text-muted leading-relaxed">{facility.description}</p>
    </div>
  );
}

export function JobCard({ job }: { job: Job }) {
  return (
    <div className="border-t border-ink pt-5 flex flex-col h-full">
      <div className="flex items-start justify-between gap-3">
        <Briefcase className="w-4 h-4 text-medical" aria-hidden="true" />
        <Badge tone="neutral">{job.type}</Badge>
      </div>
      <h3 className="mt-4 font-display text-lg text-ink">{job.title}</h3>
      <p className="mt-1 text-sm text-medical font-medium">{job.department}</p>
      <p className="mt-2 text-sm text-muted flex items-center gap-1.5">
        <MapPin className="w-3.5 h-3.5" aria-hidden="true" /> {job.location}
      </p>
      <p className="mt-3 text-sm text-muted flex-1 leading-relaxed">{job.description}</p>
      <div className="mt-5 pt-4 border-t border-silver flex items-center gap-5">
        <button className="text-sm font-semibold text-ink hover:text-medical transition-colors">View Position</button>
        <button className="ml-auto text-sm font-semibold text-medical hover:text-medical-deep transition-colors">Apply Now</button>
      </div>
    </div>
  );
}
