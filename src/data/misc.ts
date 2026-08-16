import type { FAQItem, Job, Facility, Testimonial } from '../types';

export const faqs: FAQItem[] = [
  { id: 'f1', question: 'How do I book an appointment?', answer: 'You can book online through our Appointments page, call our main line, or use the Patient Portal if you already have an account. Choose a department and doctor, then pick an available date and time.' },
  { id: 'f2', question: 'Do I need an appointment to be seen?', answer: 'For general consultations and specialist visits, yes — booking ahead helps us reduce your wait time. For emergencies, walk in to our Emergency Department at any time; no appointment is needed.' },
  { id: 'f3', question: 'What insurance do you accept?', answer: 'We work with a range of national and private insurance providers. Visit our Insurance page for the current list, or contact our billing office to confirm your specific plan.' },
  { id: 'f4', question: 'What are your visiting hours?', answer: 'General visiting hours are 10:00 AM to 8:00 PM daily. Some units, such as the ICU and Neonatal Unit, have specific visiting windows — please check with the ward directly.' },
  { id: 'f5', question: 'Do you provide emergency services?', answer: 'Yes. Our Emergency Department operates 24 hours a day, 7 days a week, with an on-call trauma and emergency medicine team.' },
  { id: 'f6', question: 'How can I find a doctor?', answer: 'Use the Find a Doctor page to search by name, specialty, or department. Each doctor profile includes their background, areas of expertise, and available consultation hours.' },
  { id: 'f7', question: 'How can I access my laboratory results?', answer: 'Laboratory results are available through the Patient Portal once processed. You will also be notified by your doctor if results require a follow-up conversation.' },
  { id: 'f8', question: 'How can I pay my hospital bill?', answer: 'Bills can be paid online through the Patient Portal, in person at our billing office, or by bank transfer. Visit the Billing page for full payment options.' },
  { id: 'f9', question: 'Where is the hospital located?', answer: 'Rehoboth Hospital is located at 221 Camp Davies Rd, Ishefun, Ayobo, Lagos. Full directions and a map are available on our Contact page.' },
  { id: 'f10', question: 'How do I contact a specific department?', answer: 'Each department page lists direct contact information and opening hours. Alternatively, our main line can direct your call to the right department.' },
];

export const jobs: Job[] = [
  { id: 'j1', title: 'Registered Nurse — Emergency Department', department: 'Emergency Medicine', location: 'Lagos, Nigeria', type: 'Full-time', description: 'Join our 24/7 emergency team providing acute and trauma nursing care in a fast-paced environment.' },
  { id: 'j2', title: 'Consultant Radiologist', department: 'Radiology', location: 'Lagos, Nigeria', type: 'Full-time', description: 'Lead diagnostic imaging interpretation across CT, MRI, ultrasound, and X-ray services.' },
  { id: 'j3', title: 'Paediatric Nurse', department: 'Paediatrics', location: 'Lagos, Nigeria', type: 'Full-time', description: 'Provide compassionate, family-centred nursing care to infants, children, and adolescents.' },
  { id: 'j4', title: 'Medical Laboratory Scientist', department: 'Laboratory', location: 'Lagos, Nigeria', type: 'Full-time', description: 'Perform diagnostic testing across haematology, chemistry, and microbiology disciplines.' },
  { id: 'j5', title: 'Billing & Insurance Officer', department: 'Administration', location: 'Lagos, Nigeria', type: 'Full-time', description: 'Support patients with billing enquiries, insurance claims, and payment processing.' },
  { id: 'j6', title: 'Clinical Intern (Rotating)', department: 'Multiple Departments', location: 'Lagos, Nigeria', type: 'Internship', description: 'A structured rotational internship across major clinical departments for recent medical graduates.' },
  { id: 'j7', title: 'Patient Experience Coordinator', department: 'Administration', location: 'Lagos, Nigeria', type: 'Part-time', description: 'Support patients and visitors with wayfinding, scheduling questions, and front-desk service.' },
];

export const facilities: Facility[] = [
  { id: 'fa1', name: 'Emergency Department', description: 'A dedicated 24/7 emergency unit equipped for rapid trauma response and acute care.', photoSeed: 'facility-emergency', src: '/images/rehoboth9.png' },
  { id: 'fa2', name: 'Intensive Care Unit', description: 'A fully monitored critical care unit staffed around the clock by intensive care specialists.', photoSeed: 'facility-icu', src: '/images/rehoboth10.png' },
  { id: 'fa3', name: 'Operating Theatres', description: 'Modern operating theatres equipped for a full range of surgical procedures.', photoSeed: 'facility-theatre', src: '/images/rehoboth11.png' },
  { id: 'fa4', name: 'Maternity Ward', description: 'A calm, well-equipped labour and delivery unit supported by experienced midwifery staff.', photoSeed: 'facility-maternity' },
  { id: 'fa5', name: 'Neonatal Unit', description: 'Specialised care for newborns requiring additional medical support after birth.', photoSeed: 'facility-neonatal' },
  { id: 'fa6', name: 'Diagnostic Centre', description: 'Centralised imaging and diagnostics, including CT, MRI, ultrasound, and X-ray.', photoSeed: 'facility-diagnostic' },
  { id: 'fa7', name: 'Laboratory', description: 'A full-service clinical laboratory supporting fast, accurate diagnostic testing.', photoSeed: 'facility-laboratory' },
  { id: 'fa8', name: 'Pharmacy', description: 'An on-site pharmacy dispensing prescriptions with pharmacist consultation available.', photoSeed: 'facility-pharmacy' },
  { id: 'fa9', name: 'Patient Rooms', description: 'Comfortable private and shared patient rooms designed to support recovery.', photoSeed: 'facility-rooms' },
  { id: 'fa10', name: 'Waiting Areas', description: 'Spacious, comfortable waiting areas across every department.', photoSeed: 'facility-waiting' },
  { id: 'fa11', name: 'Ambulance Services', description: 'A dispatched ambulance fleet for emergency transport, available around the clock.', photoSeed: 'facility-ambulance' },
];

export const testimonials: Testimonial[] = [
  { id: 't1', name: 'Adaeze O.', service: 'Maternity Care', rating: 5, quote: 'The doctors and nurses were incredibly professional and compassionate throughout my treatment.' },
  { id: 't2', name: 'Bayo A.', service: 'Orthopaedics', rating: 5, quote: 'From my first consultation to physiotherapy after surgery, every step felt genuinely well organised.' },
  { id: 't3', name: 'Chinwe E.', service: 'Emergency Care', rating: 5, quote: 'I was seen quickly and the emergency team explained everything clearly during a stressful moment.' },
  { id: 't4', name: 'Femi T.', service: 'Cardiology', rating: 4, quote: 'Booking online was simple, and Dr. Williams took the time to answer all of my questions.' },
];

// Note: testimonials above are demonstration content for this build, not real patient reviews.
