"use client";
import { services } from "@/data/services";

export default function ServicesSection() {
  return (
    <section className="w-full text-white py-24 px-6 ">
      <h2 className="text-4xl font-bold mb-12 text-center">What We Offer</h2>

      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-white/70 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
