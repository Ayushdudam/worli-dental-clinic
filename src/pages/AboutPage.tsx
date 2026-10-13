import React from 'react';
import { Link } from 'react-router-dom';
import { DOCTOR_INFO, STERILIZATION_STANDARDS, CLINIC_INFO } from '../data/clinicData';
import { ShieldCheck, CheckCircle2, Calendar, MessageCircle, HeartHandshake } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="py-12 lg:py-16 bg-canvas min-h-screen space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Editorial Story Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-forest-50 text-forest-800 border border-forest-100">
            <span>About The Practice</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-forest-900 tracking-tight leading-tight">
            A Modern Dental & Implant Sanctuary in {CLINIC_INFO.address.area}
          </h1>
          <p className="text-text-muted text-base sm:text-lg leading-relaxed">
            Led by {DOCTOR_INFO.name}, {DOCTOR_INFO.qualification}, {CLINIC_INFO.name} was established with a singular medical commitment: to replace the hurried, high-stress atmosphere of conventional dental clinics with unhurried listening, gentle touch, and lasting aesthetic care.
          </p>
        </div>

        {/* Lead Clinician Spotlight Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Clinician Portrait */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="bg-surface rounded-3xl overflow-hidden border border-border-subtle shadow-elevated">
                <div className="relative aspect-[3/4] bg-stone-100 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80"
                    alt={`${DOCTOR_INFO.name}, ${DOCTOR_INFO.qualification} — Founders & Lead Specialists at ${CLINIC_INFO.name}, Lower Parel / Worli`}
                    className="w-full h-full object-cover object-top"
                    loading="eager"
                    width="800"
                    height="1066"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] uppercase tracking-widest font-bold bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-md">
                      {DOCTOR_INFO.qualification} Clinician
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-forest-900">
                      {DOCTOR_INFO.name}
                    </h2>
                    <p className="text-xs text-copper-600 font-semibold">
                      {DOCTOR_INFO.qualification}
                    </p>
                    <p className="text-xs text-text-muted mt-1">
                      {DOCTOR_INFO.speciality}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-3 rounded-xl bg-canvas border border-border-subtle text-center">
                      <span className="block font-serif text-xl font-bold text-forest-800">{DOCTOR_INFO.experienceYears}+</span>
                      <span className="text-[10px] text-text-muted font-medium">Years in Practice</span>
                    </div>
                    <div className="p-3 rounded-xl bg-canvas border border-border-subtle text-center">
                      <span className="block font-serif text-xl font-bold text-forest-800">IDA</span>
                      <span className="text-[10px] text-text-muted font-medium">Association Member</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Clinician Narrative & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-copper-600">
                Philosophy of Tooth Conservation
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-900 leading-tight">
                "Every smile is a personal work of art worth protecting."
              </h2>
              <p className="text-sm sm:text-base text-text-muted leading-relaxed">
                {DOCTOR_INFO.bio}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface border border-border-subtle shadow-soft-card space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-forest-900">
                <HeartHandshake className="w-4 h-4 text-copper-500" />
                <span>The Conservation Ethos</span>
              </div>
              <p className="text-xs sm:text-sm text-text-main leading-relaxed italic">
                "{DOCTOR_INFO.philosophy}"
              </p>
            </div>

            {/* Affiliations List */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-forest-900 block">
                Professional Memberships & Councils:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-text-main">
                {DOCTOR_INFO.affiliations.map((aff, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-surface border border-border-subtle">
                    <CheckCircle2 className="w-3.5 h-3.5 text-forest-800 shrink-0" />
                    <span className="font-medium">{aff}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                to="/appointment"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-forest-800 text-white font-semibold text-xs shadow-soft-card hover:bg-forest-900 transition-colors min-h-[44px]"
              >
                <Calendar className="w-4 h-4 text-copper-100" />
                <span>Consult with {DOCTOR_INFO.name}</span>
              </Link>
              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-surface border border-border-subtle hover:bg-stone-50 text-text-main font-semibold text-xs transition-colors min-h-[44px]"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Message on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Hospital-Grade Sterilization Protocols */}
        <section className="bg-surface rounded-3xl p-6 sm:p-10 border border-border-subtle shadow-elevated space-y-8">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-forest-800">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>Infection Control Standards</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-900">
              Hospital-Grade Class-B Fractional Vacuum Autoclave
            </h2>
            <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
              Patient safety is non-negotiable. Every instrument is processed through strict ultrasonic cavitation, hermetically pouched with steam-penetration indicators, and autoclaved at 134°C.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {STERILIZATION_STANDARDS.map((std) => (
              <div 
                key={std.step}
                className="p-5 rounded-2xl bg-canvas border border-border-subtle space-y-2 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="w-7 h-7 rounded-lg bg-forest-800 text-white font-bold text-xs flex items-center justify-center font-serif">
                    {std.step}
                  </span>
                  <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    Class-B Certified
                  </span>
                </div>
                <h3 className="font-serif text-base font-bold text-forest-900">
                  {std.title}
                </h3>
                <p className="text-xs text-text-muted leading-relaxed">
                  {std.description}
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};
