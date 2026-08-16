import { usePageMeta } from '../lib/usePageMeta';
import { PageHeader } from '../components/ui/PageHeader';
import { faqs } from '../data/misc';
import { Accordion } from '../components/ui/Accordion';

export default function FAQ() {
  usePageMeta('Frequently Asked Questions', 'Answers to common questions about appointments, insurance, visiting hours, emergency care, and more at Rehoboth Hospital.');

  return (
    <>
      <PageHeader eyebrow="Support" title="Frequently Asked Questions" description="Answers to the questions we hear most often from patients and visitors." />
      <section className="py-16 lg:py-20">
        <div className="container-page max-w-2xl">
          <Accordion items={faqs} />
        </div>
      </section>
    </>
  );
}
