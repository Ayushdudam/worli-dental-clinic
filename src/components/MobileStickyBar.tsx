import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const MobileStickyBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  useEffect(() => {
    // Show only after scrolling 200px down to keep the hero uncluttered
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    // Detect if virtual keyboard is active by checking active element focus
    const handleFocusIn = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)) {
        setIsKeyboardOpen(true);
      }
    };

    const handleFocusOut = () => {
      setIsKeyboardOpen(false);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('focusin', handleFocusIn);
    window.addEventListener('focusout', handleFocusOut);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('focusin', handleFocusIn);
      window.removeEventListener('focusout', handleFocusOut);
    };
  }, []);

  if (!isVisible || isKeyboardOpen) {
    return null;
  }

  return (
    <aside 
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-surface/95 backdrop-blur-md border-t border-border-subtle px-3 py-2 pb-[max(0.6rem,env(safe-area-inset-bottom))] shadow-[0_-6px_20px_rgba(18,59,50,0.08)] transition-all animate-in fade-in slide-in-from-bottom-2 duration-300"
      aria-label="Quick Mobile Actions"
    >
      <div className="flex items-center justify-between gap-2 max-w-sm mx-auto">
        <a
          href={`tel:${CLINIC_INFO.phoneRaw}`}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-surface border border-forest-800/30 text-forest-800 font-medium text-xs shadow-sm active:bg-surface-subtle transition-colors min-h-[44px]"
          aria-label={`Call ${CLINIC_INFO.name} at ${CLINIC_INFO.phone}`}
        >
          <Phone className="w-3.5 h-3.5 text-forest-800 shrink-0" />
          <span className="font-semibold">Call Clinic</span>
        </a>

        <a
          href={CLINIC_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-emerald-600 active:bg-emerald-700 text-white font-medium text-xs shadow-sm transition-colors min-h-[44px]"
          aria-label={`Message ${CLINIC_INFO.name} on WhatsApp`}
        >
          <MessageCircle className="w-3.5 h-3.5 text-emerald-100 shrink-0" />
          <span className="font-semibold">WhatsApp</span>
        </a>
      </div>
    </aside>
  );
};
