import React from 'react';
import { Link } from 'react-router-dom';
import { DOCTOR_INFO, STERILIZATION_STANDARDS, CLINIC_INFO } from '../data/clinicData';
import { ShieldCheck, CheckCircle2, Calendar, MessageCircle, HeartHandshake, Sparkles } from 'lucide-react';

export const DoctorClinicSection: React.FC = () => {
  return (
    <section id="doctor" className="py-16 lg:py-20 bg-canvas border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Top Doctor Profile Editorial Layout: Photography + Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Clinician Portrait Photography (3:4 Ratio) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              
              <div className="bg-surface rounded-3xl overflow-hidden border border-border-subtle shadow-elevated">
                {/* Genuine Clinician Framing Photo */}
                <div className="relative aspect-[3/4] bg-stone-100 overflow-hidden">
                    <img
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80"
                    alt={`${DOCTOR_INFO.name}, ${DOCTOR_INFO.qualification} — Founders & Specialists at ${CLINIC_INFO.name}, Lower Parel / Worli`}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                    width="800"
                    height="1066"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent" />
                  
                  {/* Photo Corner Tag */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] uppercase tracking-widest font-bold bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-md">
                      {DOCTOR_INFO.qualification} • {DOCTOR_INFO.speciality}
                    </span>
                  </div>
                </div>

                {/* Details Footer under Photo */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-serif text-xl font-bold text-forest-900">
                        {DOCTOR_INFO.name}
                      </h3>
                      <p className="text-xs text-copper-600 font-semibold">
                        {DOCTOR_INFO.title}
                      </p>
                    </div>
                    <span className="px-2.5 py-1 rounded-lg bg-forest-50 text-forest-800 text-xs font-bold border border-forest-100">
                      {DOCTOR_INFO.experienceYears}+ Years
                    </span>
                  </div>

                  {/* Professional Affiliations */}
                  <div className="pt-2 border-t border-border-subtle space-y-1.5 text-xs text-text-muted">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-forest-900 block">
                      Professional Affiliations:
                    </span>
                    {DOCTOR_INFO.affiliations.slice(0, 3).map((aff, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-[11px] text-text-main">
                        <CheckCircle2 className="w-3.5 h-3.5 text-forest-800 shrink-0" />
                        <span>{aff}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Decorative Pill */}
              <div className="absolute -top-3 -right-3 bg-copper-500 text-white py-1.5 px-3.5 rounded-full text-[11px] font-bold shadow-soft-card flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" />
                <span>{CLINIC_INFO.address.area} Practice</span>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative, Philosophy & Consultation CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-3">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-copper-100 text-copper-600">
                Lead Clinician Profile
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-900 tracking-tight leading-tight">
                "Every smile is a personal work of art worth protecting."
              </h2>
              <p className="text-sm sm:text-base text-text-muted leading-relaxed">
                {DOCTOR_INFO.bio}
              </p>
            </div>

            {/* Philosophy Box */}
            <div className="p-5 rounded-2xl bg-surface border border-border-subtle shadow-soft-card space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-forest-900">
                <HeartHandshake className="w-4 h-4 text-copper-500" />
                <span>The Conservation-First Philosophy</span>
              </div>
              <p className="text-xs sm:text-sm text-text-main leading-relaxed italic">
                "{DOCTOR_INFO.philosophy}"
              </p>
            </div>

            {/* Consultation Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Link
                to="/appointment"
                className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-forest-800 hover:bg-forest-900 text-white font-medium text-xs sm:text-sm shadow-soft-card transition-colors min-h-[48px]"
              >
                <Calendar className="w-4 h-4 text-copper-100" />
                <span>Consult with {DOCTOR_INFO.name}</span>
              </Link>

              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-surface hover:bg-stone-50 border border-border-subtle text-text-main hover:text-emerald-900 font-medium text-xs sm:text-sm shadow-soft-card transition-colors min-h-[48px]"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Consultation (+91)</span>
              </a>
            </div>

          </div>

        </div>

        {/* Sterilization & Clinical Safety Section */}
        <div className="pt-12 border-t border-border-subtle space-y-8">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-forest-800">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>Hospital-Grade Class-B Safety Standard</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest-900">
              Zero-Compromise Infection Control Protocols
            </h3>
            <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
              Every instrument package undergoes fractional pre-vacuum autoclaving at 134°C with multi-variable chemical indicators to eliminate all viral and bacterial risks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {STERILIZATION_STANDARDS.map((std) => (
              <div 
                key={std.step}
                className="p-5 rounded-2xl bg-surface border border-border-subtle space-y-2.5 shadow-soft-card"
              >
                <div className="flex items-center justify-between">
                  <span className="w-7 h-7 rounded-lg bg-forest-50 text-forest-900 font-bold text-xs flex items-center justify-center">
                    {std.step}
                  </span>
                  <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    Verified Step
                  </span>
                </div>
                <h4 className="font-serif text-base font-bold text-forest-900">
                  {std.title}
                </h4>
                <p className="text-xs text-text-muted leading-relaxed">
                  {std.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
