export const adminStats = {
  totalPatients: 8412,
  appointments: 214,
  doctors: 62,
  departments: 15,
  revenue: 18450000,
};

export const adminPatients = [
  { id: 'PT-004821', name: 'John Adeyemi', gender: 'Male', phone: '+234 801 234 5678', lastVisit: '2026-06-14', status: 'Active' as const },
  { id: 'PT-004822', name: 'Chiamaka Nwosu', gender: 'Female', phone: '+234 802 345 6789', lastVisit: '2026-06-10', status: 'Active' as const },
  { id: 'PT-004823', name: 'Ibrahim Musa', gender: 'Male', phone: '+234 803 456 7890', lastVisit: '2026-05-28', status: 'Active' as const },
  { id: 'PT-004824', name: 'Ronke Fashola', gender: 'Female', phone: '+234 804 567 8901', lastVisit: '2026-05-02', status: 'Inactive' as const },
  { id: 'PT-004825', name: 'Emeka Obiora', gender: 'Male', phone: '+234 805 678 9012', lastVisit: '2026-04-19', status: 'Active' as const },
];

export const adminAppointments = {
  pending: [
    { id: 'AP-9001', patient: 'Tola Adekunle', doctor: 'Dr. Sarah Williams', date: '2026-08-20', time: '10:00 AM' },
    { id: 'AP-9002', patient: 'Musa Aliyu', doctor: 'Dr. Daniel Okafor', date: '2026-08-21', time: '11:30 AM' },
  ],
  confirmed: [
    { id: 'AP-9003', patient: 'John Adeyemi', doctor: 'Dr. Sarah Williams', date: '2026-08-22', time: '10:00 AM' },
    { id: 'AP-9004', patient: 'Grace Eze', doctor: 'Dr. Michael Ade', date: '2026-08-23', time: '2:00 PM' },
  ],
  completed: [
    { id: 'AP-8990', patient: 'Chiamaka Nwosu', doctor: 'Dr. Grace Johnson', date: '2026-06-10', time: '9:00 AM' },
  ],
  cancelled: [
    { id: 'AP-8975', patient: 'Ronke Fashola', doctor: 'Dr. Amina Bello', date: '2026-05-30', time: '1:00 PM' },
  ],
};

export const adminNotifications = [
  { id: 'nt1', message: 'New appointment request from Tola Adekunle', date: '2026-08-14', read: false },
  { id: 'nt2', message: 'Lab results uploaded for John Adeyemi', date: '2026-08-13', read: false },
  { id: 'nt3', message: 'Invoice INV-2231 marked as paid', date: '2026-08-12', read: true },
  { id: 'nt4', message: 'Dr. Ibrahim Suleiman updated consultation hours', date: '2026-08-10', read: true },
];
