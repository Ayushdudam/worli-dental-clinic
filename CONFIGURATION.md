# BIRAWAT DENTAL STUDIO — CONFIGURATION GUIDE (`CONFIGURATION.md`)

This guide explains how to customize and maintain the Birawat Dental Studio web codebase, configure backend integrations, and manage environment settings.

---

## 1. Centralized Clinic Configuration (`src/data/clinicData.ts`)

All clinical text, doctor credentials, operating hours, telephone numbers, and treatment data are centralized in a single TypeScript configuration file: `src/data/clinicData.ts`.

### Modifying Contact Information:
```typescript
export const CLINIC_INFO = {
  name: "Birawat Dental Studio",
  tagline: "Dental Clinic & Implant Centre in Lower Parel & Worli",
  address: {
    line1: "Opposite B.D.D. Chawl No. 107",
    line2: "S. S. Amrutwar Marg, near Padmashali Chowk",
    area: "Lower Parel West / Worli, Mumbai",
    pincode: "400013",
    state: "Maharashtra, India",
    landmark: "Opposite B.D.D. Chawl 107 & near Padmashali Chowk"
  },
  phone: "+91 90295 92221",
  phoneRaw: "+919029592221",
  whatsappUrl: "https://wa.me/919029592221?text=...",
  email: "birawatdentalstudio@gmail.com",
  instagram: "@birawatdentalstudio",
  hours: "Mon – Sat: 10:00 AM – 8:30 PM | Sun: By Appointment",
  verifiedRating: "4.9 / 5.0 (420+ Verified Reviews)",
  googleMapsUrl: "https://maps.google.com/?q=Birawat+Dental+Studio+SS+Amrutwar+Marg+Lower+Parel+Mumbai+400013",
  googleMapsEmbed: "https://maps.google.com/maps?q=SS+Amrutwar+Marg+Lower+Parel+West+Worli+Mumbai+400013&t=&z=16&ie=UTF8&iwloc=&output=embed",
};
```

### Adding or Updating Treatments:
To add or modify treatments, edit the `TREATMENTS` array conforming to the `Treatment` interface in `src/data/clinicData.ts`.

---

## 2. Design System Tokens (`tailwind.config.js`)

The visual design system is driven by Tailwind CSS tokens configured in `tailwind.config.js`:

| Token Name | Color Hex | Psychological Purpose |
| :--- | :--- | :--- |
| `forest.800` | `#123B32` | Clinical surgical authority and calm |
| `canvas` | `#F5F1E8` | Warm ivory background; biological enamel tone eliminating clinical sterility |
| `surface` | `#FFFFFF` | Crisp white cards, dialogs, and navigation background |
| `copper.500` | `#C28C6B` | Restrained Mediterranean earthen warmth |
| `border-subtle` | `#E7E3DA` | Precision editorial separation borders |

---

## 3. Deployment Configuration

Configured for single-page application routing on Vercel via `vercel.json`:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```
