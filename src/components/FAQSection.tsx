import React, { useState } from 'react';
import { FAQS, CLINIC_INFO } from '../data/clinicData';
import { ChevronDown, MessageCircle, Phone } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-16 lg:py-20 bg-surface border-b border-border-subtle">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-bold tracking-widest text-copper-600 uppercase">
            Patient Questions & Clarity
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-text-muted">
            Clear, honest answers regarding treatments, comfort protocols, and visiting our {CLINIC_INFO.address.area} practice.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-canvas border border-border-subtle overflow-hidden shadow-soft-card transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 text-sm sm:text-base font-semibold text-forest-900 hover:text-forest-800 transition-colors focus:outline-none min-h-[48px]"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className="flex items-center gap-3">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-forest-100 text-forest-800 hidden sm:inline">
                      {faq.category}
                    </span>
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 text-text-muted shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-forest-800' : ''}`} />
                </button>

                {isOpen && (
                  <div 
                    id={`faq-answer-${idx}`}
                    className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-text-muted leading-relaxed border-t border-stone-200/60"
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Front Desk Inquiry Strip */}
        <div className="p-6 rounded-2xl bg-canvas border border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif font-bold text-base text-forest-900">
              Have a Question That Isn't Listed Here?
            </h4>
            <p className="text-xs text-text-muted">
              Connect directly with our {CLINIC_INFO.address.area} desk on WhatsApp or call our practice.
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href={CLINIC_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-soft-card transition-colors min-h-[44px]"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Ask on WhatsApp</span>
            </a>

            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-surface hover:bg-stone-50 border border-border-subtle text-text-main font-semibold text-xs transition-colors min-h-[44px]"
            >
              <Phone className="w-3.5 h-3.5 text-forest-800" />
              <span>Call Front Desk</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
