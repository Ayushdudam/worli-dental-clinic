import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TREATMENTS, CLINIC_INFO } from '../data/clinicData';
import { ShieldCheck, Sparkles, Smile, Target, Sparkle, CheckCircle, ArrowRight, Clock, Check, MessageCircle, Calendar } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-forest-800" />,
  Sparkles: <Sparkles className="w-6 h-6 text-copper-500" />,
  Smile: <Smile className="w-6 h-6 text-forest-800" />,
  Target: <Target className="w-6 h-6 text-forest-800" />,
  Sparkle: <Sparkle className="w-6 h-6 text-forest-800" />,
  CheckCircle: <CheckCircle className="w-6 h-6 text-forest-800" />
};

export const TreatmentsGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeTreatmentId, setActiveTreatmentId] = useState<string>(TREATMENTS[0]?.id || 'whitening');

  const categories = ['All', ...Array.from(new Set(TREATMENTS.map(t => t.category)))];

  const filteredTreatments = selectedCategory === 'All'
    ? TREATMENTS
    : TREATMENTS.filter(t => t.category === selectedCategory);

  const activeTreatment = TREATMENTS.find(t => t.id === activeTreatmentId) || TREATMENTS[0];

  return (
    <section id="treatments" className="py-16 lg:py-20 bg-canvas border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold tracking-widest text-copper-600 uppercase">
              Specialized Clinical Care
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-900 tracking-tight">
              Care tailored to biological preservation & facial harmony.
            </h2>
            <p className="text-text-muted text-sm sm:text-base leading-relaxed">
              Every procedure is customized around your anatomy, utilizing computerized apex locators, intraoral 3D scanning, and minimally invasive techniques.
            </p>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors min-h-[40px] ${
                  selectedCategory === cat
                    ? 'bg-forest-800 text-white shadow-soft-card'
                    : 'bg-surface text-text-muted hover:text-text-main border border-border-subtle hover:bg-stone-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Editorial Spotlight Box (Varied Asymmetric Layout) */}
        <div className="bg-surface rounded-3xl p-6 sm:p-10 border border-border-subtle shadow-elevated">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left 7 Columns: Treatment Details & Clinical Process */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2.5">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-copper-100 text-copper-600">
                    {activeTreatment.category}
                  </span>
                  <span className="text-xs font-medium text-text-muted flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {activeTreatment.duration}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest-900">
                  {activeTreatment.title}
                </h3>

                <p className="text-sm text-text-muted leading-relaxed">
                  {activeTreatment.fullDesc}
                </p>
              </div>

              {/* Patient Concern & Suitable Guidance */}
              <div className="p-4 rounded-xl bg-canvas border border-border-subtle text-xs space-y-1">
                <span className="font-bold text-forest-900 uppercase tracking-wider block">
                  Common Symptoms or Clinical Indications:
                </span>
                <p className="text-text-muted leading-relaxed">
                  {activeTreatment.suitableFor}
                </p>
              </div>

              {/* 4-Step Clinical Process */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold text-forest-900 uppercase tracking-wider">
                  What to Expect During the Procedure:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeTreatment.process.map((step, idx) => (
                    <div 
                      key={idx}
                      className="p-3 rounded-xl bg-canvas border border-border-subtle flex items-start gap-2.5 text-xs"
                    >
                      <span className="w-5 h-5 rounded-md bg-forest-800 text-white font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="text-text-main leading-relaxed font-medium">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Clinical Highlights & Navigation Link */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6 lg:border-l lg:border-stone-100 lg:pl-8">
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-forest-900 uppercase tracking-wider">
                  Key Biological & Aesthetic Highlights:
                </h4>
                <div className="space-y-2">
                  {activeTreatment.clinicalHighlights.map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-text-main">
                      <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4 border-t border-stone-100">
                <Link
                  to={`/treatments/${activeTreatment.slug}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-forest-800 text-white font-medium text-xs shadow-soft-card hover:bg-forest-900 transition-all min-h-[44px]"
                >
                  <span>Explore Full Clinical Roadmap & Aftercare</span>
                  <ArrowRight className="w-3.5 h-3.5 text-copper-100" />
                </Link>

                <div className="grid grid-cols-2 gap-2">
                  <Link
                    to="/appointment"
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-canvas border border-border-subtle text-forest-900 font-medium text-xs hover:bg-stone-100 transition-colors min-h-[44px]"
                  >
                    <Calendar className="w-3.5 h-3.5 text-copper-500" />
                    <span>Book Consult</span>
                  </Link>

                  <a
                    href={`https://wa.me/${CLINIC_INFO.phoneRaw.replace('+', '')}?text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20${encodeURIComponent(activeTreatment.title)}%20at%20${encodeURIComponent(CLINIC_INFO.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-emerald-50 border border-emerald-200/80 text-emerald-900 font-medium text-xs hover:bg-emerald-100 transition-colors min-h-[44px]"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Treatment Card Selector Strip */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-forest-900 uppercase tracking-wider">
              Browse All Clinical Services:
            </span>
            <Link 
              to="/treatments" 
              className="text-xs font-semibold text-forest-800 hover:text-copper-600 inline-flex items-center gap-1"
            >
              <span>View Full Directory & Patient Concerns</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredTreatments.map((treatment) => {
              const isActive = treatment.id === activeTreatmentId;
              return (
                <div
                  key={treatment.id}
                  className={`p-6 rounded-2xl transition-all duration-200 border flex flex-col justify-between text-left ${
                    isActive
                      ? 'bg-surface border-forest-800 ring-2 ring-forest-800/10 shadow-elevated'
                      : 'bg-surface border-border-subtle hover:border-forest-800/40 hover:shadow-soft-card'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 rounded-xl bg-canvas border border-border-subtle flex items-center justify-center">
                        {iconMap[treatment.iconName] || <ShieldCheck className="w-6 h-6 text-forest-800" />}
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-forest-50 text-forest-900 border border-forest-100">
                        {treatment.category}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-serif text-lg font-bold text-forest-900 mb-1">
                        {treatment.title}
                      </h3>
                      <p className="text-xs text-text-muted leading-relaxed line-clamp-2">
                        {treatment.shortDesc}
                      </p>
                    </div>

                    <div className="text-[11px] text-copper-600 font-medium">
                      {treatment.duration}
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between gap-2">
                    <button
                      onClick={() => setActiveTreatmentId(treatment.id)}
                      className="text-xs font-semibold text-forest-800 hover:text-forest-900 underline underline-offset-2 py-1"
                    >
                      Quick Overview
                    </button>

                    <Link
                      to={`/treatments/${treatment.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-forest-800 hover:text-copper-600 py-1"
                    >
                      <span>Full Page</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
