"use client";
import React from "react";
import BlurText from "./BlurText";
import { Button } from "./ui/button";

function Hero() {
  return (
    <section className="relative z-80 flex min-h-screen w-full items-center justify-center text-center px-4 py-24 text-white">
      <div className="flex max-w-4xl flex-col justify-center items-center text-center">
        {/* TITLE */}
        <BlurText
          text="Design that defines you. Visual identity with purpose."
          className="text-[2.2rem] md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight mb-8"
          animateBy="words"
          direction="top"
          delay={80}
        />

        {/* DESCRIPTION */}
        <BlurText
          text="At MindNest, we merge creative design with strategic intelligence. From building visually compelling brand identities, crafting AI-powered advertising campaigns, to analyzing complex data for insights that drive growth—our mission is to empower businesses and individuals with designs that are not only beautiful but smart, impactful, and unforgettable."
          className="mx-auto text-[17px] text-white/80 leading-relaxed mb-10"
          animateBy="words"
          direction="bottom"
          delay={25}
        />

        {/* CTA Button */}
        <Button
          size="lg"
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#6f3aff] to-[#a66bff] text-white font-medium shadow-[0_0_15px_#7f46ff] hover:shadow-[0_0_25px_#a66bff] hover:scale-[1.04] transition-all"
        >
          Explore my work
        </Button>
      </div>
    </section>
  );
}

export default Hero;
