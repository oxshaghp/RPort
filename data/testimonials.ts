export interface Testimonial {
  id: number;
  name: string;
  role: string;
  comment: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "E-commerce Founder",
    comment:
      "MindNest delivered branding that completely transformed our presence. Our sales literally doubled in 2 months!",
    avatar: "/imges/imgfiften.avif",
  },
  {
    id: 2,
    name: "Daniel Carter",
    role: "Marketing Director",
    comment:
      "Working with MindNest was an outstanding experience. The attention to detail and UI quality was world-class.",
    avatar: "/imges/imgsevnten.avif",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Startup CEO",
    comment:
      "They don’t just design — they understand the business goals behind the visuals. Highly recommended!",
    avatar: "/imges/imgtwenty.avif",
  },
  {
    id: 4,
    name: "Jonathan Blake",
    role: "Brand Manager",
    comment:
      "Professional, creative, fast, and extremely collaborative. An absolute pleasure to work with.",
    avatar: "/imges/por.avif",
  },
];
