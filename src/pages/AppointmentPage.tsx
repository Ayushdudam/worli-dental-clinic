import React from 'react';
import { AppointmentForm } from '../components/AppointmentForm';
import { CLINIC_INFO } from '../data/clinicData';
import { Phone, MessageCircle } from 'lucide-react';

export const AppointmentPage: React.FC = () => {
  return (
    <div className="py-12 lg:py-16 bg-canvas min-h-screen space-y-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-forest-50 text-forest-800 border border-forest-100">
            <span>Direct Clinical Scheduling</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-forest-900 tracking-tight">
            Schedule a Consultation in {CLINIC_INFO.address.area}
          </h1>
          <p className="text-text-muted text-xs sm:text-sm leading-relaxed">
            Fill in the details below. Our reception desk will review doctor availability and reach out to confirm your scheduled slot.
          </p>
        </div>

        {/* Form Container */}
        <AppointmentForm />

        {/* Emergency & Direct Inquiries Banner */}
        <div className="bg-surface rounded-2xl p-6 border border-border-subtle shadow-soft-card flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <div className="space-y-1 text-center sm:text-left">
            <span className="font-bold text-forest-900 block">Experiencing sudden throbbing dental pain?</span>
            <span>Urgent and same-day dental emergency inquiries receive prompt prioritization.</span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-forest-800 text-white font-medium hover:bg-forest-900 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Reception</span>
            </a>
            <a
              href={CLINIC_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
