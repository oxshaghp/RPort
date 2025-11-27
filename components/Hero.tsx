"use client";
import React from "react";
import BlurText from "./BlurText";
import { Button } from "./ui/button";

function Hero() {
  return (
    <section className="relative flex min-h-screen W-full items-center justify-center px-4 py-20 text-white">
      <div className=" flex max-w-6xl flex-col justify-center items-center gap-8 text-center">
        <BlurText
          text="MindNest Crafting Intelligent Visual Experiences"
          className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl lg:text-7xl"
          animateBy="words"
          direction="top"
          delay={80}
        />

        <p className="text-base text-white/70 md:text-lg">
          At MindNest, we merge creative design with strategic intelligence.
          From building visually compelling brand identities, crafting
          AI-powered advertising campaigns, to analyzing complex data for
          insights that drive growth, our mission is to empower businesses and
          individuals with designs that are not only beautiful but smart,
          impactful, and unforgettable.
        </p>

        <Button
          size="lg"
          className="rounded-full border border-white/30 bg-white/10 px-10 py-6 text-base font-semibold text-white hover:bg-white/20"
        >
          Explore my work
        </Button>
      </div>
    </section>
  );
}

export default Hero;
