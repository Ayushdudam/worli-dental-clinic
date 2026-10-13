import React from 'react';
import { Link } from 'react-router-dom';
import { PATIENT_JOURNEY, DOCTOR_INFO } from '../data/clinicData';
import { 
  HeartHandshake, CheckCircle2, 
  MessageSquare, Scan, FileCheck2, HeartPulse, 
  Calendar, VolumeX 
} from 'lucide-react';

const stepIcons = [MessageSquare, Scan, FileCheck2, HeartPulse];

export const PatientExperiencePage: React.FC = () => {
  return (
    <div className="py-12 lg:py-16 bg-canvas min-h-screen space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-forest-50 text-forest-800 border border-forest-100">
            <span>Patient Care & Comfort</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-forest-900 tracking-tight leading-tight">
            Dentistry Designed Around Your Comfort and Autonomy
          </h1>
          <p className="text-text-muted text-base sm:text-lg leading-relaxed">
            Dental anxiety is common and entirely valid. We have intentionally structured our clinic experience so you never feel rushed, pressured, or out of control.
          </p>
        </div>

        {/* 4-Stage Pathway In Depth */}
        <div className="space-y-6">
          <div className="max-w-xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-copper-600">
              The 4-Stage Process
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-900">
              What to Expect During Your Appointment
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PATIENT_JOURNEY.map((step, idx) => {
              const Icon = stepIcons[idx] || CheckCircle2;
              return (
                <div 
                  key={step.number}
                  className="bg-surface rounded-3xl p-6 sm:p-8 border border-border-subtle shadow-soft-card space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="w-10 h-10 rounded-2xl bg-forest-800 text-white font-serif font-bold text-base flex items-center justify-center shadow-soft-card">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-forest-50 text-forest-800 flex items-center justify-center border border-forest-100">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-forest-900">
                    {step.title}
                  </h3>

                  <p className="text-xs font-semibold text-copper-600 bg-copper-50 p-2.5 rounded-lg border border-copper-100">
                    {step.summary}
                  </p>

                  <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                    {step.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Comfort Protocols & Sensory Amenities */}
        <section className="bg-surface rounded-3xl p-6 sm:p-10 border border-border-subtle shadow-elevated space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-copper-600">
              Anxiety-Relief Measures
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-900">
              Our Specific Comfort Guarantees
            </h2>
            <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
              Every procedural step incorporates clinical measures to eliminate physical and sensory distress.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-canvas border border-border-subtle space-y-3">
              <div className="w-10 h-10 rounded-xl bg-forest-50 text-forest-800 flex items-center justify-center">
                <HeartPulse className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-forest-900">
                Topical Surface Pre-Numbing
              </h3>
              <p className="text-xs text-text-muted leading-relaxed">
                We apply a high-strength topical gel to mucous membranes before localized injections so you barely notice the initial contact.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-canvas border border-border-subtle space-y-3">
              <div className="w-10 h-10 rounded-xl bg-forest-50 text-forest-800 flex items-center justify-center">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-forest-900">
                Hand-Signal Pause Control
              </h3>
              <p className="text-xs text-text-muted leading-relaxed">
                You hold total control over treatment pacing. Raising your left hand immediately stops the procedure for a water sip, stretch, or rest.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-canvas border border-border-subtle space-y-3">
              <div className="w-10 h-10 rounded-xl bg-forest-50 text-forest-800 flex items-center justify-center">
                <VolumeX className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-forest-900">
                Quiet Rotary Equipment
              </h3>
              <p className="text-xs text-text-muted leading-relaxed">
                We use high-torque, ultra-quiet electric rotary micromotors that dramatically reduce high-pitch dental drilling whine.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Card */}
        <div className="bg-canvas rounded-3xl p-8 sm:p-10 border border-border-subtle flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-serif text-2xl font-bold text-forest-900">
              Experience dental care without anxiety
            </h3>
            <p className="text-xs text-text-muted max-w-xl">
              Meet {DOCTOR_INFO.name} for an initial diagnostic consultation in Lower Parel / Worli.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/appointment"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-forest-800 text-white font-medium text-xs shadow-soft-card hover:bg-forest-900 transition-colors min-h-[44px]"
            >
              <Calendar className="w-4 h-4 text-copper-100" />
              <span>Book Appointment</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
