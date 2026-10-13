import React from 'react';
import { Link } from 'react-router-dom';
import { PATIENT_JOURNEY } from '../data/clinicData';
import { MessageSquare, Scan, FileCheck2, HeartPulse, CheckCircle2 } from 'lucide-react';

const stepIcons = [MessageSquare, Scan, FileCheck2, HeartPulse];

export const PatientJourney: React.FC = () => {
  return (
    <section id="experience" className="py-16 lg:py-20 bg-surface border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3">
          <span className="text-xs font-bold tracking-widest text-copper-600 uppercase">
            The Patient Journey
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-900 tracking-tight">
            Dentistry without intimidation or rushed decisions.
          </h2>
          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            We understand that visiting the dental clinic can evoke unease. Our clinical journey is structured around unhurried listening, visual transparency, and gentle pacing.
          </p>
        </div>

        {/* Editorial Visual Stepped Sequence */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PATIENT_JOURNEY.map((step, idx) => {
            const Icon = stepIcons[idx] || CheckCircle2;
            return (
              <div 
                key={step.number}
                className="bg-canvas rounded-3xl p-6 sm:p-7 border border-border-subtle shadow-soft-card flex flex-col justify-between space-y-5 relative group hover:-translate-y-1 transition-transform duration-200"
              >
                <div className="space-y-4">
                  
                  {/* Step Header */}
                  <div className="flex items-center justify-between">
                    <span className="w-10 h-10 rounded-2xl bg-forest-800 text-white font-serif font-bold text-base flex items-center justify-center shadow-soft-card">
                      {step.number}
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-forest-50 text-forest-800 flex items-center justify-center border border-forest-100">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-bold text-forest-900 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs font-medium text-forest-800 leading-relaxed bg-surface p-3 rounded-xl border border-border-subtle">
                    {step.summary}
                  </p>

                  <p className="text-xs text-text-muted leading-relaxed">
                    {step.detail}
                  </p>

                </div>

                {/* Reassurance Indicator */}
                <div className="pt-3 border-t border-border-subtle flex items-center gap-1.5 text-[11px] text-forest-800 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span>Patient-Controlled Pacing</span>
                </div>

              </div>
            );
          })}
        </div>

        {/* Sensory & Comfort Commitment Strip */}
        <div className="bg-canvas rounded-2xl p-6 sm:p-8 border border-border-subtle flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-serif font-bold text-lg text-forest-900">
              Our Comfort Protocol During Clinical Procedures
            </h4>
            <p className="text-xs text-text-muted max-w-2xl">
              We apply topical surface gel prior to localized anesthesia, pause anytime you signal with your hand, and utilize quiet rotary motors to minimize clinical noise.
            </p>
          </div>

          <Link
            to="/appointment"
            className="shrink-0 inline-flex items-center justify-center px-6 py-3 rounded-xl bg-forest-800 text-white font-semibold text-xs shadow-soft-card hover:bg-forest-900 transition-colors min-h-[44px]"
          >
            Experience Gentle Care
          </Link>
        </div>

      </div>
    </section>
  );
};
