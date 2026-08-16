import { usePageMeta } from '../lib/usePageMeta';
import { Hero } from '../components/sections/HomeHero';
import { AboutSection, MissionVision } from '../components/sections/HomeAbout';
import { ServicesPreview } from '../components/sections/HomeServicesDepartments';
import { WhyChoose } from '../components/sections/HomeDoctorsWhyChoose';
import { FacilitiesPreview, HealthResourcesPreview } from '../components/sections/HomeFacilitiesResources';
import { TestimonialsSection, AppointmentCta, EmergencyCta } from '../components/sections/HomeTestimonialsCta';

export default function Home() {
  usePageMeta(
    'Compassionate Care, Advanced Medicine',
    'Rehoboth Hospital provides trusted, compassionate healthcare in Lagos, Nigeria — from general consultations to specialist and emergency care.'
  );

  return (
    <>
      <Hero />
      <AboutSection />
      <MissionVision />
      <ServicesPreview />
      <WhyChoose />
      <FacilitiesPreview />
      <HealthResourcesPreview />
      <TestimonialsSection />
      <AppointmentCta />
      <EmergencyCta />
    </>
  );
}
