"use client";
import React from "react";
import BlurText from "./BlurText";
import { Button } from "./ui/button";
import { FaAward, FaRocket, FaUsers, FaChartLine } from "react-icons/fa";

function Hero() {
  const scrollToWork = () => {
    const el = document.getElementById("work");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const stats = [
    { icon: FaRocket, value: "35+", label: "Projects" },
    { icon: FaUsers, value: "43+", label: "Clients" },
    { icon: FaAward, value: "12+", label: "Awards" },
    { icon: FaChartLine, value: "98%", label: "Satisfaction" },
  ];

  return (
    <section className="relative flex min-h-[60vh] md:min-h-[80vh] w-full items-center justify-center text-center px-4 py-12 md:py-24 text-white">
      <div className="flex max-w-6xl flex-col justify-center items-center text-center gap-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm text-white/90 mb-4">
          <span className="w-2 h-2 bg-[#5227FF] rounded-full animate-pulse"></span>
          <span>Creative Design Agency</span>
        </div>

        {/* TITLE */}
        <BlurText
          text="Design that defines you. Visual identity with purpose."
          className="text-[2.2rem] md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight mb-6"
          animateBy="words"
          direction="top"
          delay={80}
        />

        {/* DESCRIPTION */}
        <BlurText
          text="At MindNest, we merge creative design with strategic intelligence. From building visually compelling brand identities, crafting AI-powered advertising campaigns, to analyzing complex data for insights that drive growth—our mission is to empower businesses and individuals with designs that are not only beautiful but smart, impactful, and unforgettable."
          className="mx-auto text-[17px] text-white/80 leading-relaxed mb-8 max-w-3xl"
          animateBy="words"
          direction="bottom"
          delay={25}
        />

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full max-w-3xl mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#5227FF]/50 transition-all duration-300 hover:bg-white/10 group"
              >
                <Icon className="text-2xl md:text-3xl text-[#5227FF] group-hover:scale-110 transition-transform duration-300" />
                <div className="text-2xl md:text-3xl font-bold text-white group-hover:bg-gradient-to-r group-hover:from-[#5227FF] group-hover:to-[#a66bff] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {stat.value}
                </div>
                <p className="text-xs md:text-sm text-gray-400 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Button
            size="lg"
            onClick={scrollToWork}
            className="px-8 py-6 rounded-xl bg-gradient-to-r from-[#6f3aff] to-[#a66bff] text-white font-medium shadow-[0_0_15px_#7f46ff] hover:shadow-[0_0_25px_#a66bff] hover:scale-[1.04] transition-all"
          >
            Explore my work
          </Button>
          <Button
            size="lg"
            onClick={scrollToContact}
            variant="outline"
            className="px-8 py-6 rounded-xl border-2 border-white/20 bg-white/5 backdrop-blur-sm text-white font-medium hover:bg-white/10 hover:border-white/40 transition-all"
          >
            Get in touch
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
