export const portalPatient = { firstName: 'John', fullName: 'John Adeyemi', patientId: 'PT-004821' };

export const portalAppointments = {
  upcoming: [
    { id: 'ap1', doctor: 'Dr. Sarah Williams', department: 'Cardiology', date: '2026-08-22', time: '10:00 AM', status: 'Confirmed' as const },
  ],
  past: [
    { id: 'ap2', doctor: 'Dr. Blessing Nwachukwu', department: 'Internal Medicine', date: '2026-06-14', time: '9:00 AM', status: 'Completed' as const },
    { id: 'ap3', doctor: 'Dr. Grace Johnson', department: 'Paediatrics', date: '2026-04-02', time: '2:00 PM', status: 'Completed' as const },
  ],
  cancelled: [
    { id: 'ap4', doctor: 'Dr. Michael Ade', department: 'Orthopaedics', date: '2026-03-10', time: '11:00 AM', status: 'Cancelled' as const },
  ],
};

export const medicalRecords = [
  { id: 'mr1', date: '2026-06-14', visitType: 'Follow-up Consultation', diagnosis: 'Type 2 Diabetes — well controlled', treatment: 'Continued Metformin, dietary counselling provided.' },
  { id: 'mr2', date: '2026-04-02', visitType: 'Paediatric Wellness Visit', diagnosis: 'Routine check — no concerns', treatment: 'Immunisation updated, growth on track.' },
  { id: 'mr3', date: '2026-01-18', visitType: 'General Consultation', diagnosis: 'Seasonal Upper Respiratory Infection', treatment: 'Supportive care advised, symptoms resolved without antibiotics.' },
];

export const labResults = [
  { id: 'lr1', test: 'Fasting Blood Glucose', date: '2026-06-14', result: '104 mg/dL', status: 'Normal' as const },
  { id: 'lr2', test: 'Lipid Panel', date: '2026-06-14', result: 'LDL 118 mg/dL', status: 'Borderline' as const },
  { id: 'lr3', test: 'Full Blood Count', date: '2026-04-02', result: 'Within range', status: 'Normal' as const },
  { id: 'lr4', test: 'HbA1c', date: '2026-06-14', result: '6.4%', status: 'Normal' as const },
];

export const prescriptions = [
  { id: 'rx1', medication: 'Metformin 500mg', dosage: 'Twice daily with meals', doctor: 'Dr. Blessing Nwachukwu', date: '2026-06-14', status: 'Active' as const },
  { id: 'rx2', medication: 'Amoxicillin 500mg', dosage: 'Three times daily for 5 days', doctor: 'Dr. Blessing Nwachukwu', date: '2026-01-18', status: 'Completed' as const },
  { id: 'rx3', medication: 'Multivitamin Syrup', dosage: 'Once daily', doctor: 'Dr. Grace Johnson', date: '2026-04-02', status: 'Active' as const },
];

export const billing = {
  outstandingBalance: 45000,
  currency: '₦',
  invoices: [
    { id: 'inv1', description: 'Cardiology Consultation', date: '2026-06-14', amount: 25000, status: 'Paid' as const },
    { id: 'inv2', description: 'Laboratory Panel', date: '2026-06-14', amount: 20000, status: 'Paid' as const },
    { id: 'inv3', description: 'Follow-up Consultation', date: '2026-08-22', amount: 45000, status: 'Outstanding' as const },
  ],
};

export const messages = [
  { id: 'ms1', from: 'Dr. Sarah Williams', preview: 'Your latest results look good — let\'s discuss at your next visit.', date: '2026-06-16', unread: true },
  { id: 'ms2', from: 'Billing Department', preview: 'A new invoice has been added to your account.', date: '2026-06-14', unread: false },
  { id: 'ms3', from: 'Dr. Grace Johnson', preview: 'Reminder: next immunisation is due in 3 months.', date: '2026-04-03', unread: false },
];

export const recentActivity = [
  { id: 'ra1', label: 'Lab results uploaded — Lipid Panel', date: '2026-06-16' },
  { id: 'ra2', label: 'Appointment confirmed with Dr. Sarah Williams', date: '2026-06-15' },
  { id: 'ra3', label: 'Invoice generated — ₦45,000', date: '2026-06-14' },
];
