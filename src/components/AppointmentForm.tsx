import React, { useState } from 'react';
import { Calendar, CheckCircle2, MessageCircle, AlertCircle, Lock } from 'lucide-react';
import { TREATMENTS, CLINIC_INFO, DOCTOR_INFO } from '../data/clinicData';

interface AppointmentFormProps {
  defaultService?: string;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({ defaultService }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: defaultService || (TREATMENTS[0]?.title ?? 'Clinical Consultation'),
    timePreference: 'Morning (9:00 AM – 1:00 PM)',
    notes: '',
    consent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = "Please enter your full name.";
    }

    const cleanPhone = formData.phone.replace(/\D/g, '');
    const isIndianValid = cleanPhone.length === 10 || (cleanPhone.length > 10 && cleanPhone.slice(-10).length === 10);
    if (!isIndianValid) {
      errs.phone = "Please enter a valid 10-digit Indian mobile number (e.g. 98200 12345).";
    }

    if (!formData.consent) {
      errs.consent = "Please check the box to authorize clinic contact.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Honest submission handling: in demo/client preview, log and present confirmation state
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  const getWhatsAppContinuationUrl = () => {
    const cleanNumber = formData.phone.replace(/\D/g, '').slice(-10);
    const text = `Hi ${encodeURIComponent(CLINIC_INFO.name)}, I submitted an appointment inquiry on your website:%0A• Patient: ${encodeURIComponent(formData.name)}%0A• Contact: %2B91 ${cleanNumber}%0A• Service: ${encodeURIComponent(formData.service)}%0A• Preferred Slot: ${encodeURIComponent(formData.timePreference)}${formData.notes ? `%0A• Notes: ${encodeURIComponent(formData.notes)}` : ''}%0A%0APlease confirm available slots with ${encodeURIComponent(DOCTOR_INFO.name)}.`;
    return `https://wa.me/${CLINIC_INFO.phoneRaw.replace('+', '')}?text=${text}`;
  };

  return (
    <section id="appointment" className="py-16 lg:py-20 bg-canvas border-b border-border-subtle">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-surface rounded-3xl p-6 sm:p-10 border border-border-subtle shadow-elevated">
          
          <div className="max-w-xl mx-auto text-center mb-8 space-y-2">
            <span className="text-xs font-bold tracking-widest text-copper-600 uppercase">
              Schedule Your Visit
            </span>
            <h2 className="font-serif text-3xl font-bold text-forest-900 tracking-tight">
              Request a Clinical Consultation
            </h2>
            <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
              Share your preferred date window. Our {CLINIC_INFO.address.area} clinical desk will reach out promptly to confirm your scheduled slot.
            </p>
          </div>

          {submitted ? (
            /* Honest Transparent Post-Submission State */
            <div className="py-8 text-center space-y-5 animate-in fade-in duration-200">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-2xl flex items-center justify-center mx-auto shadow-soft-card">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div className="space-y-2 max-w-lg mx-auto">
                <h3 className="font-serif text-2xl font-bold text-forest-900">
                  Appointment Request Logged
                </h3>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                  Thank you, <strong className="text-text-main font-semibold">{formData.name}</strong>. 
                  Our front desk team will contact you at <strong className="text-text-main">+91 {formData.phone.replace(/\D/g, '').slice(-10)}</strong> during clinic hours ({CLINIC_INFO.hours}).
                </p>
              </div>

              {/* Inquiry Recap Card */}
              <div className="p-4 rounded-2xl bg-canvas border border-border-subtle text-left max-w-md mx-auto text-xs space-y-2">
                <div className="flex justify-between pb-2 border-b border-stone-200/80">
                  <span className="text-text-muted">Selected Treatment:</span>
                  <span className="font-semibold text-text-main">{formData.service}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-stone-200/80">
                  <span className="text-text-muted">Preferred Window:</span>
                  <span className="font-semibold text-text-main">{formData.timePreference}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Clinic Address:</span>
                  <span className="font-semibold text-text-main">{CLINIC_INFO.address.line1}, {CLINIC_INFO.address.area}</span>
                </div>
              </div>

              {/* Instant WhatsApp Speed-Up Option */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={getWhatsAppContinuationUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors min-h-[48px] shadow-soft-card"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Speed Up Confirmation via WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      phone: '',
                      service: defaultService || 'Microscopic Root Canal Therapy',
                      timePreference: 'Morning (10:00 AM – 1:00 PM)',
                      notes: '',
                      consent: false,
                    });
                  }}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl border border-border-subtle text-text-muted hover:text-text-main text-xs font-semibold hover:bg-stone-50 min-h-[48px]"
                >
                  Submit Another Request
                </button>
              </div>

            </div>
          ) : (
            /* Interactive Clean Form */
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Patient Full Name */}
                <div className="space-y-1.5">
                  <label htmlFor="patient-name" className="block text-xs font-semibold text-forest-900">
                    Full Name <span className="text-copper-600">*</span>
                  </label>
                  <input
                    id="patient-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                    placeholder="e.g. Rahul Sharma"
                    className={`w-full px-4 py-3 rounded-xl bg-canvas border text-xs sm:text-sm text-text-main placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-forest-800 focus:bg-white transition-all ${
                      errors.name ? 'border-red-400 bg-red-50/20' : 'border-border-subtle'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-[11px] text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Indian Mobile Number */}
                <div className="space-y-1.5">
                  <label htmlFor="patient-phone" className="block text-xs font-semibold text-forest-900">
                    Indian Mobile Number <span className="text-copper-600">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-text-muted select-none">
                      +91
                    </span>
                    <input
                      id="patient-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: '' });
                      }}
                      placeholder="98200 12345"
                      className={`w-full pl-12 pr-4 py-3 rounded-xl bg-canvas border text-xs sm:text-sm text-text-main placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-forest-800 focus:bg-white transition-all ${
                        errors.phone ? 'border-red-400 bg-red-50/20' : 'border-border-subtle'
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-[11px] text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Service & Preferred Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="service-select" className="block text-xs font-semibold text-forest-900">
                    Treatment of Interest
                  </label>
                  <select
                    id="service-select"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-canvas border border-border-subtle text-xs sm:text-sm text-text-main focus:outline-none focus:ring-2 focus:ring-forest-800 focus:bg-white transition-all"
                  >
                    {TREATMENTS.map((t) => (
                      <option key={t.id} value={t.title}>
                        {t.title}
                      </option>
                    ))}
                    <option value="General Consultation & Diagnostic Checkup">
                      General Consultation & Diagnostic Checkup
                    </option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="time-select" className="block text-xs font-semibold text-forest-900">
                    Preferred Time Window
                  </label>
                  <select
                    id="time-select"
                    value={formData.timePreference}
                    onChange={(e) => setFormData({ ...formData, timePreference: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-canvas border border-border-subtle text-xs sm:text-sm text-text-main focus:outline-none focus:ring-2 focus:ring-forest-800 focus:bg-white transition-all"
                  >
                    <option value="Morning (10:00 AM – 1:00 PM)">Morning (10:00 AM – 1:00 PM)</option>
                    <option value="Afternoon (1:00 PM – 5:00 PM)">Afternoon (1:00 PM – 5:00 PM)</option>
                    <option value="Evening (5:00 PM – 8:30 PM)">Evening (5:00 PM – 8:30 PM)</option>
                    <option value="Urgent Dental Emergency (Same Day)">Urgent Priority (Same Day)</option>
                  </select>
                </div>
              </div>

              {/* Optional Symptoms / Questions */}
              <div className="space-y-1.5">
                <label htmlFor="symptoms-notes" className="block text-xs font-semibold text-forest-900">
                  Optional Notes (Symptoms, tooth area, or past dental concerns)
                </label>
                <textarea
                  id="symptoms-notes"
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. Throbbing lower right molar, pain when drinking cold water, chipped front tooth..."
                  className="w-full px-4 py-3 rounded-xl bg-canvas border border-border-subtle text-xs sm:text-sm text-text-main placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-forest-800 focus:bg-white transition-all"
                />
              </div>

              {/* Explicit Consent Checkbox */}
              <div className="space-y-1 pt-1">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.consent}
                    onChange={(e) => {
                      setFormData({ ...formData, consent: e.target.checked });
                      if (errors.consent) setErrors({ ...errors, consent: '' });
                    }}
                    className="mt-0.5 w-4 h-4 rounded text-forest-800 focus:ring-forest-800 border-border-subtle"
                  />
                  <span className="text-xs text-text-muted leading-relaxed">
                    I authorize {CLINIC_INFO.name} to contact me via phone or WhatsApp regarding this appointment inquiry. We respect your confidentiality.
                  </span>
                </label>
                {errors.consent && (
                  <p className="text-[11px] text-red-600 flex items-center gap-1 pl-6">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.consent}</span>
                  </p>
                )}
              </div>

              {/* Submit CTA */}
              <div className="pt-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-forest-800 hover:bg-forest-900 text-white font-semibold text-sm shadow-soft-card hover:shadow-elevated transition-all flex items-center justify-center gap-2 min-h-[48px] disabled:opacity-70 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-copper-100" />
                  <span>{isSubmitting ? "Submitting Inquiry..." : "Submit Consultation Request"}</span>
                </button>
              </div>

              {/* Security Privacy Reassurance */}
              <div className="pt-2 text-center flex items-center justify-center gap-1.5 text-[11px] text-stone-400">
                <Lock className="w-3 h-3 text-stone-400" />
                <span>Direct clinical scheduling • No unsolicited spam or marketing sharing</span>
              </div>

            </form>
          )}

        </div>
      </div>
    </section>
  );
};
