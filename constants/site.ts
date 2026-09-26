import {
  Home,
  Building2,
  Landmark,
  FileText,
  MapPin,
  TrendingUp,
} from "lucide-react";
import type {
  NavLink,
  Service,
  Builder,
  FeaturedProject,
  BankPartner,
  Testimonial,
  FAQ,
  ProcessStep,
} from "@/types";

export const SITE = {
  name: "Kairos Home Realty",
  tagline: "Right Property. Right Time.",
  description:
    "Kairos Home Realty is a trusted property and financial advisory firm helping customers discover the right home and secure the best financing through verified builder and banking partnerships.",
  phone: "+91 80892 02089",
  email: "kairoshomerealty@gmail.com",
  address: "1201, Regent Park, Nallagandala Flyover, Serilingampally PO, Hyderabad - 500019",
  hours: "Monday – Saturday, 10:00 AM – 6:00 PM",
  whatsapp: "918089202089",
  founder: {
    name: "Abraham Thomas",
    role: "Founder",
  },
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Home Loans", href: "/home-loans" },
  { label: "Why Kairos", href: "/why-kairos" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_LINKS = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Why Kairos", href: "/why-kairos" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Property Advisory", href: "/services#property-advisory" },
    { label: "Home Loan Assistance", href: "/home-loans" },
    { label: "Builder Guidance", href: "/services#builder-guidance" },
    { label: "Investment Advisory", href: "/services#investment-advisory" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-conditions" },
  ],
};

export const STATS = [
  { value: 100, suffix: "+", label: "Families Guided" },
  { value: 12, suffix: "+", label: "Builder Partners" },
  { value: 12, suffix: "+", label: "Banking Partners" },
];

export const SERVICES: Service[] = [
  {
    slug: "property-advisory",
    title: "Property Advisory",
    icon: "Home",
    shortDescription:
      "Unbiased guidance to help you discover the property that truly fits your needs and budget.",
    description:
      "Our advisory team studies your requirements, lifestyle and budget before helping you compare properties and request current project details.",
    benefits: [
      "Personalised property shortlisting",
      "Independent, unbiased recommendations",
      "Project-level RERA details where applicable",
      "Ongoing support until you find the right fit",
    ],
    image: "/services/property-advisory.png",
  },
  {
    slug: "builder-guidance",
    title: "Builder Project Guidance",
    icon: "Building2",
    shortDescription:
      "Compare projects across our trusted builder partners with complete transparency.",
    description:
      "We work directly with reputed developers to give you first-hand access to project details, pricing, floor plans and construction timelines — so you can compare confidently before deciding.",
    benefits: [
      "Direct access to premium builder inventory",
      "Side-by-side project comparisons",
      "Verified pricing with no hidden mark-ups",
      "Priority site visit scheduling",
    ],
    image: "/services/builder-guidance.png",
  },
  {
    slug: "home-loan-solutions",
    title: "Home Loan Solutions",
    icon: "Landmark",
    shortDescription:
      "Secure the best financing terms through our trusted banking partnerships.",
    description:
      "Our loan desk helps compare offers, fees and repayment terms from banking partners, then guides you through the documentation process. Rates and approvals are set by each lender and depend on eligibility.",
    benefits: [
      "Comparison across 12+ banking partners",
      "End-to-end loan documentation support",
      "Application and document coordination",
      "Dedicated relationship manager",
    ],
    image: "/services/home-loan-solutions.png",
  },
  {
    slug: "investment-advisory",
    title: "Investment Advisory",
    icon: "TrendingUp",
    shortDescription:
      "Data-backed insight for buyers looking at real estate as a long-term investment.",
    description:
      "For investment-focused buyers, we provide rental yield analysis, appreciation trends and micro-market insight to help you choose properties with strong long-term potential.",
    benefits: [
      "Micro-market appreciation analysis",
      "Rental yield projections",
      "Portfolio diversification guidance",
      "Exit strategy planning",
    ],
    image: "/services/investment-advisory.png"
  },
  {
    slug: "documentation-support",
    title: "Documentation Support",
    icon: "FileText",
    shortDescription:
      "Complete assistance with the paperwork that comes with buying a home.",
    description:
      "We help you organise sale agreements, loan paperwork and registration documents, and coordinate questions with the relevant professionals.",
    benefits: [
      "Legal document verification",
      "Registration & stamp duty guidance",
      "Loan paperwork coordination",
      "Dedicated documentation manager",
    ],
    image: "/services/documentation-support.png"
  },
  {
    slug: "guided-site-visits",
    title: "Guided Site Visits",
    icon: "MapPin",
    shortDescription:
      "Experience shortlisted properties in person with an expert by your side.",
    description:
      "We organise and accompany you on site visits, providing honest, on-ground perspective about construction quality, connectivity and neighbourhood — things brochures don't show.",
    benefits: [
      "Personally accompanied visits",
      "Honest, on-ground assessment",
      "Neighbourhood & connectivity insight",
      "Flexible scheduling, including weekends",
    ],
    image: "/services/guided-site-visits.png"
  },
];

export const SERVICE_ICONS = { Home, Building2, Landmark, FileText, MapPin, TrendingUp };

export const PROCESS_STEPS: ProcessStep[] = [
  { step: 1, title: "Customer Requirement", description: "We understand your budget, location and lifestyle needs." },
  { step: 2, title: "Project Discovery", description: "We shortlist properties from our verified builder network." },
  { step: 3, title: "Site Visit", description: "We accompany you to shortlisted properties in person." },
  { step: 4, title: "Project Comparison", description: "We help you compare pricing, quality and location objectively." },
  { step: 5, title: "Property Selection", description: "You choose the property that fits you best, with our guidance." },
  { step: 6, title: "Loan Assistance", description: "We help secure financing through our banking partners." },
  { step: 7, title: "Purchase", description: "We support you through documentation and final purchase." },
  { step: 8, title: "After-Sales Support", description: "We remain your point of contact long after the deal closes." },
];

export const BUILDERS: Builder[] = [
  {
    name: "Prestige Group",
    tagline: "Building Landmarks Since 1986",
    description: "One of India's most respected developers, known for landmark residential and commercial projects across major cities.",
    projects: ["Prestige Lakeside Habitat", "Prestige Falcon City", "Prestige Shantiniketan"],
    established: "1986",
    logo: "/builders/prestige-group.png",
  },
  {
    name: "Brigade Group",
    tagline: "Redefining Urban Living",
    description: "A trusted name in South Indian real estate with a strong reputation for quality construction and timely delivery.",
    projects: ["Brigade Cornerstone Utopia", "Brigade Meadows", "Brigade Exotica"],
    established: "1986",
    logo: "/builders/brigade-group.jpg",
  },
  {
    name: "Godrej Properties",
    tagline: "Trust, Value & Excellence",
    description: "Backed by the Godrej Group's century-long legacy, delivering sustainable and thoughtfully designed homes.",
    projects: ["Godrej Reflections", "Godrej Woodsman Estate", "Godrej Air"],
    established: "1990",
    logo: "/builders/godrej-properties.png",
  },
  {
    name: "Auro Realty",
    tagline: "Precast Technology, Precision Delivery",
    description: "A Hyderabad-based developer known for combining Finnish precast construction technology with premium residential and commercial spaces across the city's western corridor.",
    projects: ["The Pearl", "Orbit", "Auroland"],
    established: "2012",
    logo: "/builders/auro-realty.png",
    // logoBg: "dark",
  },
  {
    name: "Ramky Group",
    tagline: "Three Decades of Trusted Development",
    description: "The real estate arm of the diversified Ramky Group, with nearly three decades of delivering residential and commercial projects across Hyderabad's key growth corridors.",
    projects: ["Ramky Towers", "The Eminent", "Ramky One Odyssey"],
    established: "1997",
    logo: "/builders/ramky-group.png",
  },
  {
    name: "Hallmark Infracon",
    tagline: "Hyderabad's Premium Villa Specialist",
    description: "A Hyderabad-focused developer since 1995, recognised for premium villas and large-format gated communities across the city's western residential belt.",
    projects: ["Hallmark County", "Hallmark Imperia", "Hallmark Altus"],
    established: "1995",
    logo: "/builders/hallmark-infracon.png",
  },
  {
    name: "Casa Grand",
    tagline: "Builder partner",
    description: "A featured home-building partner with Casagrand Windsor Court villas in South Hyderabad.",
    projects: ["Casagrand Windsor Court"],
    established: "",
    logo: "/builders/casagrand.png",
  },
  {
    name: "Sattva",
    tagline: "Builder partner",
    description:
      "Explore featured Sattva residential projects in Hyderabad, with project-specific layouts, amenities and indicative pricing.",
    projects: ["Sattva Lake Ridge", "Sattva Lago", "Sattva Amora"],
    established: "",
    logo: "/builders/sattva.png",
  },
  {
    name: "VIAN Properties",
    tagline: "Builder partner",
    description:
      "Ask Kairos about current VIAN Properties project availability, pricing and location details.",
    projects: [],
    established: "",
    logo: "https://www.vianproperties.com/assets/logo-BXDZqLIm.svg",
  },
];

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    name: "Sattva Lake Ridge",
    builder: "Sattva",
    location: "Neopolis, Kokapet, Hyderabad",
    configurations: "3, 4 and 5 BHK · approximately 2,744–5,472 sq. ft.",
    highlights: [
      "9.5 acres, 6 towers and G+37 floors",
      "65,000 sq. ft. clubhouse with a lake-view setting",
      "IGBC Gold-rated design, 12-ft floor-to-floor height and double-glazed windows",
    ],
    indicativeStartingPrice: "₹3.61 Cr",
    priceNote: "Lowest total shown in the supplied Lake Ridge price sheet. GST/TDS as applicable and stamp duty/registration are extra; reconfirm current prices.",
    detailsPage: "/projects/sattva-lake-ridge",
    coverImage: "/projects/sattva-lake-ridge-cover.webp",
    masterLayout: "/projects/sattva-lake-ridge-masterplan.webp",
    overview: "Sattva Lake Ridge is a high-rise residential community in Neopolis, Kokapet, one of Hyderabad’s prominent growth corridors. The supplied project brief describes six G+37 towers across 9.5 acres, with lake views and an IGBC Gold-rated design.",
    quickFacts: [
      { label: "Site", value: "9.5 acres · 6 towers" },
      { label: "Height", value: "G+37 floors" },
      { label: "Homes", value: "3, 4 and 5 BHK" },
      { label: "Area range", value: "2,744–5,472 sq. ft. per supplied brief" },
      { label: "Clubhouse", value: "65,000 sq. ft." },
      { label: "Design", value: "IGBC Gold-rated · lake view" },
      { label: "Ceilings", value: "12-ft floor-to-floor height" },
      { label: "Windows", value: "Floor-to-ceiling, double-glazed glass" },
    ],
    amenities: [
      "Swimming pool", "Kids’ pool", "Multipurpose court", "Tennis court", "Badminton court",
      "Children’s play area", "Toddler play area", "Amphitheatre", "Seating deck under pergola",
      "Cricket pitch", "Outdoor fitness station", "Elderly seating under pergola", "Pet park",
      "Jogging track and pathway", "Clubhouse", "Visitors’ car parking", "Landscaped lawn and stepping-stone paths",
    ],
    specifications: [
      { category: "Project overview", details: ["9.5 acres with six residential towers", "G+37 floors", "3, 4 and 5 BHK homes", "65,000 sq. ft. clubhouse", "Lake-view setting in Neopolis, Kokapet"] },
      { category: "Home features", details: ["12-ft floor-to-floor height, as supplied in the project brief", "Floor-to-ceiling windows", "Double-glazed glass", "IGBC Gold-rated environmental design"] },
      { category: "Landscape plan", details: ["Swimming and kids’ pools", "Sports courts, cricket pitch and outdoor fitness station", "Jogging paths, landscaped lawns and seating pergolas", "Children’s and toddler play areas, amphitheatre and pet park"] },
    ],
    galleryImages: [
      { src: "/projects/sattva-lake-ridge-floorplans-a.webp", alt: "Sattva Lake Ridge floor plans, brochure page 27" },
      { src: "/projects/sattva-lake-ridge-floorplans-b.webp", alt: "Sattva Lake Ridge floor plans, brochure page 28" },
      { src: "/projects/sattva-lake-ridge-floorplans-c.webp", alt: "Sattva Lake Ridge floor plans, brochure page 29" },
    ],
    priceTableRows: [
      { label: "3.5 BHK", area: "2,744 sq. ft. · ₹12,100/sq. ft.", amount: "₹3,60,84,912" },
      { label: "3.5 BHK", area: "2,751 sq. ft. · ₹12,100/sq. ft.", amount: "₹3,61,74,848" },
      { label: "3.5 BHK + deck", area: "2,979 sq. ft. · ₹12,100/sq. ft.", amount: "₹3,91,04,192" },
      { label: "4 BHK", area: "3,983 sq. ft. · ₹12,300/sq. ft.", amount: "₹5,32,00,184" },
      { label: "4 BHK", area: "4,046 sq. ft. · ₹12,300/sq. ft.", amount: "₹5,44,22,208" },
      { label: "5 BHK", area: "5,218 sq. ft. · ₹13,200/sq. ft.", amount: "₹7,44,10,664" },
    ],
    priceTableNote: "Totals transcribed from the supplied Lake Ridge price sheet and include its listed infrastructure, legal/documentation and maintenance/corpus amounts. GST/TDS as applicable and stamp duty/registration on actual are additional. Premium-facing charge is listed at ₹500/sq. ft.; maintenance at ₹4.50/sq. ft./month. Prices may change without notice.",
  },
  {
    name: "Sattva Lago",
    builder: "Sattva",
    location: "Neopolis, Kokapet, Hyderabad",
    configurations: "3 BHK, 3.5 BHK and 4 BHK · approximately 3,100–4,900 sq. ft. plus private terraces",
    highlights: [
      "Phase 2 pre-launch across 10 acres with 5 towers and G+46 floors",
      "1,261 homes; Towers 3, 4 and 5 listed as open for sale in the supplied project update",
      "Layouts, tower plan and amenity master plan available to view",
    ],
    indicativeStartingPrice: "From ₹11,300/sq. ft.*",
    priceNote: "Rate shown in the supplied Lago price sheet for 3 BHK/3.5 BHK; 4 BHK is ₹11,600/sq. ft. Other charges apply. Confirm latest launch pricing and tower availability.",
    detailsPage: "/projects/sattva-lago",
    coverImage: "/projects/sattva-lago-masterplan.webp",
    masterLayout: "/projects/sattva-lago-masterplan.webp",
    overview: "Sattva Lago is presented in the supplied project update as Phase 2 at Neopolis, Kokapet. The update describes a 10-acre community with five G+46 towers and 1,261 homes. Towers 3, 4 and 5 are listed as open for sale in that update; availability can change.",
    quickFacts: [
      { label: "Phase", value: "Phase 2 · pre-launch per supplied update" },
      { label: "Site", value: "10 acres" },
      { label: "Towers", value: "5 · G+46 floors" },
      { label: "Homes", value: "1,261 units" },
      { label: "Configurations", value: "3, 3.5 and 4 BHK" },
      { label: "Area range", value: "3,100–4,900 sq. ft. plus private terraces" },
      { label: "Sale update", value: "Towers 3, 4 and 5 listed open for sale" },
    ],
    amenities: [
      "Jogging loop, pedestrian path and cycling path", "Senior garden and reflexology pathway", "Outdoor gym",
      "Giant chess, trampoline and hopscotch", "Play lawn with landforms", "Pets’ park", "Multifunctional sports court",
      "Pickleball court", "Cricket lawn", "Skating rink", "Badminton courts", "Tennis and paddle tennis courts",
      "Lap pool and kids’ pool", "Pool deck, wet deck, lazy pool and jacuzzi", "Multifunctional lawn",
      "Outdoor café, dining deck and BBQ area", "Spa pavilion", "Art and music lawn", "Temple",
    ],
    specifications: [
      { category: "Project overview", details: ["Phase 2 at Neopolis, Kokapet", "10 acres with five towers and 1,261 homes", "G+46 floors", "3 BHK, 3.5 BHK and 4 BHK layouts", "Approx. 3,100–4,900 sq. ft. plus private terraces"] },
      { category: "Tower and floor plans", details: ["The supplied plan set contains layouts for Towers Aqua, Bayou, Fern, Deodar and Elm", "The supplied project update lists Towers 3, 4 and 5 as open for sale", "Confirm tower names, inventory, areas and final plans with Sattva"] },
    ],
    galleryImages: [
      { src: "/projects/sattva-lago-floorplan-1.webp", alt: "Sattva Lago Tower Aqua floor and unit plans" },
      { src: "/projects/sattva-lago-floorplan-2.webp", alt: "Sattva Lago Tower Bayou floor and unit plans" },
      { src: "/projects/sattva-lago-floorplan-3.webp", alt: "Sattva Lago Tower Fern floor and unit plans" },
      { src: "/projects/sattva-lago-floorplan-4.webp", alt: "Sattva Lago Tower Deodar floor and unit plans" },
      { src: "/projects/sattva-lago-floorplan-5.webp", alt: "Sattva Lago Tower Elm floor and unit plans" },
      { src: "/projects/sattva-lago-amenity-plan.webp", alt: "Sattva Lago landscape and amenity master plan" },
    ],
    priceTableRows: [
      { label: "3 BHK / 3.5 BHK", amount: "₹11,300 per sq. ft." },
      { label: "4 BHK", amount: "₹11,600 per sq. ft." },
      { label: "Basement parking", amount: "₹4,00,000" },
      { label: "Podium parking", amount: "₹5,00,000" },
      { label: "Infrastructure", amount: "₹660 per sq. ft." },
      { label: "Legal and documentation", amount: "₹50,000" },
      { label: "Floor rise", amount: "₹30 per sq. ft. from 2nd floor onward" },
      { label: "Courtyard", amount: "₹300 per sq. ft." },
      { label: "Maintenance deposit", amount: "₹100 per sq. ft." },
      { label: "Maintenance", amount: "₹5.50 per sq. ft." },
    ],
    priceTableNote: "Rates and charges are transcribed from the supplied Lago price sheet. The sheet does not specify whether taxes or every other charge are included; ask Sattva for a current written cost sheet and confirm all terms before booking.",
  },
  {
    name: "Sattva Amora",
    builder: "Sattva",
    category: "villa",
    location: "Narsingi, Hyderabad · near Taramati Baramati Resort",
    locationLink: "https://maps.app.goo.gl/nKHBzAKJxV1Pwur27?g_st=awb",
    configurations: "Villas · plots approx. 305, 352, 366 and 400–431 sq. yd.",
    highlights: [
      "42 villas across 6.6 acres in Narsingi",
      "Plot areas from 305 to 431 sq. yd.; built-up areas listed from 5,751 to 7,396 sq. ft.",
      "Tentative pricing around ₹21,000+/sq. ft.; confirm current quote and premiums",
    ],
    indicativeStartingPrice: "Approx. ₹21,000+/sq. ft.*",
    priceNote: "Tentative per the project brief; the supplied price image lists ₹20,300/sq. ft. base. Confirm the latest rate and extra charges.",
    detailsPage: "/projects/sattva-amora",
    coverImage: "/projects/sattva-amora-villa.webp",
    masterLayout: "/projects/sattva-amora-masterplan.webp",
    overview: "Sattva Amora is a villa community in Narsingi, near Taramati Baramati Resort. The supplied project information describes 42 villas across 6.6 acres, with east-, west- and north-facing options.",
    quickFacts: [
      { label: "Location", value: "Narsingi · near Taramati Baramati Resort" },
      { label: "Land extent", value: "6.6 acres" },
      { label: "Community", value: "42 villas" },
      { label: "Plot sizes", value: "305, 352, 366 and 400–431 sq. yd." },
      { label: "Built-up area", value: "5,751–7,396 sq. ft. (figures supplied)" },
      { label: "Facing", value: "East, west and north" },
      { label: "Price indication", value: "Around ₹21,000+/sq. ft.; reconfirm" },
    ],
    amenities: [
      "Clubhouse", "Visitor parking", "Four tot-lot areas", "Sump and utility areas", "Sewage treatment plant (STP)", "Landscaped buffer areas",
    ],
    specifications: [
      { category: "Villa community", details: ["42 villas on a 6.6-acre site", "Plot sizes supplied as 305, 352, 366 and 400–431 sq. yd.", "Built-up areas supplied as 5,890, 5,751, 6,711 and 6,819–7,396 sq. ft.", "East-, west- and north-facing villa options", "Master plan labels multiple villa types and visitor parking, clubhouse, tot-lots, utilities and STP"] },
      { category: "Location and map", details: ["Narsingi, Hyderabad", "Near Taramati Baramati Resort", "Use the map link below to open the location shared by the customer"] },
    ],
    priceTableRows: [
      { label: "Base price in supplied price image", amount: "₹20,300 per sq. ft." },
      { label: "Tentative rate in supplied project brief", amount: "₹21,000+ per sq. ft." },
      { label: "Corner premium in price image", amount: "₹200 (unit basis to confirm)" },
      { label: "East-facing premium in price image", amount: "₹200 (unit basis to confirm)" },
      { label: "East / corner premium in project brief", amount: "₹300 per sq. ft. (reconfirm)" },
      { label: "Infrastructure", amount: "₹350 (unit basis to confirm)" },
      { label: "Gas", amount: "₹75,000" },
      { label: "Maintenance", amount: "₹7 (unit and billing period to confirm)" },
      { label: "Corpus", amount: "₹100 (unit basis to confirm)" },
    ],
    priceTableNote: "Your written brief and the supplied price image differ: the brief says approximately ₹21,000+ per sq. ft. with ₹300/sq. ft. east/corner premium, while the image lists ₹20,300 base and ₹200 for each premium. The image does not label the unit basis for every charge. We show both as supplied; confirm a current itemized quote, tax, registration, maintenance and all charge units with Sattva.",
  },
  {
    name: "Godrej Brooklyn Avenue",
    builder: "Godrej Properties",
    location: "Kukatpally, Hyderabad",
    configurations: "3 BHK and 4 BHK",
    highlights: [
      "75,000 sq. ft. clubhouse, as stated in the supplied brochure",
      "Amenities include a pool, pickleball and paddle courts, jogging track, pet park and outdoor work pods",
    ],
    rera: "P02200010981",
    virtualTour: "https://www.brooklynavenue360.com/ddzyn360/",
    masterLayout: "/projects/godrej-brooklyn-avenue-master-layout.webp",
    detailsPage: "/projects/godrej-brooklyn-avenue",
    sampleVideos: [
      { label: "3 BHK sample video", videoId: "7w33rjc9hC0" },
      { label: "4 BHK sample video", videoId: "uYMthLYjXvA" },
    ],
    overview:
      "Godrej Brooklyn Avenue is a residential development in Kukatpally, Hyderabad. The brochure describes a Brooklyn-inspired design with a central avenue, pocket gardens and shared community spaces.",
    amenities: [
      "Party spill-over plaza", "Swimming pool", "Leisure seating", "Multi-purpose court", "Box cricket",
      "Cricket practice net", "Outdoor gym", "Children's play area", "Skating arena", "Paddle court",
      "Pickleball court", "Pet's play area and pet park", "Butterfly park", "Outdoor working pods",
      "Cognitive play area", "Outdoor exercise area", "Central avenue", "Amphitheatre", "Pocket garden",
      "Foot reflexology walkway", "Senior citizens' yoga and exercise lawn", "EV charging parking lot",
      "Waiting zone", "Jogging track",
    ],
    infrastructure: [
      "Entrance plaza and fire driveway", "Lobby drop-off and triple-height lobby", "Covered parking",
      "Creche", "Clinic", "Convenience store", "Water feature", "Dedicated entry and exit ramps",
    ],
    nearbyPlaces: [
      { category: "Education", places: ["Jawaharlal Nehru Technological University (JNTU)", "Gowtham Model School", "Samskruti International School", "Laurus - The School of Excellence", "Euro School", "Meridian School"] },
      { category: "Shopping and leisure", places: ["Lulu Mall", "Nexus Mall", "Sarath City Capital Mall", "E-Galleria", "D-Mart"] },
      { category: "Healthcare", places: ["Yashoda Hospitals", "Medicover Hospitals", "Rainbow Children's Hospital", "Remedy Hospitals", "Sindhu Hospitals"] },
      { category: "Transport and business hubs", places: ["JNTU, KPHB and Kukatpally Metro stations", "HITEC City Metro station and railway station", "NH 65", "KPHB Bus Stand", "Raheja Mindspace", "TCS Deccan Park", "Knowledge City"] },
    ],
    specifications: [
      { category: "Structure and doors", details: ["RCC shear-wall structure using Aluform construction", "Brochure states 3.1 m typical floor-to-floor height and 4.0 m ground-floor height", "Main door with hardwood frame, veneer shutter and smart-lock hardware; internal doors with laminated shutters", "UPVC-framed windows and balcony doors with performance glass; mosquito-mesh provision"] },
      { category: "Finishes", details: ["Anti-skid vitrified tile flooring in toilets; wood-pattern anti-skid vitrified tiles on balconies", "Master bedroom laminate wood flooring; double-charged vitrified tiles listed for kitchen and other bedrooms", "Premium acrylic emulsion wall finishes; bathroom and utility dado tile finishes as specified in the brochure"] },
      { category: "Electrical, water and safety", details: ["Concealed copper wiring and modular switches/sockets", "The brochure specifies AC piping sleeves and drain provision; confirm equipment and inclusions with the builder", "100% DG backup for apartments at standard diversity, excluding EV charging points", "One EV charging point per apartment; CCTV in selected common areas", "Sprinkler system, fire alarm and public-address system as per the brochure", "Water-treatment plant (WTP), sewage-treatment plant (STP) and water meters"] },
      { category: "Clubhouse", details: ["The Milestones Club is stated as 75,000 sq. ft.", "Facilities shown include café, banquet hall, gym, yoga, indoor games, conference and co-working rooms, library, salon, spa, jacuzzi, squash and badminton courts, AV room and terrace party area"] },
    ],
  },
  {
    name: "Casagrand Windsor Court",
    builder: "Casagrand",
    category: "villa",
    location: "Mankhal, South Hyderabad, near Tukkuguda Exit No. 14",
    configurations: "4 BHK and 5 BHK villas; 5 BHK plan includes maid's room, home office and home theatre",
    highlights: [
      "About 3.9 acres with 21 villas; plot sizes stated as approximately 438–616 sq. yd.",
      "G+2 (part) villas, London-inspired elevations, and a 10,600 sq. ft. clubhouse",
      "77% open space, two-car parking per villa, and a 550 sq. ft. entrance deck",
    ],
    indicativeStartingPrice: "₹4.99 Cr*",
    priceNote: "Example total for Villa 9 from the supplied sheet; registration and corpus fund are extra. Verify current price and availability.",
    detailsPage: "/projects/casagrand-windsor-court",
    coverImage: "/projects/casagrand-windsor-court-villa.webp",
    masterLayout: "/projects/casagrand-windsor-court-masterplan.webp",
    overview:
      "Casagrand Windsor Court is a gated villa community in Mankhal, South Hyderabad, near Tukkuguda Exit No. 14. The supplied brief describes London-inspired elevations that blend modern and traditional architecture.",
    amenities: [
      "Entrance plaza", "Amphitheatre", "Kids' play lawn", "Children's play area", "Tot lot", "Sand pit",
      "Rock climbing", "Jungle gym", "Nanny's corner", "Senior citizens' corner", "Outdoor gym",
      "Leisure sit-out", "Floral garden", "Meditation zone", "Skating ring", "Reflexology walkway",
      "Champak tree court", "Multipurpose clubhouse space", "Learning centre", "Yoga and meditation room",
      "AV room", "Gym", "Indoor play area", "Rooftop swimming pool", "Rooftop hangout", "Terrace party zone",
      "Central park with party lawn and stage", "Barbecue lawn", "Walkways and play lawns", "Zen garden",
      "Jogging track", "Pet park",
    ],
    specifications: [
      { category: "Community and villas", details: ["About 3.9 acres with 21 villas", "Plot sizes stated as approximately 438–616 sq. yd.", "4 BHK and 5 BHK+ villa layouts; 5 BHK includes maid's room, home office and home theatre", "G+2 (part) floor villas", "77% open space and 100% Vaastu-compliant design, as described in the supplied project information"] },
      { category: "Villa highlights", details: ["Automated main gates", "10 × 6 ft teak-wood main doors", "Marble flooring in living and dining areas", "Kitchen with granite counter and multifunctional stainless-steel sink with drainage connection", "Two dedicated car parks per villa with an 11 ft canopy", "550 sq. ft. entrance deck connecting indoor and outdoor living"] },
      { category: "Vaastu design notes", details: ["North-facing villas; no north-east or south-west corner cuts, and no south-west entrances", "Kitchen in the south-east with an east-facing cooking hob", "Puja area in the north-east, with worship facing east", "South-west bedroom placement; bed headboards are not placed facing north", "Toilets oriented north or south and kept out of north-east and south-west corners", "Clockwise staircase in the south-west; lounge in the north; west-facing balcony", "Car parking suggested in the south-east or south-west; backyard space for planting"] },
      { category: "Clubhouse and open space", details: ["10,600 sq. ft. grand clubhouse", "More than 25 modern amenities, including rooftop pool, gym, indoor play, learning centre, yoga/meditation room and AV room", "77% open space with landscaped areas, central park, play lawns, gardens and walking spaces"] },
    ],
    priceSheet: {
      villaNo: "9",
      status: "The supplied sheet says open for sale; confirm current availability",
      villaType: "4 BHK - 4T, Category D1, north-facing",
      category: "D1",
      facing: "North",
      landArea: "437.89 sq. yd.",
      superBuiltUpArea: "3,866 sq. ft.",
      basicCost: "₹449.91 lakh",
      otherCharges: "₹12 lakh",
      plc: "₹350 per sq. ft. (₹13.53 lakh shown)",
      totalBeforeGst: "₹475.44 lakh",
      gst: "₹23.77 lakh (5% as shown on the supplied sheet)",
      grandTotal: "₹499.22 lakh (about ₹4.99 Cr)",
      exclusions: "Registration and corpus fund are additional. Pricing and availability are from the supplied, undated sheet and must be reconfirmed.",
      paymentSchedule: [
        { stage: "Booking advance", percentage: "10%", amount: "₹49.92 lakh" },
        { stage: "Agreement stage", percentage: "20%", amount: "₹99.84 lakh" },
        { stage: "Completion of foundation", percentage: "15%", amount: "₹74.88 lakh" },
        { stage: "Completion of ground-floor roof", percentage: "15%", amount: "₹74.88 lakh" },
        { stage: "Completion of first-floor roof", percentage: "15%", amount: "₹74.88 lakh" },
        { stage: "Completion of second-floor roof", percentage: "10%", amount: "₹49.92 lakh" },
        { stage: "Flooring of respective unit", percentage: "10%", amount: "₹49.92 lakh" },
        { stage: "Handover", percentage: "5%", amount: "₹24.96 lakh" },
      ],
    },
  },
];

export interface TrustedBrand {
  name: string;
  logo?: string;
  logoBg?: "light" | "dark";
}

export const TRUSTED_BRANDS: TrustedBrand[] = [
  { name: "Prestige Group", logo: "/builders/prestige-group.png" },
  { name: "Godrej Properties", logo: "/builders/godrej-properties.png" },
  { name: "Brigade Group", logo: "/builders/brigade-group.jpg" },
  { name: "Ramky", logo: "/builders/ramky-group.png" },
  { name: "Hallmark", logo: "/builders/hallmark-infracon.png" },
  { name: "Auro Realty", logo: "/builders/auro-realty.png" },
  {
    name: "Casa Grand",
    logo: "https://pbs.twimg.com/profile_images/898104070518353921/kG71c9E-.jpg",
  },
  {
    name: "Sattva",
    logo: "https://sattvagroup.com/wp-content/uploads/2022/12/Footer-logo-colored.png",
  },
  {
    name: "VIAN Properties",
    logo: "https://www.vianproperties.com/assets/logo-BXDZqLIm.svg",
  },
];

export const BANKS: BankPartner[] = [
  {
    name: "Federal",
    productHighlight: "Home loan partner",
    logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Federal_bank.logo.svg",
  },
  {
    name: "HDFC",
    productHighlight: "Home loan partner",
    logo: "https://commons.wikimedia.org/wiki/Special:FilePath/HDFC_Bank_Logo.svg",
  },
  {
    name: "IDBI",
    productHighlight: "Home loan partner",
    logo: "https://en.wikipedia.org/wiki/Special:FilePath/IDBI_Logo.svg",
  },
  {
    name: "ICICI",
    productHighlight: "Home loan partner",
    logo: "/banks/icici-bank.jpg",
  },
  {
    name: "Axis",
    productHighlight: "Home loan partner",
    logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Axis_Bank_logo.svg",
  },
  {
    name: "SBI",
    productHighlight: "Home loan partner",
    logo: "https://commons.wikimedia.org/wiki/Special:FilePath/State-Bank-of-India-Logo.svg",
  },
  {
    name: "Central Bank",
    productHighlight: "Home loan partner",
    logo: "https://en.wikipedia.org/wiki/Special:FilePath/Central_Bank_of_India.svg",
  },
  {
    name: "Bank of Baroda",
    productHighlight: "Home loan partner",
    logo: "https://en.wikipedia.org/wiki/Special:FilePath/BankOfBarodaLogo.svg",
  },
  {
    name: "Godrej Capital",
    productHighlight: "Home loan partner",
    logo: "https://mma.prnewswire.com/media/1797794/Godrej_Capital_Logo.jpg",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Ananya & Rohit Sharma",
    location: "Hyderabad",
    quote:
      "Kairos made what felt like an overwhelming decision completely manageable. We compared three builders side by side and never once felt pressured.",
    rating: 5,
    role: "First-time Homebuyers",
  },
  {
    name: "Vikram Mehta",
    location: "Hyderabad",
    quote:
      "Their loan desk got us a significantly better interest rate than what our own bank first offered. The entire process was transparent from day one.",
    rating: 5,
    role: "Investment Buyer",
  },
  {
    name: "Priya Nair",
    location: "Hyderabad",
    quote:
      "What stood out was the honesty. When a project didn't suit our needs, they said so directly instead of pushing it anyway.",
    rating: 5,
    role: "Repeat Client",
  },
  {
    name: "Arjun & Deepika Rao",
    location: "Hyderabad",
    quote:
      "From the first site visit to final registration, Kairos was with us every step. It genuinely felt like having a knowledgeable friend in the industry.",
    rating: 5,
    role: "Villa Buyers",
  },
];

export const FAQS: FAQ[] = [
  {
    question: "Is Kairos Home Realty a broker?",
    answer:
      "No. We are a property and financial advisory firm. We don't push a single project — we compare options across multiple builders and banks to find what genuinely suits you.",
  },
  {
    question: "Do I need to pay for your advisory services?",
    answer:
      "Our initial consultation and property advisory is complimentary for buyers. Any applicable charges are discussed transparently upfront, with nothing hidden.",
  },
  {
    question: "Which cities do you currently operate in?",
    answer:
      "We currently operate in Hyderabad, with plans to expand to other major Indian cities soon.",
  },
  {
    question: "How do you help with home loans?",
    answer:
      "We work with 12+ banking and NBFC partners to compare interest rates, processing fees and approval timelines, then guide you through documentation end-to-end.",
  },
  {
    question: "Can you help if I already have a property in mind?",
    answer:
      "Absolutely. We can independently evaluate any project you're considering and help you secure financing for it, even outside our partner network.",
  },
  {
    question: "How long does the loan approval process take?",
    answer:
      "With our banking partnerships, pre-approvals typically take 5–10 working days depending on documentation readiness and the lender.",
  },
  {
    question: "Do you help with resale properties too?",
    answer:
      "Yes, our advisory and loan assistance services extend to resale and secondary market properties, not just new launches.",
  },
  {
    question: "What documents will I need for a home loan?",
    answer:
      "Typically identity and address proof, income documents, bank statements, and property documents. Our documentation team gives you a checklist specific to your lender.",
  },
  {
    question: "Do you offer support after the purchase is complete?",
    answer:
      "Yes. Our after-sales support covers possession assistance, documentation follow-ups and any future property or refinancing needs.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply book a free consultation through our contact page or WhatsApp us directly. We'll understand your requirements and take it from there.",
  },
];

export const COMPARISON_ROWS = [
  { feature: "Unbiased project comparison", kairos: true, traditional: false },
  { feature: "Access to multiple builders", kairos: true, traditional: false },
  { feature: "Access to multiple banks", kairos: true, traditional: false },
  { feature: "Transparent pricing, no hidden mark-ups", kairos: true, traditional: false },
  { feature: "End-to-end documentation support", kairos: true, traditional: false },
  { feature: "Dedicated after-sales support", kairos: true, traditional: false },
  { feature: "Independent loan negotiation", kairos: true, traditional: false },
];

export const TIMELINE = [
  { year: "2021", title: "The Idea", description: "Founded on a simple belief: home buying should be transparent, not transactional." },
  { year: "2022", title: "First Partnerships", description: "Formed our first builder and banking partnerships in Hyderabad." },
  { year: "2023", title: "Scaling Trust", description: "Crossed 200 families guided through their home-buying journey." },
  { year: "2024", title: "Expanding Network", description: "Expanded our builder and banking network across Hyderabad." },
  { year: "2025", title: "500+ Families", description: "Reached the milestone of 500+ families successfully guided home." },
];
