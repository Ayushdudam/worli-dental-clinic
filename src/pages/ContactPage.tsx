import React from 'react';
import { LocationHub } from '../components/LocationHub';
import { CLINIC_INFO } from '../data/clinicData';

export const ContactPage: React.FC = () => {
  return (
    <div className="py-12 lg:py-16 bg-canvas min-h-screen space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-forest-50 text-forest-800 border border-forest-100">
            <span>Location & Contact</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-forest-900 tracking-tight">
            Visiting {CLINIC_INFO.name}, Lower Parel & Worli
          </h1>
          <p className="text-text-muted text-base leading-relaxed">
            Located opposite B.D.D. Chawl No. 107, S. S. Amrutwar Marg, near Padmashali Chowk, Lower Parel West / Worli, Mumbai 400013. Easily accessible from Lower Parel, Worli, Prabhadevi, Currey Road, and across South Mumbai.
          </p>
        </div>

        {/* Location Hub Component */}
        <LocationHub />

      </div>
    </div>
  );
};
