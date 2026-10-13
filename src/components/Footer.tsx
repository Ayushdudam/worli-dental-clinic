import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, MapPin, Phone, MessageCircle } from 'lucide-react';
import { CLINIC_INFO, DOCTOR_INFO, TREATMENTS } from '../data/clinicData';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-forest-900 text-stone-300 pt-16 pb-24 md:pb-16 border-t border-forest-800" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Column 1: Brand & Practice Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3 group focus:outline-none">
              <div className="w-10 h-10 rounded-xl bg-surface text-forest-900 flex items-center justify-center font-serif font-bold text-lg shadow-soft-card">
                <svg className="w-5 h-5 fill-forest-800" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C8.5 2 6 4.5 6 8c0 3.2 1.2 6.5 2.2 10.2.6 2.3 2 3.8 3.8 3.8s3.2-1.5 3.8-3.8c1-3.7 2.2-7 2.2-10.2 0-3.5-2.5-6-6-6zm0 3.5c1.4 0 2.5 1.1 2.5 2.5 0 .8-.4 1.6-1 2.1-.4-.6-1-1.1-1.5-1.1s-1.1.5-1.5 1.1c-.6-.5-1-1.3-1-2.1 0-1.4 1.1-2.5 2.5-2.5z"/>
                </svg>
              </div>
              <div>
                <span className="font-serif font-bold text-xl text-white block leading-tight">
                  {CLINIC_INFO.name}
                </span>
                <span className="text-xs font-semibold tracking-wider uppercase text-forest-100 block">
                  {CLINIC_INFO.address.area}
                </span>
              </div>
            </Link>

            <p className="text-xs text-stone-300 leading-relaxed">
              Dental clinic and implant centre led by <strong>{DOCTOR_INFO.name}</strong> ({DOCTOR_INFO.qualification}). Dedicated to natural tooth conservation, dental implants, aesthetic smile design, and gentle patient care.
            </p>

            <div className="pt-2 text-xs space-y-2 text-stone-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-copper-500 shrink-0 mt-0.5" />
                <span>{CLINIC_INFO.address.line1}, {CLINIC_INFO.address.line2}, {CLINIC_INFO.address.area}, Mumbai {CLINIC_INFO.address.pincode}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-copper-500 shrink-0" />
                <span>Direct Dial: <a href={`tel:${CLINIC_INFO.phoneRaw}`} className="text-white hover:underline">{CLINIC_INFO.phone}</a></span>
              </p>
              <p className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>WhatsApp: <a href={CLINIC_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">{CLINIC_INFO.phone}</a></span>
              </p>
            </div>
          </div>

          {/* Column 2: Clinical Services Links (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Clinical Specialities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-300">
              {TREATMENTS.map((t) => (
                <Link
                  key={t.id}
                  to={`/treatments/${t.slug}`}
                  className="hover:text-white transition-colors py-1 truncate"
                >
                  • {t.title}
                </Link>
              ))}
              <Link to="/treatments" className="text-copper-400 hover:text-white font-semibold py-1">
                → All Services Directory
              </Link>
            </div>
          </div>

          {/* Column 3: Hours & Quick Actions (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Practice Hours
            </h4>
            <div className="space-y-2 text-xs text-stone-300">
              <div className="p-3 rounded-xl bg-forest-800/80 border border-forest-700/80 space-y-1">
                <span className="font-bold text-white block">Monday – Saturday:</span>
                <span>10:00 AM – 8:30 PM (Full Service)</span>
              </div>
              <div className="p-3 rounded-xl bg-forest-800/80 border border-forest-700/80 space-y-1">
                <span className="font-bold text-white block">Sunday:</span>
                <span>By Appointment / Emergency Care</span>
              </div>
            </div>

            <div className="pt-1">
              <Link
                to="/appointment"
                className="w-full inline-block py-3 px-4 rounded-xl bg-copper-500 hover:bg-copper-600 text-white font-semibold text-xs shadow-soft-card transition-colors text-center min-h-[44px]"
              >
                Request Consultation Slot
              </Link>
            </div>
          </div>

        </div>

        {/* Responsible Healthcare Disclaimer */}
        <div className="pt-8 border-t border-forest-800/80 space-y-4 text-[11px] text-stone-300 leading-relaxed">
          <p>
            <strong>Clinical Disclaimer:</strong> The dental insights and procedural guidelines presented on this website are structured for general educational and patient orientation purposes. Actual diagnostic outcomes and clinical treatment plans are evaluated following direct clinical examination at {CLINIC_INFO.name}, Lower Parel / Worli, Mumbai.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-forest-800/60 text-xs text-stone-400">
            <div className="flex flex-wrap items-center gap-4">
              <span>© {CURRENT_YEAR} {CLINIC_INFO.name}. All rights reserved.</span>
              <span>•</span>
              <Link to="/privacy" className="hover:text-white underline">
                Patient Privacy Commitment
              </Link>
              <span>•</span>
              <Link to="/contact" className="hover:text-white underline">
                Lower Parel Location & Directions
              </Link>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-stone-300 hover:text-white transition-colors py-1 focus:outline-none"
              aria-label="Scroll back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
