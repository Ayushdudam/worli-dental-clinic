import React from 'react';
import { Hero } from '../components/Hero';
import { TrustSection } from '../components/TrustSection';
import { TreatmentsGrid } from '../components/TreatmentsGrid';
import { DoctorClinicSection } from '../components/DoctorClinicSection';
import { PatientJourney } from '../components/PatientJourney';
import { AppointmentForm } from '../components/AppointmentForm';
import { FAQSection } from '../components/FAQSection';
import { LocationHub } from '../components/LocationHub';

export const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <TrustSection />
      <TreatmentsGrid />
      <DoctorClinicSection />
      <PatientJourney />
      <AppointmentForm />
      <FAQSection />
      <LocationHub />
    </div>
  );
};
