import type { Department } from '../types';

export const departments: Department[] = [
  {
    id: 'd1', slug: 'cardiology', name: 'Cardiology',
    description: 'Comprehensive heart care, from preventive screening to advanced cardiac procedures, delivered by a team focused on long-term heart health.',
    servicesOffered: ['ECG & Echocardiography', 'Cardiac Catheterization', 'Hypertension Management', 'Heart Failure Clinic'],
    openingHours: 'Mon – Sat, 8:00 AM – 6:00 PM', phone: '09047028189', photoSeed: 'cardiology-department',
  },
  {
    id: 'd2', slug: 'paediatrics', name: 'Paediatrics',
    description: 'Child-centered care from infancy through adolescence, combining routine wellness visits with specialist paediatric medicine.',
    servicesOffered: ['Well-Child Visits', 'Immunisation', 'Growth & Development Monitoring', 'Paediatric Emergency Care'],
    openingHours: 'Mon – Sun, 8:00 AM – 8:00 PM', phone: '09047028189', photoSeed: 'paediatrics-department',
  },
  {
    id: 'd3', slug: 'obstetrics-gynaecology', name: 'Obstetrics & Gynaecology',
    description: 'Complete women\'s health services covering prenatal care, delivery, postnatal support, and gynaecological treatment.',
    servicesOffered: ['Antenatal Care', 'Labour & Delivery', 'Gynaecological Surgery', 'Fertility Counselling'],
    openingHours: 'Mon – Sun, 24 Hours', phone: '09047028189', photoSeed: 'obgyn-department',
  },
  {
    id: 'd4', slug: 'orthopaedics', name: 'Orthopaedics',
    description: 'Diagnosis and treatment of bone, joint, and muscle conditions, from sports injuries to joint replacement.',
    servicesOffered: ['Fracture Care', 'Joint Replacement', 'Sports Medicine', 'Physical Rehabilitation'],
    openingHours: 'Mon – Sat, 8:00 AM – 6:00 PM', phone: '09047028189', photoSeed: 'orthopaedics-department',
  },
  {
    id: 'd5', slug: 'neurology', name: 'Neurology',
    description: 'Specialist care for conditions of the brain, spine, and nervous system, backed by advanced diagnostic imaging.',
    servicesOffered: ['Stroke Care', 'Epilepsy Management', 'Headache & Migraine Clinic', 'Neurodiagnostics'],
    openingHours: 'Mon – Fri, 9:00 AM – 5:00 PM', phone: '09047028189', photoSeed: 'neurology-department',
  },
  {
    id: 'd6', slug: 'dermatology', name: 'Dermatology',
    description: 'Medical and cosmetic skin care from experienced dermatologists, treating conditions across all ages.',
    servicesOffered: ['Skin Conditions', 'Minor Skin Surgery', 'Allergy Testing', 'Cosmetic Dermatology'],
    openingHours: 'Mon – Fri, 9:00 AM – 5:00 PM', phone: '09047028189', photoSeed: 'dermatology-department',
  },
  {
    id: 'd7', slug: 'general-surgery', name: 'General Surgery',
    description: 'A full surgical service covering elective and emergency procedures with modern operating theatres.',
    servicesOffered: ['Elective Surgery', 'Emergency Surgery', 'Laparoscopic Procedures', 'Post-Op Care'],
    openingHours: 'Mon – Sun, 24 Hours', phone: '09047028189', photoSeed: 'general-surgery-department',
  },
  {
    id: 'd8', slug: 'internal-medicine', name: 'Internal Medicine',
    description: 'Adult primary and specialist care focused on the prevention, diagnosis, and treatment of chronic and acute illness.',
    servicesOffered: ['Chronic Disease Management', 'Diabetes Care', 'Preventive Screening', 'General Consultation'],
    openingHours: 'Mon – Sat, 8:00 AM – 6:00 PM', phone: '09047028189', photoSeed: 'internal-medicine-department',
  },
  {
    id: 'd9', slug: 'radiology', name: 'Radiology',
    description: 'Advanced diagnostic imaging services supporting accurate, timely diagnosis across every department.',
    servicesOffered: ['X-Ray', 'CT Scan', 'MRI', 'Ultrasound'],
    openingHours: 'Mon – Sun, 24 Hours', phone: '09047028189', photoSeed: 'radiology-department',
  },
  {
    id: 'd10', slug: 'dentistry', name: 'Dentistry',
    description: 'General and restorative dental care in a comfortable, modern dental suite.',
    servicesOffered: ['Routine Check-ups', 'Restorative Dentistry', 'Orthodontics', 'Oral Surgery'],
    openingHours: 'Mon – Sat, 9:00 AM – 5:00 PM', phone: '09047028189', photoSeed: 'dentistry-department',
  },
  {
    id: 'd11', slug: 'ophthalmology', name: 'Ophthalmology',
    description: 'Comprehensive eye care, from routine vision testing to specialist surgical treatment.',
    servicesOffered: ['Vision Testing', 'Cataract Surgery', 'Glaucoma Management', 'Paediatric Eye Care'],
    openingHours: 'Mon – Fri, 9:00 AM – 5:00 PM', phone: '09047028189', photoSeed: 'ophthalmology-department',
  },
  {
    id: 'd12', slug: 'emergency-medicine', name: 'Emergency Medicine',
    description: 'Round-the-clock emergency and trauma care staffed by an experienced emergency medicine team.',
    servicesOffered: ['Trauma Care', 'Acute Illness Care', 'Resuscitation', 'Ambulance Coordination'],
    openingHours: 'Mon – Sun, 24 Hours', phone: '09047028189', photoSeed: 'emergency-department',
  },
  {
    id: 'd13', slug: 'urology', name: 'Urology',
    description: 'Diagnosis and treatment of conditions affecting the urinary tract and male reproductive system.',
    servicesOffered: ['Kidney Stone Treatment', 'Prostate Care', 'Urological Surgery', 'Continence Clinic'],
    openingHours: 'Mon – Fri, 9:00 AM – 5:00 PM', phone: '09047028189', photoSeed: 'urology-department',
  },
  {
    id: 'd14', slug: 'ent', name: 'ENT (Ear, Nose & Throat)',
    description: 'Specialist treatment for conditions of the ear, nose, throat, and related structures of the head and neck.',
    servicesOffered: ['Hearing Tests', 'Sinus Treatment', 'Tonsillectomy', 'Voice & Swallowing Clinic'],
    openingHours: 'Mon – Fri, 9:00 AM – 5:00 PM', phone: '09047028189', photoSeed: 'ent-department',
  },
  {
    id: 'd15', slug: 'physiotherapy', name: 'Physiotherapy',
    description: 'Personalised rehabilitation programmes helping patients recover movement, strength, and function.',
    servicesOffered: ['Post-Surgical Rehab', 'Sports Injury Recovery', 'Chronic Pain Management', 'Mobility Therapy'],
    openingHours: 'Mon – Sat, 8:00 AM – 6:00 PM', phone: '09047028189', photoSeed: 'physiotherapy-department',
  },
];

export const getDepartmentBySlug = (slug: string) =>
  departments.find((d) => d.slug === slug);
