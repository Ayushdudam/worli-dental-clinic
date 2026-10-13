# BIRAWAT DENTAL STUDIO — ASSET MANIFEST (`ASSET-MANIFEST.md`)

This manifest documents all visual and photographic assets utilized across the **Birawat Dental Studio** digital web experience. No stock asset is portrayed as verified clinic property or actual patient outcome. Temporary photographic assets are licensed for demonstration and labeled for seamless client replacement.

---

## 1. Photographic Asset Registry

| ID | Location / Component | Subject / Purpose | Dimensions & Aspect Ratio | Current Source & Status | Alt Text Specification | Target Clinic Asset |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `IMG-01` | **Hero** (`src/components/Hero.tsx`) | Doctor & patient unhurried consultation in a calm, modern operatory | $1000 \times 1250\text{px}$ (4:5 mobile / 16:14 desktop) | Unsplash licensed temporary demonstration asset (`photo-1629909613654-28e377c37b09`) | *"Doctor and patient consultation in a modern, calm dental operatory at Birawat Dental Studio"* | Official consultation photo of Dr. Krunal & Dr. Sanika |
| `IMG-02` | **Trust Section** (`src/components/TrustSection.tsx`) | Quiet, hygienic private operatory suite and dental chair | $800 \times 600\text{px}$ (4:3) | Unsplash licensed temporary demonstration asset (`photo-1588776814546-1ffcf47267a5`) | *"Quiet, hygienic private dental operatory room at Birawat Dental Studio in Lower Parel / Worli"* | Real operatory room at S. S. Amrutwar Marg |
| `IMG-03` | **Clinician Profile** (`src/components/DoctorClinicSection.tsx` & `src/pages/AboutPage.tsx`) | Clinician portrait in clinical attire | $800 \times 1066\text{px}$ (3:4) | Unsplash licensed temporary demonstration portrait (`photo-1559839734-2b71ea197ec2`) | *"Dr. Krunal Birawat & Dr. Sanika Birawat — Founders & Specialists at Birawat Dental Studio, Lower Parel / Worli"* | Verified professional portraits of Dr. Krunal & Dr. Sanika |
| `IMG-04` | **Location Map** (`src/components/LocationHub.tsx`) | Interactive Google Maps embed with landmark pin | $100% \times 400\text{px}$ responsive iframe | Google Maps Embed (`S. S. Amrutwar Marg, Lower Parel West / Worli, Mumbai 400013`) | *"Birawat Dental Studio Lower Parel Worli Mumbai Location"* | Live Google Business Profile Map |

---

## 2. Iconography & SVG Graphics

All icons are rendered through [Lucide React](https://lucide.dev/), maintaining a uniform 2px stroke weight and clinical geometry:

| Symbol / Icon | Lucide Component | Clinical Purpose |
| :--- | :--- | :--- |
| **Tooth Brand Crest** | Inline SVG (`Header.tsx`, `Footer.tsx`) | Biological tooth icon rendered in forest green `#123B32` |
| **Implants** | `ShieldCheck` | Titanium osseointegration and permanent replacement |
| **Smile Design** | `Sparkles` | Porcelain veneer smile aesthetics |
| **Whitening** | `Sparkles` | Zoom clinical enamel brightening |
| **Micro-RCT** | `ShieldCheck` | Single & multi-sitting pain-free endodontics |
| **Restorative** | `CheckCircle` | Invisible tooth-colored resin fillings & zirconia crowns |
| **Dentures** | `CheckCircle` | Precision removable partial & complete dentures |
| **Safety** | `ShieldCheck` | Class-B fractionated pre-vacuum autoclave |
| **Pacing** | `HeartHandshake` | Hand-signal patient pause protocol |
