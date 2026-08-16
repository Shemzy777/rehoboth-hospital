import { usePageMeta } from '../lib/usePageMeta';
import { PageHeader } from '../components/ui/PageHeader';

function LegalPage({ title, description, children }: { title: string; description: string; children: React.ReactNode }) {
  usePageMeta(title, description);
  return (
    <>
      <PageHeader title={title} description={description} />
      <section className="py-14 lg:py-16">
        <div className="container-page max-w-2xl prose-none text-sm text-brand-muted leading-relaxed space-y-4">
          {children}
        </div>
      </section>
    </>
  );
}

export function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" description="How Rehoboth Hospital collects, uses, and protects your personal and health information.">
      <p>Rehoboth Hospital is committed to protecting the privacy of every patient and visitor. This page outlines, in plain terms, how personal and health information is collected, used, and safeguarded.</p>
      <p>Information collected through appointment booking, the Patient Portal, or contact forms is used solely to provide and coordinate your care, process billing, and respond to enquiries. We do not sell patient information to third parties.</p>
      <p>This is placeholder policy text for a demonstration build. A production deployment should replace this page with a full privacy policy reviewed by legal counsel.</p>
    </LegalPage>
  );
}

export function TermsOfUse() {
  return (
    <LegalPage title="Terms of Use" description="The terms governing use of the Rehoboth Hospital website and Patient Portal.">
      <p>By using this website and the Patient Portal, you agree to use these services only for their intended purpose — accessing hospital information and managing your own healthcare interactions with Rehoboth Hospital.</p>
      <p>Content on this site is provided for general informational purposes and does not replace professional medical advice, diagnosis, or treatment.</p>
      <p>This is placeholder terms text for a demonstration build. A production deployment should replace this page with terms reviewed by legal counsel.</p>
    </LegalPage>
  );
}

export function Accessibility() {
  return (
    <LegalPage title="Accessibility" description="Our commitment to an accessible website for all patients and visitors.">
      <p>Rehoboth Hospital is committed to ensuring this website is accessible to all users, including those relying on assistive technology. We aim to follow recognised web accessibility guidelines across semantic structure, keyboard navigation, colour contrast, and alternative text for imagery.</p>
      <p>If you experience difficulty accessing any part of this website, please contact us so we can assist you directly and address the issue.</p>
    </LegalPage>
  );
}
