import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { TREATMENTS, CLINIC_INFO } from '../data/clinicData';
import { 
  ArrowLeft, Clock, Check, HelpCircle, 
  MessageCircle, Calendar, Sparkles, ChevronDown, 
  ChevronUp, ShieldCheck 
} from 'lucide-react';
import { AppointmentForm } from '../components/AppointmentForm';

export const TreatmentDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const treatment = TREATMENTS.find(t => t.slug === slug || t.id === slug);

  if (!treatment) {
    return (
      <div className="py-24 bg-canvas min-h-screen text-center px-4">
        <div className="max-w-md mx-auto bg-surface p-8 rounded-3xl border border-border-subtle shadow-elevated space-y-4">
          <h1 className="font-serif text-2xl font-bold text-forest-900">Treatment Not Found</h1>
          <p className="text-xs text-text-muted leading-relaxed">
            The treatment you requested could not be identified in our active clinical directory.
          </p>
          <Link
            to="/treatments"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-forest-800 text-white font-medium text-xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Treatments Directory</span>
          </Link>
        </div>
      </div>
    );
  }

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="py-10 lg:py-16 bg-canvas min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Navigation Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-text-muted" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-forest-800 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/treatments" className="hover:text-forest-800 transition-colors">Treatments</Link>
          <span>/</span>
          <span className="font-semibold text-forest-900 truncate">{treatment.title}</span>
        </nav>

        {/* Page Hero Header */}
        <div className="bg-surface rounded-3xl p-6 sm:p-10 border border-border-subtle shadow-elevated space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-forest-50 text-forest-900 border border-forest-100">
              {treatment.category}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium text-copper-600 bg-copper-50 border border-copper-100 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>{treatment.duration}</span>
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-forest-900 tracking-tight leading-tight">
            {treatment.title}
          </h1>

          <p className="text-base sm:text-lg text-text-muted leading-relaxed">
            {treatment.fullDesc}
          </p>

          <div className="p-4 rounded-2xl bg-canvas border border-border-subtle text-xs sm:text-sm space-y-1">
            <span className="font-bold text-forest-900 uppercase tracking-wider block text-[11px]">
              Clinical Focus & Indications:
            </span>
            <p className="text-text-muted leading-relaxed">
              {treatment.suitableFor}
            </p>
          </div>

          {/* Quick Inquiry Strip */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 border-t border-stone-100">
            <a
              href="#book-appointment"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-forest-800 hover:bg-forest-900 text-white font-medium text-xs shadow-soft-card transition-colors min-h-[44px]"
            >
              <Calendar className="w-4 h-4 text-copper-100" />
              <span>Schedule Clinical Assessment</span>
            </a>

            <a
              href={`https://wa.me/${CLINIC_INFO.phoneRaw.replace('+', '')}?text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20${encodeURIComponent(treatment.title)}%20at%20${encodeURIComponent(CLINIC_INFO.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-900 font-medium text-xs transition-colors min-h-[44px]"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Ask on WhatsApp ({CLINIC_INFO.phone})</span>
            </a>
          </div>
        </div>

        {/* 1. Common Reasons for Clinical Assessment */}
        <section className="bg-surface rounded-3xl p-6 sm:p-8 border border-border-subtle shadow-soft-card space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-forest-900">
            <ShieldCheck className="w-4 h-4 text-forest-800" />
            <span>Common Indications</span>
          </div>
          <h2 className="font-serif text-2xl font-bold text-forest-900">
            When is this treatment typically recommended?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
            {treatment.reasonsForAssessment.map((reason, idx) => (
              <div 
                key={idx}
                className="p-3.5 rounded-xl bg-canvas border border-border-subtle flex items-start gap-2.5 text-xs sm:text-sm"
              >
                <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span className="text-text-main font-medium leading-relaxed">{reason}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 2. Step-by-Step Clinical Stages */}
        <section className="bg-surface rounded-3xl p-6 sm:p-8 border border-border-subtle shadow-soft-card space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-copper-600">
              The Procedure Sequence
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-900">
              Step-by-Step Clinical Roadmap
            </h2>
            <p className="text-xs sm:text-sm text-text-muted">
              We guide you through each procedural phase with total diagnostic clarity and comfort-first protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            {treatment.clinicalStages.map((stage) => (
              <div 
                key={stage.step}
                className="p-5 rounded-2xl bg-canvas border border-border-subtle space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-lg bg-forest-800 text-white font-bold text-xs flex items-center justify-center font-serif">
                    {stage.step}
                  </span>
                  <span className="text-[10px] font-semibold text-text-muted uppercase">
                    Stage {stage.step}
                  </span>
                </div>
                <h3 className="font-serif text-base font-bold text-forest-900">
                  {stage.title}
                </h3>
                <p className="text-xs text-text-muted leading-relaxed">
                  {stage.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Questions to Ask the Clinician & Relevant Aftercare */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Questions to Ask */}
          <section className="bg-surface rounded-3xl p-6 sm:p-7 border border-border-subtle shadow-soft-card space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-forest-900">
              <HelpCircle className="w-4 h-4 text-copper-600" />
              <span>Patient Empowerment</span>
            </div>
            <h2 className="font-serif text-xl font-bold text-forest-900">
              Questions to ask during consultation:
            </h2>
            <div className="space-y-2.5 text-xs text-text-muted">
              {treatment.questionsToAsk.map((q, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-canvas border border-border-subtle flex items-start gap-2">
                  <span className="text-copper-600 font-bold shrink-0">?</span>
                  <span className="text-text-main font-medium">{q}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Aftercare & Recovery */}
          <section className="bg-surface rounded-3xl p-6 sm:p-7 border border-border-subtle shadow-soft-card space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-forest-900">
              <Sparkles className="w-4 h-4 text-emerald-700" />
              <span>Post-Care Guidance</span>
            </div>
            <h2 className="font-serif text-xl font-bold text-forest-900">
              Recovery & Aftercare Instructions:
            </h2>
            <div className="space-y-2.5 text-xs text-text-muted">
              {treatment.aftercare.map((item, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-canvas border border-border-subtle flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0 mt-1.5" />
                  <span className="text-text-main leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* 4. Procedure-Specific FAQs */}
        {treatment.procedureFaqs && treatment.procedureFaqs.length > 0 && (
          <section className="bg-surface rounded-3xl p-6 sm:p-8 border border-border-subtle shadow-soft-card space-y-5">
            <h2 className="font-serif text-2xl font-bold text-forest-900">
              Frequently Asked Questions About {treatment.title}
            </h2>
            <div className="space-y-3">
              {treatment.procedureFaqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div 
                    key={index}
                    className="rounded-2xl border border-border-subtle overflow-hidden bg-canvas transition-colors"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-semibold text-xs sm:text-sm text-forest-900 focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <span>{faq.q}</span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-copper-600 shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-forest-800 shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs text-text-muted leading-relaxed border-t border-stone-200/60 pt-3">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* 5. In-Page Dedicated Consultation Form */}
        <div id="book-appointment" className="pt-4">
          <AppointmentForm defaultService={treatment.title} />
        </div>

      </div>
    </div>
  );
};
