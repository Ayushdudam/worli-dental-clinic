import React from 'react';
import { Link } from 'react-router-dom';
import { CLINIC_INFO } from '../data/clinicData';
import { ArrowLeft, Calendar, Phone, MessageCircle, MapPin } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="py-20 lg:py-28 bg-canvas min-h-[70vh] flex items-center justify-center">
      <div className="max-w-xl mx-auto px-4 text-center space-y-6">
        
        <div className="w-16 h-16 rounded-2xl bg-forest-800 text-white font-serif text-2xl font-bold flex items-center justify-center mx-auto shadow-elevated">
          404
        </div>

        <div className="space-y-2">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-forest-900">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
            The clinical page or treatment route you are looking for has been moved or does not exist. Use the links below to find what you need.
          </p>
        </div>

        {/* Quick Link Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto text-xs pt-2">
          <Link
            to="/"
            className="p-3.5 rounded-xl bg-surface border border-border-subtle text-forest-900 font-semibold hover:bg-stone-50 transition-colors shadow-sm flex items-center justify-center gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Home</span>
          </Link>

          <Link
            to="/treatments"
            className="p-3.5 rounded-xl bg-surface border border-border-subtle text-forest-900 font-semibold hover:bg-stone-50 transition-colors shadow-sm flex items-center justify-center gap-1.5"
          >
            <span>Treatments Directory</span>
          </Link>

          <Link
            to="/appointment"
            className="p-3.5 rounded-xl bg-forest-800 text-white font-semibold hover:bg-forest-900 transition-colors shadow-soft-card flex items-center justify-center gap-1.5"
          >
            <Calendar className="w-3.5 h-3.5 text-copper-100" />
            <span>Book Appointment</span>
          </Link>

          <Link
            to="/contact"
            className="p-3.5 rounded-xl bg-surface border border-border-subtle text-forest-900 font-semibold hover:bg-stone-50 transition-colors shadow-sm flex items-center justify-center gap-1.5"
          >
            <MapPin className="w-3.5 h-3.5 text-copper-500" />
            <span>{CLINIC_INFO.address.area} Clinic Location</span>
          </Link>
        </div>

        {/* Direct Contact */}
        <div className="pt-6 border-t border-border-subtle text-xs text-text-muted flex items-center justify-center gap-4">
          <a href={`tel:${CLINIC_INFO.phoneRaw}`} className="hover:text-forest-800 font-medium flex items-center gap-1">
            <Phone className="w-3 h-3 text-copper-500" />
            <span>{CLINIC_INFO.phone}</span>
          </a>
          <span>•</span>
          <a href={CLINIC_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 font-medium flex items-center gap-1 text-emerald-800">
            <MessageCircle className="w-3 h-3 text-emerald-600" />
            <span>WhatsApp Support</span>
          </a>
        </div>

      </div>
    </div>
  );
};
