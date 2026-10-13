import React from 'react';
import { MapPin, Phone, Clock, Navigation, Car, Train, MessageCircle, ShieldCheck } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const LocationHub: React.FC = () => {
  return (
    <section id="location" className="py-16 lg:py-20 bg-canvas border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold tracking-widest text-copper-600 uppercase">
            {CLINIC_INFO.address.area} Clinic & Directions
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-900 tracking-tight">
            Accessible {CLINIC_INFO.address.area} Location
          </h2>
          <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
            Conveniently situated at {CLINIC_INFO.address.line1}, {CLINIC_INFO.address.line2}, {CLINIC_INFO.address.area}.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Address, Hours & Transit Orientation */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            
            {/* Primary Address & Hours Card */}
            <div className="bg-surface rounded-3xl p-6 sm:p-7 border border-border-subtle shadow-elevated space-y-6">
              
              {/* Address Block */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-forest-800 text-white flex items-center justify-center shrink-0 shadow-soft-card">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif font-bold text-lg text-forest-900">
                    Clinic Address
                  </h3>
                  <p className="text-xs sm:text-sm text-text-main font-medium leading-relaxed">
                    {CLINIC_INFO.address.line1}<br />
                    {CLINIC_INFO.address.line2}<br />
                    {CLINIC_INFO.address.area} – {CLINIC_INFO.address.pincode}
                  </p>
                  <p className="text-xs text-copper-600 font-semibold pt-1">
                    Landmark: {CLINIC_INFO.address.landmark}
                  </p>
                </div>
              </div>

              {/* Operating Hours Table */}
              <div className="pt-4 border-t border-stone-100 space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-bold text-forest-900 uppercase tracking-wider">
                  <Clock className="w-3.5 h-3.5 text-forest-800" />
                  <span>Consultation Timings</span>
                </div>
                <div className="space-y-2 text-xs">
                  {CLINIC_INFO.hoursDetail.map((h, idx) => (
                    <div key={idx} className="flex items-center justify-between p-2.5 rounded-xl bg-canvas border border-border-subtle">
                      <span className="font-semibold text-text-main">{h.days}:</span>
                      <div className="text-right">
                        <span className="font-bold text-forest-900 block">{h.time}</span>
                        <span className="text-[10px] text-text-muted">{h.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Transit & Accessibility Guide */}
              <div className="pt-4 border-t border-stone-100 space-y-2 text-xs text-text-muted">
                <div className="flex items-start gap-2 text-text-main">
                  <Car className="w-3.5 h-3.5 text-forest-800 shrink-0 mt-0.5" />
                  <span><strong>By Car / Auto / Taxi:</strong> Convenient drop-off along S. S. Amrutwar Marg opposite B.D.D. Chawl 107.</span>
                </div>
                <div className="flex items-start gap-2 text-text-main">
                  <Train className="w-3.5 h-3.5 text-forest-800 shrink-0 mt-0.5" />
                  <span><strong>By Rail / Monorail:</strong> 5–7 minutes from Lower Parel, Currey Road Railway Stations, and Lower Parel Monorail.</span>
                </div>
                <div className="flex items-start gap-2 text-emerald-800 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>Ground Floor Clinic:</strong> Easy entrance access for seniors and patients with reduced mobility.</span>
                </div>
              </div>

            </div>

            {/* Quick Contact & WhatsApp Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="p-4 rounded-2xl bg-surface border border-border-subtle hover:border-forest-800/40 flex items-center gap-3 transition-colors shadow-soft-card min-h-[48px]"
              >
                <div className="w-9 h-9 rounded-xl bg-forest-50 text-forest-800 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-text-muted block">Direct Dial</span>
                  <span className="text-xs font-bold text-forest-900">{CLINIC_INFO.phone}</span>
                </div>
              </a>

              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-surface border border-border-subtle hover:border-emerald-300 flex items-center gap-3 transition-colors shadow-soft-card min-h-[48px]"
              >
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-text-muted block">WhatsApp Desk</span>
                  <span className="text-xs font-bold text-emerald-900">{CLINIC_INFO.phone}</span>
                </div>
              </a>
            </div>

          </div>

          {/* Right Column: Verified Map Frame & Action Bar */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            
            {/* Map Frame */}
            <div className="relative w-full h-[360px] sm:h-[420px] rounded-3xl overflow-hidden border border-border-subtle shadow-elevated bg-stone-100">
              <iframe
                title={`${CLINIC_INFO.name} Lower Parel Worli Mumbai Location`}
                src={CLINIC_INFO.googleMapsEmbed}
                className="w-full h-full border-0"
                loading="lazy"
                aria-hidden="false"
              />

              {/* Floating Overlay Badge on Map */}
              <div className="absolute top-4 left-4 bg-surface/95 backdrop-blur-md p-3.5 rounded-2xl border border-border-subtle shadow-elevated max-w-xs pointer-events-none">
                <span className="font-serif font-bold text-xs text-forest-900 block">
                  {CLINIC_INFO.name}
                </span>
                <span className="text-[11px] text-text-muted block">
                  {CLINIC_INFO.address.line1}, {CLINIC_INFO.address.area}
                </span>
              </div>
            </div>

            {/* Google Maps Directions Action Strip */}
            <div className="p-4 rounded-2xl bg-surface border border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-3 shadow-soft-card">
              <div className="flex items-center gap-2.5 text-xs text-text-muted text-center sm:text-left">
                <Navigation className="w-4 h-4 text-forest-800 shrink-0" />
                <span>Navigate using Google Maps or Apple Maps app</span>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href={CLINIC_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-forest-800 text-white font-medium text-xs hover:bg-forest-900 transition-colors min-h-[44px]"
                >
                  <Navigation className="w-3.5 h-3.5 text-copper-100" />
                  <span>Open in Maps</span>
                </a>
                <a
                  href={`tel:${CLINIC_INFO.phoneRaw}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-canvas border border-border-subtle text-forest-900 font-medium text-xs hover:bg-stone-100 transition-colors min-h-[44px]"
                >
                  <Phone className="w-3.5 h-3.5 text-forest-800" />
                  <span>Call Reception</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
