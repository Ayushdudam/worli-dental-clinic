import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TREATMENTS, CLINIC_INFO, DOCTOR_INFO } from '../data/clinicData';
import { ShieldCheck, Sparkles, Smile, Target, Sparkle, CheckCircle, ArrowRight, Clock, Check, Calendar, MessageCircle } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-forest-800" />,
  Sparkles: <Sparkles className="w-6 h-6 text-copper-500" />,
  Smile: <Smile className="w-6 h-6 text-forest-800" />,
  Target: <Target className="w-6 h-6 text-forest-800" />,
  Sparkle: <Sparkle className="w-6 h-6 text-forest-800" />,
  CheckCircle: <CheckCircle className="w-6 h-6 text-forest-800" />
};

export const TreatmentsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedConcern, setSelectedConcern] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(TREATMENTS.map(t => t.category)))];

  const concerns = [
    { label: 'All Concerns', value: 'All' },
    { label: 'Stained Teeth & Yellow Enamel', value: 'teeth-whitening' },
    { label: 'Chipped Teeth & Smile Design', value: 'cosmetic-procedures' },
    { label: 'Acute Toothache & Emergency', value: 'emergency-care' },
    { label: 'Cavities & Tooth-Colored Fillings', value: 'fillings-and-sealants' },
    { label: 'Teeth Grinding & Night Guards', value: 'mouth-guards' },
    { label: 'Missing Tooth Replacement', value: 'dental-implants' },
  ];

  const filteredTreatments = TREATMENTS.filter(t => {
    const matchCategory = selectedCategory === 'All' || t.category === selectedCategory;
    const matchConcern = selectedConcern === 'All' || t.id === selectedConcern;
    return matchCategory && matchConcern;
  });

  return (
    <div className="py-12 lg:py-16 bg-canvas min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Editorial Page Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-forest-50 text-forest-800 border border-forest-100">
            <span>Clinical Services Directory</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-forest-900 tracking-tight leading-tight">
            Specialist Care Rooted in Biological Tooth Conservation
          </h1>
          <p className="text-text-muted text-base sm:text-lg leading-relaxed">
            We provide evidence-based, patient-centered dental care led by {DOCTOR_INFO.name} ({DOCTOR_INFO.qualification}). Discover our clinical roadmaps by medical discipline or by your current dental symptoms.
          </p>
        </div>

        {/* Discovery Filter Controls */}
        <div className="bg-surface rounded-2xl p-6 border border-border-subtle shadow-soft-card space-y-5">
          {/* Category Filter */}
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-forest-900 block">
              1. Filter by Clinical Discipline:
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setSelectedConcern('All');
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors min-h-[40px] ${
                    selectedCategory === cat && selectedConcern === 'All'
                      ? 'bg-forest-800 text-white shadow-soft-card'
                      : 'bg-canvas text-text-muted hover:text-text-main border border-border-subtle'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Patient Concern Filter */}
          <div className="space-y-2 pt-3 border-t border-stone-100">
            <span className="text-xs font-bold uppercase tracking-wider text-forest-900 block">
              2. Or Select What Brings You in Today:
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {concerns.map((c) => (
                <button
                  key={c.value}
                  onClick={() => {
                    setSelectedConcern(c.value);
                    setSelectedCategory('All');
                  }}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors min-h-[38px] ${
                    selectedConcern === c.value
                      ? 'bg-copper-500 text-white shadow-soft-card'
                      : 'bg-canvas text-text-muted hover:text-text-main border border-border-subtle'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Treatments List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTreatments.map((treatment) => (
            <div
              key={treatment.id}
              className="bg-surface rounded-3xl p-6 sm:p-7 border border-border-subtle shadow-soft-card hover:shadow-elevated transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl bg-canvas border border-border-subtle flex items-center justify-center">
                    {iconMap[treatment.iconName] || <ShieldCheck className="w-6 h-6 text-forest-800" />}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-forest-50 text-forest-900 border border-forest-100">
                    {treatment.category}
                  </span>
                </div>

                <div>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-forest-900 mb-1.5 leading-snug">
                    {treatment.title}
                  </h2>
                  <p className="text-xs text-text-muted leading-relaxed">
                    {treatment.shortDesc}
                  </p>
                </div>

                <div className="text-xs font-medium text-copper-600 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{treatment.duration}</span>
                </div>

                {/* Common Reasons / Indications */}
                <div className="p-3.5 rounded-xl bg-canvas border border-border-subtle text-xs space-y-1.5">
                  <span className="font-bold text-forest-900 uppercase tracking-wider block text-[10px]">
                    Common Clinical Reasons:
                  </span>
                  <ul className="space-y-1 text-text-muted">
                    {treatment.reasonsForAssessment.slice(0, 2).map((r, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <Check className="w-3 h-3 text-emerald-700 shrink-0 mt-0.5" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Actions Footer */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
                <Link
                  to={`/treatments/${treatment.slug}`}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl bg-forest-800 hover:bg-forest-900 text-white font-semibold text-xs transition-colors min-h-[44px]"
                >
                  <span>Detailed Clinical Roadmap</span>
                  <ArrowRight className="w-3.5 h-3.5 text-copper-100" />
                </Link>

                <a
                  href={`https://wa.me/${CLINIC_INFO.phoneRaw.replace('+', '')}?text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20${encodeURIComponent(treatment.title)}%20at%20${encodeURIComponent(CLINIC_INFO.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200/80 text-emerald-700 hover:bg-emerald-100 transition-colors flex items-center justify-center min-w-[44px] min-h-[44px]"
                  aria-label={`Inquire about ${treatment.title} on WhatsApp`}
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Consultation Banner */}
        <div className="bg-surface rounded-3xl p-8 sm:p-10 border border-border-subtle shadow-elevated flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-serif text-2xl font-bold text-forest-900">
              Not sure which treatment fits your symptoms?
            </h3>
            <p className="text-xs sm:text-sm text-text-muted max-w-xl leading-relaxed">
              We never perform procedures without a comprehensive diagnostic examination and digital review. Book an initial unhurried consultation with {DOCTOR_INFO.name}.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <Link
              to="/appointment"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-forest-800 hover:bg-forest-900 text-white text-xs font-semibold shadow-soft-card transition-colors min-h-[48px]"
            >
              <Calendar className="w-4 h-4 text-copper-100" />
              <span>Request Consultation</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
