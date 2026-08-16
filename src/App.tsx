import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Appointments from './pages/Appointments';
import Emergency from './pages/Emergency';
import Facilities from './pages/Facilities';
import HealthResources from './pages/HealthResources';
import ArticleDetail from './pages/ArticleDetail';
import FAQ from './pages/FAQ';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import { PrivacyPolicy, TermsOfUse, Accessibility } from './pages/Legal';

import PortalLayout from './pages/portal/PortalLayout';
import PortalLogin from './pages/portal/PortalLogin';
import PortalDashboard from './pages/portal/PortalDashboard';
import PortalAppointments from './pages/portal/PortalAppointments';
import { PortalMedicalRecords, PortalLabResults, PortalPrescriptions } from './pages/portal/PortalRecords';
import PortalBilling from './pages/portal/PortalBilling';
import PortalMessages from './pages/portal/PortalMessages';

import AdminLayout from './pages/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminPatients from './pages/admin/AdminPatients';
import AdminDoctors from './pages/admin/AdminDoctors';
import AdminAppointments from './pages/admin/AdminAppointments';
import { AdminDepartments, AdminServices, AdminArticles } from './pages/admin/AdminContent';
import { AdminBilling, AdminNotifications } from './pages/admin/AdminOps';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:slug" element={<ServiceDetail />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="emergency" element={<Emergency />} />
          <Route path="facilities" element={<Facilities />} />
          <Route path="health-resources" element={<HealthResources />} />
          <Route path="health-resources/:slug" element={<ArticleDetail />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="careers" element={<Careers />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-of-use" element={<TermsOfUse />} />
          <Route path="accessibility" element={<Accessibility />} />

          <Route path="portal" element={<PortalLogin />} />
          <Route path="portal" element={<PortalLayout />}>
            <Route path="dashboard" element={<PortalDashboard />} />
            <Route path="appointments" element={<PortalAppointments />} />
            <Route path="records" element={<PortalMedicalRecords />} />
            <Route path="lab-results" element={<PortalLabResults />} />
            <Route path="prescriptions" element={<PortalPrescriptions />} />
            <Route path="billing" element={<PortalBilling />} />
            <Route path="messages" element={<PortalMessages />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="patients" element={<AdminPatients />} />
          <Route path="doctors" element={<AdminDoctors />} />
          <Route path="appointments" element={<AdminAppointments />} />
          <Route path="departments" element={<AdminDepartments />} />
          <Route path="services" element={<AdminServices />} />
          <Route path="articles" element={<AdminArticles />} />
          <Route path="billing" element={<AdminBilling />} />
          <Route path="notifications" element={<AdminNotifications />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
