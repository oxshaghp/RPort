"use client";

import { useState, useRef, useEffect } from "react";
import { projects } from "@/data/services";
import gsap from "gsap";

const categories = ["All", "Branding", "UI/UX", "Marketing", "Social Media"];

export default function WorkSection() {
  const [active, setActive] = useState("All");
  const cardsRef = useRef<HTMLDivElement[]>([]);

  // filtering
  const filteredProjects =
    active === "All"
      ? projects
      : projects.filter((project) => project.category === active);

  // entrance animation for cards
  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.35,
        stagger: 0.08,
        ease: "power2.out",
      }
    );
  }, [active]);

  return (
    <section className="w-full text-white py-24 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">Selected Work</h2>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full border transition ${
              active === cat
                ? "border-purple-400 text-purple-300 scale-105"
                : "border-white/20 text-white/70 hover:border-white/50 hover:scale-105"
            }`}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, idx) => (
          <div
            key={project.id}
            ref={(el) => {
              if (el) cardsRef.current[idx] = el;
            }}
            className="bg-white/5 border border-white/10 rounded-xl overflow-hidden backdrop-blur-md hover:-translate-y-1 hover:scale-[1.02] transition-all"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-48 w-full object-cover opacity-90 hover:opacity-100 transition"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{project.title}</h3>
              <p className="text-purple-300 text-sm mt-1">{project.category}</p>
              <div className="flex gap-2 mt-3 flex-wrap">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 text-xs bg-white/10 rounded-full border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
