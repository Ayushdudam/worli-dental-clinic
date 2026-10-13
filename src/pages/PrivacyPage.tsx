import React from 'react';
import { Link } from 'react-router-dom';
import { CLINIC_INFO, DOCTOR_INFO } from '../data/clinicData';
import { Lock, ArrowLeft } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="py-12 lg:py-16 bg-canvas min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-forest-800 hover:text-copper-600 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Homepage</span>
        </Link>

        <div className="bg-surface rounded-3xl p-6 sm:p-10 border border-border-subtle shadow-elevated space-y-8">
          <div className="space-y-3 pb-6 border-b border-stone-100">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-forest-800">
              <Lock className="w-4 h-4 text-emerald-700" />
              <span>Medical & Patient Data Transparency</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-forest-900">
              Patient Privacy & Confidentiality Commitment
            </h1>
            <p className="text-xs sm:text-sm text-text-muted">
              Last updated: October 2026 • {CLINIC_INFO.name}, Lower Parel / Worli, Mumbai
            </p>
          </div>

          <div className="space-y-6 text-xs sm:text-sm text-text-muted leading-relaxed">
            <section className="space-y-2">
              <h2 className="font-serif text-lg font-bold text-forest-900">
                1. Information Collected Through Our Website
              </h2>
              <p>
                When you submit an appointment inquiry or contact us via our website, we collect only essential contact and triage information:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-text-main">
                <li>Your full name</li>
                <li>Your 10-digit Indian mobile telephone number</li>
                <li>Your treatment of interest (e.g. root canal therapy, smile design, routine cleaning)</li>
                <li>Your preferred consultation time window</li>
                <li>Any voluntary clinical symptom notes you choose to share</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-lg font-bold text-forest-900">
                2. How Your Information is Used
              </h2>
              <p>
                Your information is used exclusively by our clinic reception team and {DOCTOR_INFO.name} to:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-text-main">
                <li>Confirm clinical appointment availability at our Lower Parel / Worli practice</li>
                <li>Answer specific clinical questions submitted in your inquiry notes</li>
                <li>Provide pre-consultation guidance regarding radiography or fasting when applicable</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-lg font-bold text-forest-900">
                3. Zero Third-Party Sharing or Marketing Monetization
              </h2>
              <p>
                We maintain doctor-patient confidentiality as guided by the Medical and Dental Councils of India. We never sell, rent, lease, or share your contact numbers or medical notes with insurance brokers, pharmaceutical marketers, advertising networks, or third-party lead aggregators.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-lg font-bold text-forest-900">
                4. WhatsApp Communication Security
              </h2>
              <p>
                When you initiate a WhatsApp conversation using the direct buttons on our site, your messages are subject to WhatsApp’s end-to-end encryption. Clinical radiographs, treatment plans, or invoices sent via WhatsApp are handled solely by authorized clinic personnel.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-lg font-bold text-forest-900">
                5. Data Retention & Deletion Requests
              </h2>
              <p>
                You may request the deletion or correction of your inquiry contact record at any time by contacting our clinic desk:
              </p>
              <div className="p-4 rounded-xl bg-canvas border border-border-subtle space-y-1 text-xs">
                <p><strong>Practice:</strong> {CLINIC_INFO.name}</p>
                <p><strong>Address:</strong> {CLINIC_INFO.address.line1}, {CLINIC_INFO.address.line2}, {CLINIC_INFO.address.area} - {CLINIC_INFO.address.pincode}</p>
                <p><strong>Phone:</strong> {CLINIC_INFO.phone}</p>
                <p><strong>Email:</strong> {CLINIC_INFO.email}</p>
              </div>
            </section>
          </div>
        </div>

      </div>
    </div>
  );
};
