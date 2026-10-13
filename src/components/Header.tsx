import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Phone, MessageCircle, MapPin, Menu, X, Clock, Calendar } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `py-1 relative font-medium transition-colors ${
      isActive
        ? 'text-forest-800 after:w-full font-semibold'
        : 'text-text-main hover:text-forest-800 after:w-0 hover:after:w-full'
    } after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-forest-800 after:transition-all`;

  return (
    <>
      {/* Accessible Skip Navigation Link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 z-50 px-4 py-2.5 bg-forest-800 text-white font-semibold text-xs rounded-lg shadow-elevated outline-none ring-2 ring-copper-500"
      >
        Skip to main content
      </a>

      {/* Top Utility Announcement Strip */}
      <div className="bg-forest-900 text-stone-200 text-xs py-2 px-4 border-b border-forest-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-stone-300">
              <MapPin className="w-3.5 h-3.5 text-copper-500 shrink-0" />
              <span>Opp. B.D.D. Chawl 107, S. S. Amrutwar Marg, Lower Parel / Worli</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-stone-300">
              <Clock className="w-3.5 h-3.5 text-copper-500 shrink-0" />
              <span>{CLINIC_INFO.hours}</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a 
              href={`tel:${CLINIC_INFO.phoneRaw}`} 
              className="hover:text-white transition-colors flex items-center gap-1.5 font-medium py-0.5"
              aria-label={`Call clinic at ${CLINIC_INFO.phone}`}
            >
              <Phone className="w-3.5 h-3.5 text-copper-500 shrink-0" />
              <span>{CLINIC_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className={`sticky top-0 z-40 transition-all duration-200 border-b ${
        isScrolled ? 'glass-header shadow-soft-card py-3' : 'bg-canvas py-4 border-stone-200/80'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Brand Identity */}
          <Link to="/" className="flex items-center gap-3 group shrink-0 focus:outline-none" aria-label={`${CLINIC_INFO.name} Home`}>
            <div className="w-10 h-10 rounded-xl bg-forest-800 text-white flex items-center justify-center shadow-soft-card group-hover:bg-forest-900 transition-colors">
              <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2C8.5 2 6 4.5 6 8c0 3.2 1.2 6.5 2.2 10.2.6 2.3 2 3.8 3.8 3.8s3.2-1.5 3.8-3.8c1-3.7 2.2-7 2.2-10.2 0-3.5-2.5-6-6-6zm0 3.5c1.4 0 2.5 1.1 2.5 2.5 0 .8-.4 1.6-1 2.1-.4-.6-1-1.1-1.5-1.1s-1.1.5-1.5 1.1c-.6-.5-1-1.3-1-2.1 0-1.4 1.1-2.5 2.5-2.5z"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-forest-800 leading-tight">
                {CLINIC_INFO.name}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-text-muted font-semibold">
                {CLINIC_INFO.address.area}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-text-main" aria-label="Main Navigation">
            <NavLink to="/treatments" className={navLinkClass}>
              Treatments
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About Specialist
            </NavLink>
            <NavLink to="/patient-experience" className={navLinkClass}>
              Patient Journey
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Lower Parel Clinic
            </NavLink>
            <a 
              href="/#faqs" 
              className="text-text-main hover:text-forest-800 py-1 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-forest-800 hover:after:w-full after:transition-all"
            >
              FAQs
            </a>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={CLINIC_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-900 border border-emerald-200/80 hover:bg-emerald-100 transition-colors min-h-[44px]"
              aria-label="Direct WhatsApp inquiry"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>WhatsApp</span>
            </a>

            <Link
              to="/appointment"
              className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-semibold bg-forest-800 text-white shadow-soft-card hover:bg-forest-900 transition-all min-h-[44px]"
            >
              <Calendar className="w-3.5 h-3.5 text-copper-100 shrink-0" />
              <span>Request Appointment</span>
            </Link>
          </div>

          {/* Mobile Action Controls */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="p-3 rounded-full bg-surface border border-stone-200 text-forest-800 flex items-center justify-center min-w-[48px] min-h-[48px]"
              aria-label="Call clinic directly"
            >
              <Phone className="w-4 h-4 text-forest-800" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-3 rounded-xl text-text-main hover:bg-surface-subtle focus:outline-none flex items-center justify-center min-w-[48px] min-h-[48px]"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Panel */}
        {mobileMenuOpen && (
          <div 
            className="lg:hidden bg-surface border-b border-stone-200 px-6 py-6 space-y-4 shadow-elevated animate-in fade-in slide-in-from-top-2 duration-200"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Drawer"
          >
            <nav className="flex flex-col space-y-3">
              <Link 
                to="/treatments" 
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-medium text-text-main py-2 hover:text-forest-800 transition-colors"
              >
                Treatments & Services
              </Link>
              <Link 
                to="/about" 
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-medium text-text-main py-2 hover:text-forest-800 transition-colors"
              >
                Lead Specialist Profile
              </Link>
              <Link 
                to="/patient-experience" 
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-medium text-text-main py-2 hover:text-forest-800 transition-colors"
              >
                Patient Care Journey
              </Link>
              <Link 
                to="/contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-medium text-text-main py-2 hover:text-forest-800 transition-colors"
              >
                Lower Parel Clinic & Directions
              </Link>
              <a 
                href="/#faqs" 
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-medium text-text-main py-2 hover:text-forest-800 transition-colors"
              >
                Common Questions (FAQs)
              </a>
            </nav>

            <div className="pt-4 border-t border-stone-100 flex flex-col gap-3">
              <Link
                to="/appointment"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3.5 rounded-xl bg-forest-800 text-white font-medium text-sm min-h-[48px] flex items-center justify-center gap-2 shadow-soft-card"
              >
                <Calendar className="w-4 h-4 text-copper-100" />
                <span>Request Appointment Online</span>
              </Link>
              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3.5 rounded-xl bg-emerald-50 text-emerald-900 border border-emerald-200 font-medium text-sm flex items-center justify-center gap-2 min-h-[48px]"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Chat on WhatsApp ({CLINIC_INFO.phone})</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
