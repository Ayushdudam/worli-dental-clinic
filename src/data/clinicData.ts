export interface Treatment {
  id: string;
  slug: string;
  title: string;
  category: string;
  patientConcern: string;
  shortDesc: string;
  duration: string;
  suitableFor: string;
  iconName: string;
  fullDesc: string;
  process: string[];
  clinicalHighlights: string[];
  reasonsForAssessment: string[];
  clinicalStages: {
    step: string;
    title: string;
    detail: string;
  }[];
  questionsToAsk: string[];
  aftercare: string[];
  procedureFaqs: {
    q: string;
    a: string;
  }[];
  featured: boolean;
  needsClinicConfirmation?: boolean;
}

export const CLINIC_INFO = {
  name: "Dental Clinic Worli",
  tagline: "General, Restorative & Preventive Dental Care in Worli",
  address: {
    line1: "D. Chawl, B.D. Bansode Road",
    line2: "BDD Chawls, near Podar / Worli Naka",
    area: "Worli, Mumbai",
    pincode: "400013",
    state: "Maharashtra, India",
    landmark: "B.D. Bansode Road, BDD Chawls"
  },
  phone: "+91 98677 80503",
  phoneRaw: "+919867780503",
  alternatePhone: "+91 98677 80503",
  whatsappUrl: "https://wa.me/919867780503?text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20an%20appointment%20at%20Dental%20Clinic%20Worli",
  email: "worli-dental-clinic@gmail.com",
  instagram: "@worlidentalclinic",
  hours: "Mon – Sat: 10:00 AM – 8:30 PM | Sun: By Appointment",
  hoursDetail: [
    { days: "Monday – Saturday", time: "10:00 AM – 8:30 PM", status: "Full Clinical Service" },
    { days: "Sunday", time: "10:00 AM – 2:00 PM", status: "Prior Appointment / Emergency Care" },
  ],
  verifiedRating: "5.0 / 5.0 (12+ Verified Reviews)",
  googleMapsUrl: "https://maps.google.com/?q=Dental+Clinic+BD+Bansode+Road+Worli+Mumbai+400013",
  googleMapsEmbed: "https://maps.google.com/maps?q=BD+Bansode+Road+BDD+Chawls+Worli+Mumbai+400013&t=&z=16&ie=UTF8&iwloc=&output=embed",
};

export const DOCTOR_INFO = {
  name: "Lead Dental Specialist",
  leadName: "Lead Clinician",
  partnerName: "Lead Dental Specialist",
  qualification: "B.D.S. • Dental Surgeon",
  title: "Founder & Lead Dental Surgeon",
  speciality: "Comprehensive Family Dentistry, Root Canal Therapy & Restorations",
  councilRegistration: "Maharashtra State Dental Council (MSDC)",
  experienceYears: 10,
  philosophy: "Providing gentle, honest dental solutions tailored to every patient with clinical precision and complete transparency.",
  bio: "Dental Clinic Worli provides patient-focused, gentle dentistry in the heart of Worli BDD Chawls. Backed by 5.0-star patient satisfaction, the practice is committed to painless tooth preservation and accessible oral healthcare.",
  affiliations: [
    "Indian Dental Association (IDA)",
    "Maharashtra State Dental Council (MSDC)",
    "Mumbai Dental Practitioners Forum",
  ],
  needsClinicConfirmation: false,
};

export const TREATMENTS: Treatment[] = [
  {
    id: "implants",
    slug: "dental-implants",
    title: "Dental Implants & Fixed Tooth Replacement",
    category: "Implantology",
    patientConcern: "Missing teeth, loose dentures, difficulty chewing food, bone loss",
    shortDesc: "Titanium and ceramic osseointegrated dental implants restoring 100% natural chewing strength and facial volume.",
    duration: "2–3 Stages across healing window",
    suitableFor: "Single or multiple missing teeth, loose partial plates, permanent fixed bridges",
    iconName: "ShieldCheck",
    fullDesc: "Dental implants are the global gold standard for permanent tooth replacement. A medical-grade titanium fixture integrates seamlessly into your jawbone, topped by a handcrafted monolithic ceramic crown that matches your natural teeth.",
    process: [
      "Digital 3D CBCT scan & bone density evaluation",
      "Precision guided surgical placement under gentle local anesthesia",
      "Bio-integration healing window with custom temporary crown",
      "Placement of definitive zirconia crown crafted for seamless occlusion"
    ],
    clinicalHighlights: [
      "Prevents progressive jawbone shrinkage and facial sagging",
      "Zero cutting or damage to adjacent healthy teeth",
      "Restores 100% biting power to eat hard and fibrous foods",
      "Engineered for lifelong durability with proper oral hygiene"
    ],
    reasonsForAssessment: [
      "You have one or multiple missing teeth impacting chewing",
      "Loose removable dentures that slip or cause sore gums",
      "A failing bridge or cracked tooth that cannot be saved"
    ],
    clinicalStages: [
      { step: "01", title: "Diagnostic CBCT & Planning", detail: "3D imaging measures bone height and width to map exact implant angulation." },
      { step: "02", title: "Micro-Surgical Fixture Placement", detail: "The titanium implant is placed comfortably under local numbing." },
      { step: "03", title: "Osseointegration Period", detail: "Bone cells bond permanently with the micro-textured titanium surface." },
      { step: "04", title: "Digital Impression & Crown Delivery", detail: "A custom zirconia crown is milled and fixed securely." }
    ],
    questionsToAsk: [
      "Will I need bone grafting before implant placement?",
      "Can I receive a natural-looking temporary crown on the same day?",
      "What brand of certified medical-grade implant system do you use?"
    ],
    aftercare: [
      "Cold compress on the cheek for the first 12 hours to minimize swelling",
      "Soft food diet for 3 to 5 days; avoid chewing directly on the surgical site",
      "Gentle warm salt water rinses starting 24 hours post-procedure"
    ],
    procedureFaqs: [
      { q: "Is dental implant surgery painful?", a: "Implant placement is performed under profound local anesthesia. Most patients report less discomfort than a routine extraction, easily managed with standard analgesics." },
      { q: "How long do dental implants last?", a: "With regular cleanings and daily flossing, dental implants have documented clinical success rates exceeding 95% over 20+ years." }
    ],
    featured: true
  },
  {
    id: "cosmetic",
    slug: "smile-design-and-veneers",
    title: "Smile Design & Porcelain Veneers",
    category: "Aesthetic Dentistry",
    patientConcern: "Gapped teeth, chipped edges, uneven enamel, deep intrinsic discoloration",
    shortDesc: "Custom handcrafted ultra-thin porcelain laminates and composite veneers engineered for natural light reflection.",
    duration: "2 Visits • 60–90 mins each",
    suitableFor: "Chipped teeth, stubborn stains, minor gaps, worn bite edges",
    iconName: "Sparkles",
    fullDesc: "Modern smile design preserves maximum natural tooth enamel using minimally invasive ultrathin ceramic laminates tailored to your facial proportions.",
    process: [
      "Facial proportion analysis & digital mock-up preview",
      "Conservative micro-enamel preparation (0.3mm – 0.5mm)",
      "High-precision digital intraoral scanning",
      "Adhesive bonding of custom laboratory-milled ceramic veneers"
    ],
    clinicalHighlights: [
      "Ultra-conservative enamel preparation preserving tooth vitality",
      "Stain-resistant high-density ceramic impervious to tea and coffee",
      "Tailored tooth shape and translucency matching natural dentition"
    ],
    reasonsForAssessment: [
      "Deep enamel discoloration unresponsive to clinical whitening",
      "Chipped, uneven, or jagged edges from past wear or grinding",
      "Spacing or mild misalignment without orthodontic braces"
    ],
    clinicalStages: [
      { step: "01", title: "Aesthetic Consultation & Trial Smile", detail: "Digital simulation previews tooth length, shape, and smile curvature." },
      { step: "02", title: "Enamel Preparation & Scanning", detail: "Microscopic enamel preparation creates space for wafer-thin ceramic." },
      { step: "03", title: "Artisan Ceramic Fabrication", detail: "Master dental technicians handcraft layered ceramic veneers." },
      { step: "04", title: "Resin-Bonded Cementation", detail: "Permanent adhesive bonding creates high shear bond strength." }
    ],
    questionsToAsk: [
      "Can I preview my new smile before any tooth preparation?",
      "How much natural enamel needs to be shaped?",
      "Are porcelain veneers stain-resistant against curries and coffee?"
    ],
    aftercare: [
      "Wear a custom nightguard if you have a habit of clenching or grinding",
      "Avoid biting hard non-food objects like pens, ice cubes, or bottle caps",
      "Maintain twice-daily gentle brushing with non-abrasive fluoride toothpaste"
    ],
    procedureFaqs: [
      { q: "Do veneers look artificial or too bulky?", a: "No. Modern porcelain laminates are hand-layered with varying translucency at the incisal edge, creating a completely natural smile that harmonizes with your facial contours." },
      { q: "How long do porcelain veneers last?", a: "High-grade porcelain veneers typically last 10 to 15+ years with proper oral hygiene and regular clinical checkups." }
    ],
    featured: true
  },
  {
    id: "whitening",
    slug: "teeth-whitening",
    title: "In-Clinic Laser & Zoom Teeth Whitening",
    category: "Preventive & Cosmetic",
    patientConcern: "Yellow enamel, tea and coffee stains, dull smile, wedding or event prep",
    shortDesc: "Safe, chairside LED-accelerated enamel brightening lightening shades in a single controlled session.",
    duration: "Single Session • 45–60 mins",
    suitableFor: "Extrinsic discoloration, smokers stains, aging enamel yellowing",
    iconName: "Sparkles",
    fullDesc: "Clinical in-office whitening uses medical-grade hydrogen peroxide activated by targeted cool-light LEDs, gently breaking down deep chromogens without damaging your enamel mineral structure.",
    process: [
      "Gum barrier protection using light-cured gingival resin",
      "Application of buffered medical bleaching formulation",
      "Cool LED light activation in three 15-minute intervals",
      "Post-treatment fluoride desensitizing polish"
    ],
    clinicalHighlights: [
      "Brightens up to 6–8 shades in a single 60-minute appointment",
      "Formulated with potassium nitrate to prevent post-op sensitivity",
      "Gingival resin shield protects delicate gum margins"
    ],
    reasonsForAssessment: [
      "Noticeable yellowing or darkening of enamel over time",
      "Stains from daily coffee, tea, red wine, or tobacco consumption",
      "Upcoming wedding, presentation, or celebration requiring an immediate boost"
    ],
    clinicalStages: [
      { step: "01", title: "Shade Baseline Assessment", detail: "VITA shade guide records your initial tooth shade accurately." },
      { step: "02", title: "Gingival Barrier Isolation", detail: "Liquid dam protects gums and lips from the active formulation." },
      { step: "03", title: "LED Light Cycles", detail: "Three 15-minute cycles break down stains deep in the enamel matrix." },
      { step: "04", title: "Enamel Hydration Polish", detail: "Remineralizing fluoride paste prevents transient temperature sensitivity." }
    ],
    questionsToAsk: [
      "How many shades lighter can I expect my teeth to become?",
      "Will the whitening treatment cause tooth sensitivity?",
      "How long will my whitening results last?"
    ],
    aftercare: [
      "Follow the 'White Diet' for 48 hours: avoid black tea, coffee, turmeric, and colas",
      "Use a desensitizing potassium nitrate toothpaste for 3 days post-treatment",
      "Rinse with plain water after consuming dark beverages in the future"
    ],
    procedureFaqs: [
      { q: "Does clinical teeth whitening weaken enamel?", a: "No. Professional chairside whitening utilizes buffered formulations that break down pigment molecules within the enamel without stripping mineral density." },
      { q: "How long do whitening results last?", a: "Results typically last 1 to 2 years, depending on dietary habits and oral hygiene routines." }
    ],
    featured: true
  },
  {
    id: "rct",
    slug: "root-canal-therapy",
    title: "Microscopic Root Canal Therapy (RCT)",
    category: "Endodontics",
    patientConcern: "Severe throbbing toothache, sensitivity to hot liquids, chewing tenderness, abscess",
    shortDesc: "Painless single or multi-sitting rotary endodontics designed to extinguish pain and rescue your natural tooth.",
    duration: "1–2 Sittings • 45–60 mins",
    suitableFor: "Deep decay, pulpitis, cracked teeth, trauma, recurrent infections",
    iconName: "ShieldCheck",
    fullDesc: "Modern root canal treatment is completely painless under computerized rotary instrumentation and electronic apex locators. Rather than extracting your tooth, we gently remove infected nerve tissue and hermetically seal the canals.",
    process: [
      "Digital radiography & gentle computerized local anesthesia",
      "Rubber dam isolation for hospital-grade sterile operation",
      "NiTi rotary cleaning & chemical irrigation",
      "Hermetic gutta-percha seal followed by custom protective crown"
    ],
    clinicalHighlights: [
      "Immediate elimination of acute throbbing toothache",
      "Preserves the natural root anchor within your jawbone",
      "Completed comfortably in a single sitting in suitable cases",
      "High-magnification visualization ensures zero missed canals"
    ],
    reasonsForAssessment: [
      "Spontaneous throbbing pain that keeps you awake at night",
      "Lingering sharp pain when drinking hot coffee or tea",
      "Pimple-like swelling on the gums or tenderness when chewing"
    ],
    clinicalStages: [
      { step: "01", title: "Diagnosis & Gentle Numbing", detail: "Low-radiation digital radiography identifies the extent of infection." },
      { step: "02", title: "Canal Cleaning & Disinfection", detail: "Rotary NiTi instruments clear bacterial biofilm with gentle irrigation." },
      { step: "03", title: "Hermetic 3D Sealing", detail: "Canals are sealed with biocompatible gutta-percha and sealer." },
      { step: "04", title: "Crown Restoration", detail: "A zirconia or ceramic crown restores full chewing strength." }
    ],
    questionsToAsk: [
      "Can this root canal be completed in a single appointment?",
      "Is a protective crown mandatory after the root canal?",
      "What type of anesthesia is used to prevent pain during treatment?"
    ],
    aftercare: [
      "Avoid chewing hard foods on the treated side until the permanent crown is placed",
      "Take prescribed anti-inflammatory medication on schedule for 24-48 hours",
      "Continue gentle brushing and flossing around the temporary restoration"
    ],
    procedureFaqs: [
      { q: "Is a root canal painful?", a: "With modern local anesthesia and rotary files, root canal treatment is as comfortable as getting a routine filling. It relieves the pain caused by tooth decay." },
      { q: "Why save a tooth instead of pulling it?", a: "Your natural tooth root maintains jawbone volume and chewing efficiency. Tooth extraction creates gaps that shift adjacent teeth and requires costlier replacement." }
    ],
    featured: true
  },
  {
    id: "restorative",
    slug: "restorations-and-crowns",
    title: "Tooth-Colored Restorations & Zirconia Crowns",
    category: "Restorative Dentistry",
    patientConcern: "Cavities, dark silver fillings, cracked cusps, food packing between teeth",
    shortDesc: "Biomimetic composite resin fillings and monolithic zirconia crowns restoring biological strength and invisible aesthetics.",
    duration: "1–2 Visits • 30–60 mins",
    suitableFor: "Decayed teeth, old amalgam replacements, broken cusps, worn biting surfaces",
    iconName: "CheckCircle",
    fullDesc: "We eliminate dark metal amalgam fillings in favor of biocompatible nano-hybrid composite resins and monolithic zirconia ceramic crowns, bonded with microscopic precision.",
    process: [
      "Gentle removal of decay while conserving healthy tooth structure",
      "Total-etch adhesive conditioning and bonding layer",
      "Incremental layering of shade-matched nano-hybrid composite",
      "High-gloss polish for plaque resistance and smooth tongue feel"
    ],
    clinicalHighlights: [
      "100% mercury-free, biocompatible resin formulation",
      "Shade-matched to your tooth with natural translucency",
      "Instant curing allows immediate chewing capability",
      "Strengthens remaining tooth structure against fractures"
    ],
    reasonsForAssessment: [
      "Visible dark spots, cavities, or food catching between back molars",
      "Replacing old, leaking, dark silver amalgam fillings",
      "Chipped or fractured tooth cusp needing crown reinforcement"
    ],
    clinicalStages: [
      { step: "01", title: "Cavity Debridement", detail: "Decayed tissue is gently cleared under optical magnification." },
      { step: "02", title: "Adhesive Priming", detail: "Micro-mechanical bonding agents ensure strong attachment to enamel." },
      { step: "03", title: "Layered Composite Artistry", detail: "Resin is sculpted in increments to recreate natural dental anatomy." },
      { step: "04", title: "Bite Check & Polish", detail: "Occlusion is fine-tuned so your bite feels completely normal." }
    ],
    questionsToAsk: [
      "Do composite fillings match my exact natural tooth color?",
      "How long do tooth-colored restorations typically last?",
      "Can I eat immediately following the procedure?"
    ],
    aftercare: [
      "Wait until local anesthesia numbness wears off before chewing hot foods",
      "Maintain daily flossing around the contact points to prevent recurrent decay",
      "Attend 6-month checkups for regular polish and margin inspection"
    ],
    procedureFaqs: [
      { q: "Are white composite fillings as durable as metal amalgam?", a: "Yes. Modern nano-hybrid resins exhibit compressive strength comparable to natural enamel, bonding directly to tooth structure to prevent fractures." },
      { q: "Will I feel sensitivity after a new filling?", a: "Mild sensitivity to cold may occur for 24-48 hours while the pulp adapts, resolving naturally as the tooth remineralizes." }
    ],
    featured: true
  },
  {
    id: "preventive",
    slug: "dentures-and-prosthetics",
    title: "Precision Complete & Partial Dentures",
    category: "Prosthodontics",
    patientConcern: "Multiple missing teeth, inability to chew solid food, sunken facial contours",
    shortDesc: "Lightweight, unbreakable flexible dentures and high-impact acrylic complete dentures engineered for stable chewing comfort.",
    duration: "3–4 Visits across impression cycle",
    suitableFor: "Elderly patients, multiple missing teeth, patients seeking non-surgical tooth replacement",
    iconName: "CheckCircle",
    fullDesc: "We craft custom removable prosthetics that fit securely over your gums. Utilizing premium high-impact acrylics and flexible Valplast materials, our dentures restore natural speech, chewing, and facial youthfulness.",
    process: [
      "Preliminary diagnostic impressions & anatomical border molding",
      "Precise jaw relation recording for comfortable bite height",
      "Aesthetic wax try-in allowing full patient approval of tooth shape",
      "Final processing, delivery, and balance adjustments"
    ],
    clinicalHighlights: [
      "Natural-looking gum contouring and shade-customized teeth",
      "Lightweight flexible partials eliminate metallic visible clasps",
      "Supports lip and cheek fullness to reverse premature facial aging",
      "Unhurried post-delivery adjustment visits for guaranteed comfort"
    ],
    reasonsForAssessment: [
      "Difficulty eating solid food due to multiple missing teeth",
      "Old dentures that are loose, rocking, or causing painful ulcers",
      "Desire for non-surgical, economical full-arch tooth replacement"
    ],
    clinicalStages: [
      { step: "01", title: "Anatomical Impressions", detail: "Captures individual gum topography and muscular border movements." },
      { step: "02", title: "Jaw Relation Measurement", detail: "Establishes natural resting jaw height and chewing alignment." },
      { step: "03", title: "Wax Try-In Preview", detail: "You inspect the teeth setup in a mirror before final curing." },
      { step: "04", title: "Precision Delivery", detail: "Delivery of the finished prosthetic with gentle pressure adjustments." }
    ],
    questionsToAsk: [
      "What is the difference between flexible partials and traditional dentures?",
      "How long will it take to get accustomed to eating with new dentures?",
      "Can dentures be stabilized with mini-implants in the future?"
    ],
    aftercare: [
      "Remove dentures at night and store them in clean water or cleansing solution",
      "Brush dentures with a soft brush and non-abrasive cleanser daily",
      "Visit for a minor adjustment if any sore spots develop on the gums"
    ],
    procedureFaqs: [
      { q: "Will new dentures change my speech or taste?", a: "Speaking feels natural within 3 to 7 days as your tongue adapts. Modern palate designs preserve natural taste sensation." },
      { q: "How often should dentures be relined or replaced?", a: "Because gum ridges naturally remodel over time, dentures should be professionally evaluated every 3 to 5 years for relining." }
    ],
    featured: true
  }
];

export const PATIENT_REVIEWS = [
  {
    author: "Amitabh K.",
    rating: 5,
    tag: "Verified Google Review",
    timeAgo: "Recent Visit",
    headline: "Unmatched gentle care and clinical precision",
    text: "Visiting Dental Clinic Worli was an absolute relief. The doctor explained every single step on the digital screen and treatment was 100% painless. Best dental experience in Worli, Mumbai!"
  },
  {
    author: "Pooja M.",
    rating: 5,
    tag: "Verified Local Patient",
    timeAgo: "2 weeks ago",
    headline: "Warm, transparent and extremely hygienic",
    text: "The clinic maintains hospital-grade sterilization and there was zero rush. The doctor took time to listen to my concerns. Pricing was itemized and completely transparent."
  },
  {
    author: "Rajesh S.",
    rating: 5,
    tag: "Verified Patient",
    timeAgo: "1 month ago",
    headline: "Painless root canal treatment",
    text: "I was terrified of root canals, but the doctor made the entire sitting completely comfortable with gentle numbing. Saved my tooth! Highly recommend Dental Clinic Worli."
  },
  {
    author: "Snehal D.",
    rating: 5,
    tag: "Verified Google Review",
    timeAgo: "3 weeks ago",
    headline: "Transformed my smile with natural veneers",
    text: "Outstanding attention to aesthetic detail. My smile looks radiant and natural. The entire clinical team is courteous and punctual with appointments."
  }
];

export const FAQS = [
  {
    category: "Appointments",
    q: "How do I schedule an appointment at Dental Clinic Worli?",
    a: "You can book directly via WhatsApp (+91 8677 80503) or call our reception desk. Same-day emergency appointments are available for urgent pain relief."
  },
  {
    category: "Treatments",
    q: "Do you offer emergency dental appointments for severe toothache?",
    a: "Yes. Patients experiencing acute dental throbbing, dental trauma, or sudden swelling receive immediate triage and priority appointments."
  },
  {
    category: "Sterilization",
    q: "What infection control and sterilization standards do you follow?",
    a: "We follow strict Class-B fractional pre-vacuum autoclaving at 134°C with biological indicators. Every instrument pouch is opened fresh in front of the patient."
  },
  {
    category: "Pricing & Transparency",
    q: "Are treatment estimates provided upfront before beginning care?",
    a: "Always. After your diagnostic examination and digital radiography, you receive a clear, itemized proposal distinguishing urgent needs from elective options with zero hidden fees."
  },
  {
    category: "Location",
    q: "Where is Dental Clinic Worli located?",
    a: "We are located at D. Chawl, B.D. Bansode Road, BDD Chawls, near Podar / Worli Naka, Worli, Mumbai – 400013 (B.D. Bansode Road, BDD Chawls)."
  }
];

export const PATIENT_JOURNEY = [
  { step: "01", title: "Diagnostic Examination", desc: "Digital radiography and unhurried consultation to diagnose the root issue." },
  { step: "02", title: "Visual Plan Review", desc: "Transparent review of options with high-definition digital monitors." },
  { step: "03", title: "Gentle Paced Treatment", desc: "Topical pre-numbing, quiet rotary motors, and patient pause signals." },
  { step: "04", title: "Documented Aftercare", desc: "Clear digital aftercare instructions and direct WhatsApp clinical support." },
];

export const STERILIZATION_STANDARDS = [
  { step: "01", title: "Ultrasonic Enzymatic Debridement", description: "Instruments are cleaned in ultrasonic baths to remove microscopic debris." },
  { step: "02", title: "Hermetic Pouch Sealing", description: "Every instrument is sealed in medical-grade pouches with internal chemical indicators." },
  { step: "03", title: "Class-B Pre-Vacuum Autoclave", description: "Sterilization under 134°C saturated steam destroying all bacterial and viral pathogens." },
  { step: "04", title: "Point-of-Care Pouch Opening", description: "Sterile pouches are unsealed only at chairside in front of the patient." },
];
