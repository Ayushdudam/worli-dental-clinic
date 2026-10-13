import React from 'react';
import { Star, MapPin } from 'lucide-react';
import { CLINIC_INFO, DOCTOR_INFO, PATIENT_REVIEWS } from '../data/clinicData';

export const TrustSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-20 bg-surface border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Editorial Narrative Split: Text + Operatory Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold tracking-widest text-copper-600 uppercase">
              Boutique Clinical Philosophy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-900 tracking-tight leading-tight">
              Dentistry guided by biological conservation, precision, and patient autonomy.
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-text-muted leading-relaxed">
              <p>
                At {CLINIC_INFO.name}, our treatment decisions begin with biological respect. Rather than rushing toward aggressive tooth cutting or premature extractions, our primary mandate under <strong className="text-text-main font-semibold">{DOCTOR_INFO.name}</strong> is to rescue and preserve your natural dentition wherever viable.
              </p>
              <p>
                From computerized rotary endodontics that disinfect complex root canals to ultra-thin ceramic restorations that preserve healthy enamel, every treatment step is displayed and explained on high-definition digital monitors before proceeding.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated border border-border-subtle aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80"
                alt={`Quiet, hygienic private dental operatory room at ${CLINIC_INFO.name} in Lower Parel / Worli`}
                className="w-full h-full object-cover"
                loading="lazy"
                width="800"
                height="600"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-surface/90 backdrop-blur-sm px-3.5 py-2 rounded-xl text-xs text-forest-900 border border-border-subtle font-medium flex items-center justify-between">
                <span>Private Operatory Suite</span>
                <span className="text-copper-600 font-semibold">Lower Parel / Worli, Mumbai</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Ethical Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-canvas p-7 rounded-2xl border border-border-subtle space-y-3">
            <div className="w-10 h-10 rounded-xl bg-forest-50 text-forest-800 flex items-center justify-center font-serif font-bold text-base mb-2">
              01
            </div>
            <h3 className="font-serif text-lg font-bold text-forest-900">
              Natural Tooth Preservation
            </h3>
            <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
              We exhaust conservative endodontic and restorative options before considering extractions. Your natural tooth root remains the best biological anchor for lifelong jawbone health.
            </p>
          </div>

          <div className="bg-canvas p-7 rounded-2xl border border-border-subtle space-y-3">
            <div className="w-10 h-10 rounded-xl bg-forest-50 text-forest-800 flex items-center justify-center font-serif font-bold text-base mb-2">
              02
            </div>
            <h3 className="font-serif text-lg font-bold text-forest-900">
              Micro-Precision & Digital Clarity
            </h3>
            <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
              We employ rotary NiTi instrumentation, electronic apex locators, and low-radiation digital radiography so you understand every diagnostic finding on a high-definition screen.
            </p>
          </div>

          <div className="bg-canvas p-7 rounded-2xl border border-border-subtle space-y-3">
            <div className="w-10 h-10 rounded-xl bg-forest-50 text-forest-800 flex items-center justify-center font-serif font-bold text-base mb-2">
              03
            </div>
            <h3 className="font-serif text-lg font-bold text-forest-900">
              Transparent, Zero-Pressure Plans
            </h3>
            <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
              Transparent, itemized clinical proposals clearly distinguish urgent biological needs from elective cosmetic enhancements with zero surprise fees.
            </p>
          </div>
        </div>

        {/* Verified South Mumbai Patient Experiences Strip */}
        <div className="space-y-6 pt-4 border-t border-border-subtle">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold tracking-widest text-forest-800 uppercase">
                Patient Feedback
              </span>
              <h3 className="font-serif text-2xl font-bold text-forest-900 mt-1">
                Lower Parel & Worli Patient Perspectives
              </h3>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-text-muted shrink-0">
              <span className="font-serif text-lg font-bold text-forest-900">4.9 / 5.0</span>
              <div className="flex items-center gap-0.5 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="text-stone-400">• Verified Local Reviews</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {PATIENT_REVIEWS.map((rev) => (
              <div 
                key={rev.id}
                className="p-5 rounded-2xl bg-canvas border border-border-subtle flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-forest-100 text-forest-900">
                      {rev.treatmentTag}
                    </span>
                    <div className="flex items-center gap-0.5 text-amber-500">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-text-main leading-relaxed">
                    "{rev.text}"
                  </p>
                </div>

                <div className="pt-2 border-t border-border-subtle text-[11px] text-text-muted">
                  <span className="font-semibold text-text-main block">{rev.author}</span>
                  <span className="flex items-center gap-1 text-[10px]">
                    <MapPin className="w-2.5 h-2.5 text-copper-500" />
                    {rev.locality}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
