"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type BlurTextProps = {
  text?: string;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  className?: string;
  delay?: number; // delay بين العناصر بالميلي ثانية
  stepDuration?: number; // مدة كل خطوة بالثواني
};

const BlurText: React.FC<BlurTextProps> = ({
  text = "",
  animateBy = "words",
  direction = "top",
  className = "",
  delay = 200,
  stepDuration = 0.35,
}) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const elements = animateBy === "words" ? text.split(" ") : text.split("");

  useEffect(() => {
    if (!ref.current) return;

    const spans = Array.from(ref.current.querySelectorAll("span"));

    spans.forEach((span, index) => {
      gsap.fromTo(
        span,
        {
          opacity: 0,
          y: direction === "top" ? -50 : 50,
          filter: "blur(10px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: stepDuration,
          delay: (index * delay) / 1000,
          ease: "power2.out",
          scrollTrigger: {
            trigger: span,
            start: "top 80%",
          },
        }
      );
    });
  }, [elements, direction, delay, stepDuration]);

  return (
    <p ref={ref} className={`blur-text ${className} flex flex-wrap`}>
      {elements.map((segment, index) => (
        <span key={index} style={{ display: "inline-block" }}>
          {segment === " " ? "\u00A0" : segment}
          {animateBy === "words" && index < elements.length - 1 && "\u00A0"}
        </span>
      ))}
    </p>
  );
};

export default BlurText;
