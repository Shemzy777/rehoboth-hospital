import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Check, CalendarCheck, ChevronLeft, ChevronRight, Home as HomeIcon, CalendarPlus } from 'lucide-react';
import { usePageMeta } from '../lib/usePageMeta';
import { PageHeader } from '../components/ui/PageHeader';
import { departments, getDepartmentBySlug } from '../data/departments';
import { doctors, getDoctorBySlug, getDoctorsByDepartment } from '../data/doctors';
import { Button } from '../components/ui/Button';
import type { AppointmentDraft } from '../types';

const steps = ['Department', 'Doctor', 'Date', 'Time', 'Your Details', 'Review', 'Confirmation'];
const timeSlots = ['9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:30 AM', '1:00 PM', '2:00 PM', '2:30 PM', '3:30 PM', '4:00 PM'];

function nextDates(count: number) {
  const out: { iso: string; label: string }[] = [];
  const today = new Date();
  for (let i = 1; out.length < count; i++) {
    const d = new Date(today);
    d.setDate(d.getDate() + i);
    if (d.getDay() === 0) continue; // skip Sundays for routine appointments
    out.push({
      iso: d.toISOString().slice(0, 10),
      label: d.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' }),
    });
  }
  return out;
}

export default function Appointments() {
  usePageMeta('Book an Appointment', 'Book an appointment at Rehoboth Hospital in a few quick steps — choose a department, doctor, date, and time.');
  const [params] = useSearchParams();

  const [step, setStep] = useState(0);
  const [draft, setDraft] = useState<AppointmentDraft>({
    departmentSlug: params.get('department') ?? getDoctorBySlug(params.get('doctor') ?? '')?.departmentSlug,
    doctorSlug: params.get('doctor') ?? undefined,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [reference] = useState(() => `SA-${Math.floor(100000 + Math.random() * 900000)}`);

  const availableDoctors = useMemo(
    () => (draft.departmentSlug ? getDoctorsByDepartment(draft.departmentSlug) : doctors),
    [draft.departmentSlug]
  );
  const dates = useMemo(() => nextDates(8), []);

  function update(patch: Partial<AppointmentDraft>) {
    setDraft((d) => ({ ...d, ...patch }));
  }

  function validateDetails() {
    const e: Record<string, string> = {};
    if (!draft.fullName?.trim()) e.fullName = 'Full name is required.';
    if (!draft.email?.trim() || !/^\S+@\S+\.\S+$/.test(draft.email)) e.email = 'Enter a valid email address.';
    if (!draft.phone?.trim() || draft.phone.replace(/\D/g, '').length < 7) e.phone = 'Enter a valid phone number.';
    if (!draft.dob?.trim()) e.dob = 'Date of birth is required.';
    if (!draft.gender) e.gender = 'Please select a gender.';
    if (!draft.reason?.trim()) e.reason = 'Please tell us the reason for your visit.';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function goNext() {
    if (step === 4 && !validateDetails()) return;
    setStep((s) => Math.min(s + 1, steps.length - 1));
  }
  function goBack() {
    setStep((s) => Math.max(s - 1, 0));
  }

  const canProceed =
    (step === 0 && !!draft.departmentSlug) ||
    (step === 1 && !!draft.doctorSlug) ||
    (step === 2 && !!draft.date) ||
    (step === 3 && !!draft.time) ||
    step === 4 ||
    step === 5;

  const department = draft.departmentSlug ? getDepartmentBySlug(draft.departmentSlug) : undefined;
  const doctor = draft.doctorSlug ? getDoctorBySlug(draft.doctorSlug) : undefined;

  return (
    <>
      <PageHeader eyebrow="Appointments" title="Book an Appointment" description="Follow the steps below — it takes less than five minutes." />

      <section className="py-12 lg:py-16">
        <div className="container-page max-w-3xl">
          {step < 6 && (
            <ol className="flex items-center gap-1.5 mb-10 overflow-x-auto" aria-label="Booking progress">
              {steps.slice(0, 6).map((label, i) => (
                <li key={label} className="flex items-center gap-2 shrink-0">
                  <span className={`font-mono-label text-xs ${i <= step ? 'text-medical' : 'text-muted'}`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className={`text-xs font-medium hidden sm:inline ${i === step ? 'text-ink' : 'text-muted'}`}>{label}</span>
                  {i < 5 && <span className={`w-6 h-px ${i < step ? 'bg-medical' : 'bg-silver-cool'}`} aria-hidden="true" />}
                </li>
              ))}
            </ol>
          )}

          <div className="rounded border border-brand-border p-6 lg:p-8">
            {step === 0 && (
              <StepBlock title="Choose Department">
                <div className="grid sm:grid-cols-2 gap-3">
                  {departments.map((d) => (
                    <OptionCard
                      key={d.slug}
                      selected={draft.departmentSlug === d.slug}
                      onClick={() => update({ departmentSlug: d.slug, doctorSlug: undefined })}
                      title={d.name}
                      subtitle={d.openingHours}
                    />
                  ))}
                </div>
              </StepBlock>
            )}

            {step === 1 && (
              <StepBlock title="Choose Doctor">
                <div className="grid sm:grid-cols-2 gap-3">
                  {availableDoctors.map((d) => (
                    <OptionCard
                      key={d.slug}
                      selected={draft.doctorSlug === d.slug}
                      onClick={() => update({ doctorSlug: d.slug })}
                      title={d.name}
                      subtitle={d.specialty}
                    />
                  ))}
                </div>
              </StepBlock>
            )}

            {step === 2 && (
              <StepBlock title="Choose Date">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {dates.map((d) => (
                    <OptionCard key={d.iso} selected={draft.date === d.iso} onClick={() => update({ date: d.iso })} title={d.label} centered />
                  ))}
                </div>
              </StepBlock>
            )}

            {step === 3 && (
              <StepBlock title="Choose Available Time">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {timeSlots.map((t) => (
                    <OptionCard key={t} selected={draft.time === t} onClick={() => update({ time: t })} title={t} centered />
                  ))}
                </div>
              </StepBlock>
            )}

            {step === 4 && (
              <StepBlock title="Enter Patient Details">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Full Name" error={errors.fullName}>
                    <input className={inputCls(!!errors.fullName)} value={draft.fullName ?? ''} onChange={(e) => update({ fullName: e.target.value })} />
                  </Field>
                  <Field label="Email" error={errors.email}>
                    <input type="email" className={inputCls(!!errors.email)} value={draft.email ?? ''} onChange={(e) => update({ email: e.target.value })} />
                  </Field>
                  <Field label="Phone Number" error={errors.phone}>
                    <input type="tel" className={inputCls(!!errors.phone)} value={draft.phone ?? ''} onChange={(e) => update({ phone: e.target.value })} />
                  </Field>
                  <Field label="Date of Birth" error={errors.dob}>
                    <input type="date" className={inputCls(!!errors.dob)} value={draft.dob ?? ''} onChange={(e) => update({ dob: e.target.value })} />
                  </Field>
                  <Field label="Gender" error={errors.gender}>
                    <select className={inputCls(!!errors.gender)} value={draft.gender ?? ''} onChange={(e) => update({ gender: e.target.value })}>
                      <option value="">Select</option>
                      <option>Female</option>
                      <option>Male</option>
                      <option>Prefer not to say</option>
                    </select>
                  </Field>
                  <Field label="Insurance Provider (optional)">
                    <input className={inputCls(false)} value={draft.insuranceProvider ?? ''} onChange={(e) => update({ insuranceProvider: e.target.value })} />
                  </Field>
                  <Field label="Reason for Visit" error={errors.reason} full>
                    <textarea rows={3} className={inputCls(!!errors.reason)} value={draft.reason ?? ''} onChange={(e) => update({ reason: e.target.value })} />
                  </Field>
                  <Field label="Additional Notes (optional)" full>
                    <textarea rows={2} className={inputCls(false)} value={draft.notes ?? ''} onChange={(e) => update({ notes: e.target.value })} />
                  </Field>
                </div>
              </StepBlock>
            )}

            {step === 5 && (
              <StepBlock title="Review Your Appointment">
                <dl className="divide-y divide-brand-border text-sm">
                  <ReviewRow label="Department" value={department?.name} />
                  <ReviewRow label="Doctor" value={doctor?.name} />
                  <ReviewRow label="Date" value={draft.date && new Date(draft.date).toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })} />
                  <ReviewRow label="Time" value={draft.time} />
                  <ReviewRow label="Patient" value={draft.fullName} />
                  <ReviewRow label="Email" value={draft.email} />
                  <ReviewRow label="Phone" value={draft.phone} />
                  <ReviewRow label="Reason for Visit" value={draft.reason} />
                  {draft.insuranceProvider && <ReviewRow label="Insurance" value={draft.insuranceProvider} />}
                </dl>
              </StepBlock>
            )}

            {step === 6 && (
              <div className="text-center py-6">
                <span className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8 text-brand-success" aria-hidden="true" />
                </span>
                <h2 className="mt-5 text-2xl font-bold text-brand-navy">Appointment Confirmed</h2>
                <p className="mt-2 text-brand-muted">A confirmation has been sent to {draft.email || 'your email'}.</p>

                <dl className="mt-8 max-w-sm mx-auto text-left rounded border border-brand-border p-5 divide-y divide-brand-border text-sm">
                  <ReviewRow label="Doctor" value={doctor?.name} />
                  <ReviewRow label="Department" value={department?.name} />
                  <ReviewRow label="Date" value={draft.date && new Date(draft.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })} />
                  <ReviewRow label="Time" value={draft.time} />
                  <ReviewRow label="Reference" value={reference} />
                </dl>

                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <Button variant="secondary" icon={<CalendarPlus className="w-4 h-4" aria-hidden="true" />}>Add to Calendar</Button>
                  <Button to="/" variant="outline" icon={<HomeIcon className="w-4 h-4" aria-hidden="true" />}>Back to Home</Button>
                </div>
              </div>
            )}

            {step < 6 && (
              <div className="mt-8 pt-6 border-t border-brand-border flex items-center justify-between">
                <Button variant="outline" onClick={goBack} disabled={step === 0} icon={<ChevronLeft className="w-4 h-4" aria-hidden="true" />}>
                  Back
                </Button>
                <Button onClick={goNext} disabled={!canProceed} icon={step === 5 ? <CalendarCheck className="w-4 h-4" aria-hidden="true" /> : <ChevronRight className="w-4 h-4" aria-hidden="true" />}>
                  {step === 5 ? 'Confirm Appointment' : 'Continue'}
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function StepBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-lg font-bold text-brand-navy mb-5">{title}</h2>
      {children}
    </div>
  );
}

function OptionCard({ selected, onClick, title, subtitle, centered }: { selected: boolean; onClick: () => void; title: string; subtitle?: string; centered?: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`rounded border px-4 py-3 text-left transition-colors ${centered ? 'text-center' : ''} ${
        selected ? 'border-brand-primary bg-brand-lighter' : 'border-brand-border hover:border-brand-primary/40'
      }`}
    >
      <p className="font-semibold text-brand-navy text-sm">{title}</p>
      {subtitle && <p className="text-xs text-brand-muted mt-0.5">{subtitle}</p>}
    </button>
  );
}

function Field({ label, error, full, children }: { label: string; error?: string; full?: boolean; children: React.ReactNode }) {
  return (
    <label className={`flex flex-col gap-1.5 text-xs font-semibold text-brand-muted ${full ? 'sm:col-span-2' : ''}`}>
      {label}
      {children}
      {error && <span className="text-brand-emergency font-normal">{error}</span>}
    </label>
  );
}

function ReviewRow({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <div className="flex justify-between py-2.5 gap-4">
      <dt className="text-brand-muted">{label}</dt>
      <dd className="font-medium text-brand-navy text-right">{value}</dd>
    </div>
  );
}

function inputCls(hasError: boolean) {
  return `rounded-lg border bg-white px-3 py-2.5 text-sm text-brand-text outline-none focus:border-brand-primary ${
    hasError ? 'border-brand-emergency' : 'border-brand-border'
  }`;
}
