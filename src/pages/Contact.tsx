import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Check } from 'lucide-react';
import { usePageMeta } from '../lib/usePageMeta';
import { PageHeader } from '../components/ui/PageHeader';
import { Button } from '../components/ui/Button';

export default function Contact() {
  usePageMeta('Contact Us', 'Get in touch with Rehoboth Hospital — address, phone, email, and an online contact form.');

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const e2: Record<string, string> = {};
    if (!form.name.trim()) e2.name = 'Name is required.';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e2.email = 'Enter a valid email address.';
    if (!form.subject.trim()) e2.subject = 'Subject is required.';
    if (!form.message.trim()) e2.message = 'Message is required.';
    setErrors(e2);
    if (Object.keys(e2).length === 0) setSubmitted(true);
  }

  return (
    <>
      <PageHeader eyebrow="Contact" title="We're here to help." description="Reach out with questions about appointments, billing, or general enquiries — our team responds as quickly as possible." />

      <section className="py-14 lg:py-20">
        <div className="container-page grid lg:grid-cols-2 gap-16">
          <div>
            <div className="border-t border-ink">
              <ContactRow icon={MapPin} label="Address" value="221 Camp Davies Rd, Ishefun, Ayobo, Lagos" />
              <ContactRow icon={Phone} label="Phone" value="09047028189" href="tel:09047028189" />
              <ContactRow icon={Phone} label="Emergency" value="09047028189" href="tel:09047028189" emergency />
              <ContactRow icon={Mail} label="Email" value="info@rehoboth-hospital.com" href="mailto:info@rehoboth-hospital.com" />
              <ContactRow icon={Clock} label="Opening Hours" value="Monday – Sunday, 24 Hours" />
            </div>

            <div className="mt-10 border border-silver aspect-video overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.370723129646!2d3.2392733!3d6.6007666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9b711dfdc28b%3A0x53285a585213e075!2sRehoboth%20Hospital!5e0!3m2!1sen!2sng!4v1786922209170!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Rehoboth Hospital location map"
              />
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="py-8 border-t border-ink">
                <Check className="w-6 h-6 text-success" aria-hidden="true" />
                <h2 className="mt-4 font-display text-xl text-ink">Message sent</h2>
                <p className="mt-2 text-sm text-muted">Thank you for reaching out — our team will respond as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="border-t border-ink pt-6">
                <p className="eyebrow mb-6">Send Us a Message</p>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Name" error={errors.name}>
                    <input className={inputCls(!!errors.name)} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                  </Field>
                  <Field label="Email" error={errors.email}>
                    <input type="email" className={inputCls(!!errors.email)} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                  </Field>
                  <Field label="Phone (optional)">
                    <input type="tel" className={inputCls(false)} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                  </Field>
                  <Field label="Subject" error={errors.subject}>
                    <input className={inputCls(!!errors.subject)} value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} />
                  </Field>
                  <Field label="Message" error={errors.message} full>
                    <textarea rows={5} className={inputCls(!!errors.message)} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                  </Field>
                </div>
                <Button type="submit" className="mt-7" icon={<Send className="w-4 h-4" aria-hidden="true" />}>
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function ContactRow({ icon: Icon, label, value, href, emergency }: { icon: typeof MapPin; label: string; value: string; href?: string; emergency?: boolean }) {
  const content = (
    <>
      <Icon className={`w-4 h-4 shrink-0 ${emergency ? 'text-brick' : 'text-medical'}`} aria-hidden="true" />
      <span className="text-xs text-muted w-28 shrink-0">{label}</span>
      <span className={`text-sm font-medium ${emergency ? 'text-brick' : 'text-ink'}`}>{value}</span>
    </>
  );
  const cls = 'flex items-center gap-3 py-3.5 border-b border-silver';
  return href ? <a href={href} className={cls}>{content}</a> : <div className={cls}>{content}</div>;
}

function Field({ label, error, full, children }: { label: string; error?: string; full?: boolean; children: React.ReactNode }) {
  return (
    <label className={`flex flex-col gap-1.5 text-xs font-semibold text-muted ${full ? 'sm:col-span-2' : ''}`}>
      {label}
      {children}
      {error && <span className="text-brick font-normal">{error}</span>}
    </label>
  );
}

function inputCls(hasError: boolean) {
  return `rounded border bg-warm-white px-3 py-2.5 text-sm text-ink outline-none focus:border-medical ${
    hasError ? 'border-brick' : 'border-silver-cool'
  }`;
}
