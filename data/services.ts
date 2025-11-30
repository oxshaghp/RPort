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
    title: "AI-Powered Advertising",
    description:
      "Full visual identity systems for brands that want to look unique & memorable.",
    icon: "🎨",
  },
  {
    id: 2,
    title: "Data Analysis",
    description:
      "Strategic visual guidance ensuring consistent messaging & aesthetic clarity.",
    icon: "💡",
  },
  {
    id: 4,
    title: "AI Advertising Course",
    description:
      "Data-driven marketing content using machine-learning & predictive audience analysis.",
    icon: "🧠",
  },
  {
    id: 5,
    title: "Social Media",
    description:
      "High-impact posts, stories, and creative campaigns that ignite engagement.",
    icon: "📱",
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "NovaTech Brand Identity",
    category: "AI-Powered Advertising",
    image: "/imges/bgthree.avif",
    tags: ["Logo", "Color System", "Typography"],
  },
  {
    id: 2,
    title: "Astra UI / UX Web Redesign",
    category: "Data Analysis",
    image: "/imges/imgtoelve.avif",
    tags: ["Figma", "Wireframes", "User Flow"],
  },
  {
    id: 3,
    title: "AI Campaign — Vision Ads",
    category: "Data Analysis",
    image: "/imges/imgten.avif",
    tags: ["AI Copy", "Ad Targeting", "Analytics"],
  },
  {
    id: 4,
    title: "Luxury Cosmetics Social Pack",
    category: "Social Media Design",
    image: "/imges/porfour.avif",
    tags: ["Posts", "Reels", "Brand Tone"],
  },
  {
    id: 5,
    title: "FoodApp UI System",
    category: "AI-Powered Advertising",
    image: "/imges/imgnine.avif",
    tags: ["App Design", "User Persona", "Prototype"],
  },
];
