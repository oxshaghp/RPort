export type Service = {
  id: number;
  title: string;
  description: string;
  icon: string;
};

export type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  tags: string[];
};

export const services: Service[] = [
  {
    id: 1,
    title: "Brand Identity Design",
    description:
      "Full visual identity systems for brands that want to look unique & memorable.",
    icon: "🎨",
  },
  {
    id: 2,
    title: "Creative Direction",
    description:
      "Strategic visual guidance ensuring consistent messaging & aesthetic clarity.",
    icon: "💡",
  },
  {
    id: 3,
    title: "UI/UX & Web Design",
    description:
      "Modern interfaces that convert visitors into clients using smart user psychology.",
    icon: "💻",
  },
  {
    id: 4,
    title: "AI-Powered Advertising",
    description:
      "Data-driven marketing content using machine-learning & predictive audience analysis.",
    icon: "🧠",
  },
  {
    id: 5,
    title: "Social Media & Content",
    description:
      "High-impact posts, stories, and creative campaigns that ignite engagement.",
    icon: "📱",
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "NovaTech Brand Identity",
    category: "Branding",
    image: "/imges/bgthree.avif",
    tags: ["Logo", "Color System", "Typography"],
  },
  {
    id: 2,
    title: "Astra UI / UX Web Redesign",
    category: "UI/UX",
    image: "/imges/imgtoelve.avif",
    tags: ["Figma", "Wireframes", "User Flow"],
  },
  {
    id: 3,
    title: "AI Campaign — Vision Ads",
    category: "Marketing",
    image: "/imges/imgten.avif",
    tags: ["AI Copy", "Ad Targeting", "Analytics"],
  },
  {
    id: 4,
    title: "Luxury Cosmetics Social Pack",
    category: "Social Media",
    image: "/imges/porfour.avif",
    tags: ["Posts", "Reels", "Brand Tone"],
  },
  {
    id: 5,
    title: "FoodApp UI System",
    category: "UI/UX",
    image: "/imges/imgnine.avif",
    tags: ["App Design", "User Persona", "Prototype"],
  },
];
