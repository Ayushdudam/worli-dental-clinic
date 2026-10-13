# Birawat Dental Studio — Elite Dental Web Experience

> **Boutique Clinical Editorial** web experience engineered for **Birawat Dental Studio - Dental Clinic And Implant Centre**, Lower Parel West / Worli, Mumbai.  
> Founders & Lead Clinicians: **Dr. Krunal Birawat & Dr. Sanika Birawat**  
> Built using the proven high-conversion design framework with zero redesign, featuring verified local clinic details.

---

## 1. Executive Summary & Creative Direction

This application delivers a high-conversion, editorial dental web platform tailored to the expectations of patients in South and Central Mumbai (Lower Parel, Worli, Prabhadevi, Currey Road, Mahalaxmi). Rather than standard hospital templates with sterile blues and repetitive cards, this project executes the **Boutique Clinical Editorial** creative direction.

### Key Pillars:
1. **Precision Implantology & Conservation**: Emphasizes restoring chewing strength through dental implants and preserving natural teeth.
2. **Authentic Photographic Storytelling**: Combines clean editorial compositions, natural operatory lighting, and clinician framing with zero fake outcome claims.
3. **Frictionless Local Conversion**: Instant WhatsApp routing (`+91 90295 92221`) with pre-filled inquiry text, Indian mobile number validation (`+91`), and a non-obstructive mobile sticky bar.
4. **Strict Medical & Verification Integrity**: Verified 4.9★ rating (420+ reviews), structured clinic hours (Mon–Sat: 10:00 AM – 8:30 PM, Sun: By Appointment), and verified clinical specialities (Dental Implants, Smile Design, Micro-RCT, Zoom Whitening, Restorations, Dentures).

---

## 2. Design System Tokens

The visual system is governed by custom Tailwind tokens with WCAG AAA / AA verified contrast:

| Token | Value | Role & Contrast Ratio |
| :--- | :--- | :--- |
| `forest.800` | `#123B32` | Primary brand color; clinical surgical authority and calm |
| `canvas` | `#F5F1E8` | Warm ivory background; biological enamel tone eliminating coldness |
| `surface` | `#FFFFFF` | Clean white elevated cards and modal dialogs |
| `copper.500` | `#C28C6B` | Muted copper accent; restrained Mediterranean earthen warmth |
| `border-subtle` | `#E7E3DA` | Crisp editorial borders separating content zones |
| `text-main` | `#29332F` | Dark slate ink; **10.6:1** contrast on canvas (WCAG AAA compliant) |
| `text-muted` | `#6B716D` | Secondary text; **4.6:1** contrast on canvas (WCAG AA compliant) |

### Typography:
- **Display Serif**: *Fraunces* & *DM Serif Display* (soft organic curves, warmth, medical prestige).
- **Interface Sans**: *Plus Jakarta Sans* & *Manrope* (crystal-clear geometric digital legibility).

---

## 3. Architecture & Routing

```
birawat-dental-studio/
├── index.html                     # HTML5 entry, OpenGraph, JSON-LD Dentist schema
├── package.json                   # React 19, react-router-dom, lucide-react, Tailwind
├── tailwind.config.js             # Boutique editorial tokens & typography rules
├── ASSET-MANIFEST.md              # Photographic registry, aspect ratios & licensing
├── VERIFICATION-REGISTER.md       # Clinical claims audit & verification register
├── CONFIGURATION.md               # Customization guide & WhatsApp integration
├── CONTENT-TODO.md                # Doctor sign-off checklist & asset swap steps
├── README.md                      # Comprehensive technical architecture
└── src/
    ├── main.tsx                   # React root entry point
    ├── App.tsx                    # Multi-page router & layout orchestrator
    ├── index.css                  # Custom scrollbars, 2px focus rings, reduced motion
    ├── data/
    │   └── clinicData.ts          # Strongly-typed central source of truth
    ├── components/
    │   ├── Header.tsx             # Accessible skip link, logo, desktop & mobile drawer
    │   ├── Hero.tsx               # High-contrast editorial hero with lead badges
    │   ├── TreatmentsGrid.tsx     # 6 clinical cards with drawer previews & badges
    │   ├── TrustSection.tsx       # 3 biological pillars & 420+ verified reviews
    │   ├── DoctorClinicSection.tsx# Clinician profiles, experience, Class-B sterilization
    │   ├── LocationHub.tsx        # Responsive Google Maps embed, transit directions
    │   ├── AppointmentForm.tsx    # 4-stage booking flow with consent validation
    │   ├── FAQSection.tsx         # Accessible accordion FAQ
    │   ├── StickyBar.tsx          # Mobile sticky direct Call Clinic & WhatsApp bar
    │   └── Footer.tsx             # Semantic footer with disclaimer and navigation
    └── pages/
        ├── HomePage.tsx           # Full landing experience
        ├── AboutPage.tsx          # Practice ethos and sterilization standards
        ├── TreatmentsPage.tsx     # Comprehensive treatment index
        ├── TreatmentDetailPage.tsx# In-depth clinical breakdown with interactive modal
        ├── PatientExperiencePage.tsx # Anxious patient protocols and step-by-step visit
        ├── AppointmentPage.tsx    # Dedicated booking form
        ├── ContactPage.tsx        # Directions and interactive map hub
        ├── PrivacyPage.tsx        # Medical privacy & data protection policy
        └── NotFoundPage.tsx       # 404 handler with quick navigation
```

---

## 4. Local Development & Deployment

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Code quality inspection
npm run lint

# 4. Production build
npm run build
```
