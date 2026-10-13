import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';

// Page Views
import { HomePage } from './pages/HomePage';
import { TreatmentsPage } from './pages/TreatmentsPage';
import { TreatmentDetailPage } from './pages/TreatmentDetailPage';
import { AboutPage } from './pages/AboutPage';
import { PatientExperiencePage } from './pages/PatientExperiencePage';
import { AppointmentPage } from './pages/AppointmentPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-canvas text-text-main flex flex-col font-sans overflow-x-hidden selection:bg-forest-100 selection:text-forest-900 pb-16 md:pb-0">
        
        {/* Sticky Accessible Header with Skip Link */}
        <Header />

        {/* Main Landmark Route Container */}
        <main id="main-content" className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/treatments" element={<TreatmentsPage />} />
            <Route path="/treatments/:slug" element={<TreatmentDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/patient-experience" element={<PatientExperiencePage />} />
            <Route path="/appointment" element={<AppointmentPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Editorial Footer with Healthcare Disclosures */}
        <Footer />

        {/* Contextual Responsive Mobile Sticky Action Bar */}
        <MobileStickyBar />

      </div>
    </BrowserRouter>
  );
};

export default App;
