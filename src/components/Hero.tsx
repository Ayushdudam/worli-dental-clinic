import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MessageCircle, MapPin, CheckCircle2, Shield, HeartHandshake } from 'lucide-react';
import { CLINIC_INFO, DOCTOR_INFO } from '../data/clinicData';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-6 pb-14 lg:pt-14 lg:pb-20 bg-canvas border-b border-border-subtle">
      {/* Subtle architectural ambient accents */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-forest-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-4 left-6 w-80 h-80 bg-copper-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Editorial Copy Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Location Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-border-subtle shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
              <MapPin className="w-3.5 h-3.5 text-copper-500 shrink-0" />
              <span className="text-xs font-semibold text-forest-800">
                {CLINIC_INFO.address.line1}, {CLINIC_INFO.address.area}
              </span>
            </div>

            {/* Deliberate Editorial Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-forest-900 leading-[1.12] tracking-tight">
              Specialist Dental Care with a <br className="hidden sm:inline" />
              <span className="italic font-normal text-forest-800">Conservation-First Mindset.</span>
            </h1>

            {/* Patient-Oriented Concise Supporting Copy */}
            <p className="text-base sm:text-lg text-text-muted max-w-xl leading-relaxed">
              We focus on preserving your natural teeth through gentle micro-endodontics, aesthetic restorations, and preventive care. Led by <strong className="text-text-main font-semibold">{DOCTOR_INFO.name}</strong> ({DOCTOR_INFO.qualification}) in a calm, private clinical setting.
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Link
                to="/appointment"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-forest-800 hover:bg-forest-900 text-white font-medium shadow-soft-card hover:shadow-elevated transition-all text-sm min-h-[48px] active:scale-[0.99]"
              >
                <Calendar className="w-4 h-4 text-copper-100" />
                <span>Request Appointment</span>
              </Link>

              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-surface border border-border-subtle hover:border-emerald-500 text-text-main hover:text-emerald-900 font-medium shadow-soft-card transition-all text-sm min-h-[48px]"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Inquire on WhatsApp (+91)</span>
              </a>
            </div>

            {/* Verified Clinical Reassurance Strip */}
            <div className="pt-6 border-t border-border-subtle grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-xs text-text-muted">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span className="font-medium text-text-main">4.9★ Verified Local Rating</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Shield className="w-4 h-4 text-forest-800 shrink-0" />
                <span>Class-B Vacuum Sterilization</span>
              </div>
              <div className="flex items-center gap-2.5">
                <HeartHandshake className="w-4 h-4 text-copper-500 shrink-0" />
                <span>Unhurried Anxiety-Free Visits</span>
              </div>
            </div>

          </div>

          {/* Right Photographic Art-Directed Column */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Clinical Art-Directed Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-elevated border border-border-subtle bg-surface aspect-[4/5] sm:aspect-[16/14]">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80"
                  alt={`Doctor and patient consultation in a modern, calm dental operatory at ${CLINIC_INFO.name}`}
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                  width="1000"
                  height="1250"
                />

                {/* Subtle gradient vignette at the bottom for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-950/20 to-transparent" />

                {/* Overlay Doctor Credential & Philosophy Badge */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-surface/95 backdrop-blur-md border border-white/60 shadow-elevated text-left space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-forest-800 bg-forest-50 px-2 py-0.5 rounded-md border border-forest-100">
                      Founders & Specialists
                    </span>
                    <span className="text-[11px] font-semibold text-copper-600">
                      {DOCTOR_INFO.experienceYears}+ Years Clinical Practice
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-base text-forest-900 leading-tight">
                    {DOCTOR_INFO.name}
                  </h3>
                  <p className="text-xs text-text-muted font-medium">
                    {DOCTOR_INFO.qualification} • {DOCTOR_INFO.speciality}
                  </p>
                  <p className="text-[11px] text-text-main italic border-t border-stone-200/60 pt-1.5">
                    "Every smile is a personal work of art. Gentle care preserving natural teeth."
                  </p>
                </div>
              </div>

              {/* Decorative Subtle Corner Accent */}
              <div className="absolute -top-3 -right-3 w-16 h-16 rounded-full border border-copper-200/80 pointer-events-none -z-10" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
