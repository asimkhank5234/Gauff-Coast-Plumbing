import { Testimonial, Service, FAQ } from './types';

export const COMPANY_NAME = "Gauff Coast Plumbing";
export const PHONE_NUMBER = "+1 409-739-4463";
export const DISPLAY_PHONE = "409-739-4463";
export const EMAIL = "gauffcoastplumbing@gmail.com";
export const ADDRESS = "438 Pompano, Hitchcock, TX 77563";
export const ADDRESS_SHORT = "Hitchcock, TX";

export const SERVICES: Service[] = [
  {
    id: "emergency",
    title: "Emergency Plumbing Repairs",
    slug: "emergency-plumbing",
    description: "Available 24/7 for burst pipes, major leaks, and urgent repairs.",
    icon: "AlertTriangle",
    longDescription: "Plumbing emergencies don't wait for business hours. Whether it's a burst pipe flooding your kitchen or a sewer backup at midnight, Gauff Coast Plumbing is ready to help. Our 24/7 service ensures you're never left stranded with a plumbing disaster.",
    features: ["24/7 Availability", "Rapid Response Time", "Fully Equipped Service Vans", "Experienced Technicians"]
  },
  {
    id: "drain",
    title: "Drain Cleaning",
    slug: "drain-cleaning",
    description: "Professional clearing of kitchen, bathroom, and main line clogs.",
    icon: "Droplets",
    longDescription: "Stubborn clogs can disrupt your entire household. We use professional-grade equipment to clear even the toughest blockages, restoring full flow to your drains and preventing future issues.",
    features: ["Kitchen Sink Descaling", "Bathroom Drain Clearing", "Main Line Snaking", "Bio-degradable Treatments"]
  },
  {
    id: "leak",
    title: "Leak Detection",
    slug: "leak-detection",
    description: "Advanced technology to find hidden leaks before they cause damage.",
    icon: "Search",
    longDescription: "Hidden leaks can cause thousands of dollars in water damage before they're even noticed. Our technicians use advanced leak detection technology to pinpoint leaks behind walls, under floors, and in slab foundations.",
    features: ["Slab Leak Detection", "Wall Leak Location", "Non-intrusive Search", "Repair Estimates"]
  },
  {
    id: "water-heater",
    title: "Water Heater Services",
    slug: "water-heater-services",
    description: "Repair, maintenance, and installation of gas and electric water heaters.",
    icon: "Thermometer",
    longDescription: "Cold showers? No problem. We repair and install all major brands of gas and electric water heaters. Whether you need a simple fix or a high-efficiency replacement, we've got you covered.",
    features: ["Installation & Replacement", "Maintenance & Flushing", "Gas & Electric Expertise", "Emergency Repairs"]
  },
  {
    id: "sewer",
    title: "Sewer Line Repair",
    slug: "sewer-line-repair",
    description: "Expert diagnosis and repair for underground sewer line issues.",
    icon: "Activity",
    longDescription: "Sewer line problems can be messy and expensive if not handled correctly. We provide expert diagnosis and repairs for cracked pipelines, tree root intrusion, and general sewer line failure.",
    features: ["Video Camera Inspection", "Trenchless Options", "Rooter Services", "Full Line Replacement"]
  },
  {
    id: "fixtures",
    title: "Toilet, Faucet & Sink Repair",
    slug: "fixture-repair",
    description: "Fixing leaky faucets, running toilets, and broken sinks fast.",
    icon: "Wrench",
    longDescription: "Drip, drip, drip. Don't let fixture issues drive you crazy or drive up your water bill. We repair and replace toilets, faucets, sinks, showers, and more with high-quality components.",
    features: ["Faucet Replacement", "Toilet Rebuilds", "Sink Installation", "Shower Valve Repair"]
  },
  {
    id: "pipe-repair",
    title: "Pipe Repair & Repiping",
    slug: "pipe-repair",
    description: "Quality repairs for copper, PEX, and PVC piping systems.",
    icon: "Settings",
    longDescription: "Old, corroded, or leaking pipes can compromise your water quality and home's integrity. We provide comprehensive pipe repair and whole-home repiping services using modern, durable materials.",
    features: ["PEX Installation", "Copper Pipe Repair", "PVC Drain Repair", "Whole-home Repiping"]
  },
  {
    id: "commercial",
    title: "Commercial Plumbing",
    slug: "commercial-plumbing",
    description: "Reliable plumbing solutions for local businesses and properties.",
    icon: "Building2",
    longDescription: "Business plumbing needs are often more complex than residential. We offer reliable, non-disruptive plumbing services for offices, retail spaces, and industrial properties in the Hitchcock area.",
    features: ["Industrial Grade Fixtures", "Grease Trap Services", "Code Compliance", "Scheduled Maintenance"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Michael R.",
    location: "Hitchcock, TX",
    service: "Emergency Pipe Repair",
    rating: 5,
    review: "Gauff Coast Plumbing responded within an hour when we had a burst pipe in the middle of the night. The plumber was professional, fixed the issue quickly, and the price was very fair. I highly recommend them."
  },
  {
    id: "2",
    name: "Sarah T.",
    location: "Texas City, TX",
    service: "Drain Cleaning",
    rating: 5,
    review: "We had a badly clogged kitchen drain and Gauff Coast Plumbing cleared it the same day. They were friendly, on time, and explained everything clearly. Great service from start to finish."
  },
  {
    id: "3",
    name: "James W.",
    location: "Galveston, TX",
    service: "Water Heater Installation",
    rating: 5,
    review: "Our old water heater stopped working and Gauff Coast Plumbing installed a new one the next day. The installation was clean, fast, and affordable. Excellent company to work with."
  },
  {
    id: "4",
    name: "Amanda L.",
    location: "La Marque, TX",
    service: "Leak Detection",
    rating: 5,
    review: "I had a hidden water leak that was causing damage in my home. Their team found the problem quickly and repaired it before it got worse. Very honest and knowledgeable plumbers."
  },
  {
    id: "5",
    name: "Robert K.",
    location: "Santa Fe, TX",
    service: "Sewer Line Repair",
    rating: 5,
    review: "Very impressed with the professionalism and quality of work. They repaired our sewer line quickly and kept us informed through the entire process. I would definitely use them again."
  },
  {
    id: "6",
    name: "Jennifer M.",
    location: "Hitchcock, TX",
    service: "Emergency Plumbing",
    rating: 5,
    review: "We called Gauff Coast Plumbing on a weekend for an overflowing toilet and they arrived fast. The plumber was courteous and solved the issue right away. Outstanding emergency service."
  }
];

export const SERVICE_AREAS = [
  "Hitchcock",
  "Galveston",
  "Texas City",
  "La Marque",
  "Santa Fe, TX"
];

export const FAQS: FAQ[] = [
  {
    question: "How quickly can you arrive?",
    answer: "For emergency calls in the Hitchcock area, we typically arrive within 60 minutes or less. Our 24/7 availability means we're always ready to respond when you need us most."
  },
  {
    question: "Do you offer emergency plumbing?",
    answer: "Yes, we are a true 24/7 service provider. Whether it's a holiday, weekend, or the middle of the night, our licensed plumbers are on standby for any urgent issues."
  },
  {
    question: "What areas do you serve?",
    answer: "We proudly serve Hitchcock, Galveston, Texas City, La Marque, and Santa Fe, TX. If you're nearby but don't see your city listed, give us a call to see if we can reach you!"
  },
  {
    question: "Do you provide free estimates?",
    answer: "Absolutely. We provide transparent, upfront, and free estimates for our services. We believe in honest pricing with no hidden surprises."
  }
];
