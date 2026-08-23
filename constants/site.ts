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
  { value: 500, suffix: "+", label: "Families Guided" },
  { value: 30, suffix: "+", label: "Builder Partners" },
  { value: 12, suffix: "+", label: "Banking Partners" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

export const SERVICES: Service[] = [
  {
    slug: "property-advisory",
    title: "Property Advisory",
    icon: "Home",
    shortDescription:
      "Unbiased guidance to help you discover the property that truly fits your needs and budget.",
    description:
      "Our advisory team studies your requirements, lifestyle and budget in detail before recommending properties across our verified builder network. Every recommendation is backed by real market data and site-level insight, not commission incentives.",
    benefits: [
      "Personalised property shortlisting",
      "Independent, unbiased recommendations",
      "Access to pre-vetted, RERA-compliant projects",
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
      "Our in-house loan desk works with leading banks and NBFCs to find you the most competitive interest rates, fastest approvals and most flexible repayment terms available.",
    benefits: [
      "Comparison across 12+ banking partners",
      "End-to-end loan documentation support",
      "Fastest approval turnaround",
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
      "From sale agreements to loan paperwork and registration, our team ensures every document is verified, compliant and filed correctly — removing the stress from the process.",
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
];

export interface TrustedBrand {
  name: string;
  logo: string;
  logoBg?: "light" | "dark";
}

export const TRUSTED_BRANDS: TrustedBrand[] = [
  ...BUILDERS.map((b) => ({ name: b.name, logo: b.logo!, logoBg: b.logoBg })),
  { name: "ICICI Bank", logo: "/banks/icici-bank.jpg" },
  { name: "IDFC FIRST Bank", logo: "/banks/idfc-first-bank.webp" },
];

export const BANKS: BankPartner[] = [
  { name: "ICICI Bank", productHighlight: "Fast digital approvals" },
  { name: "HDFC Home Loans", productHighlight: "Competitive fixed & floating rates" },
  { name: "IDFC FIRST Bank", productHighlight: "Flexible tenure options" },
  { name: "Federal Bank", productHighlight: "Low processing fees" },
  { name: "IDBI Bank", productHighlight: "Attractive rates for salaried buyers" },
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
  { year: "2024", title: "Expanding Network", description: "Grew to 30+ builder partners and 12+ banking partners." },
  { year: "2025", title: "500+ Families", description: "Reached the milestone of 500+ families successfully guided home." },
];
