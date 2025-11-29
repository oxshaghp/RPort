"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const leftImagesRef = useRef<(HTMLDivElement | null)[]>([]);
  const rightImagesRef = useRef<(HTMLDivElement | null)[]>([]);

  const leftImages = ["/imges/imgone.avif", "/imges/imgfive.avif"];
  const rightImages = ["/imges/imgsix.avif", "/imges/imgfourtin.avif"];

  useEffect(() => {
    leftImagesRef.current.forEach((img, i) => {
      if (!img) return;
      gsap.fromTo(
        img,
        { x: -300, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: img,
            start: "top 90%",
            end: "top 60%",
            scrub: true,
          },
        }
      );
    });

    rightImagesRef.current.forEach((img, i) => {
      if (!img) return;
      gsap.fromTo(
        img,
        { x: 300, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: img,
            start: "top 90%",
            end: "top 60%",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <section className="relative w-full min-h-[60vh] md:h-screen flex items-center justify-center py-8 md:py-0">
      <div className="absolute inset-0 flex z-50 flex-col items-center justify-center text-center px-4">
        <h1 className="lg:text-7xl md:text-6xl font-bold text-white drop-shadow-lg mb-4">
          Designed that Captivate Today
        </h1>
        <h2 className="text-2xl lg:text-7xl md:text-4xl font-semibold text-white drop-shadow-md">
          & Inspire Tomorrow
        </h2>
      </div>

      <div className="z-0 flex-shrink-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="lg:w-5xl md:w-4xl w-2xl object-cover rounded-4xl"
          src="/video/bgvideo.mp4"
        />
      </div>

      <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col space-y-10 z-20">
        {leftImages.map((src, i) => (
          <div
            key={i}
            ref={(el) => {
              leftImagesRef.current[i] = el;
            }}
            className="opacity-0"
          >
            <img
              src={src}
              alt={`left-img-${i}`}
              className="lg:w-[400px] lg:h-[400px] md:h-[200px] h-[150px] md:w-[200px] w-[150px] object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col space-y-10 z-20">
        {rightImages.map((src, i) => (
          <div
            key={i}
            ref={(el) => {
              rightImagesRef.current[i] = el;
            }}
            className="opacity-0"
          >
            <img
              src={src}
              alt={`right-img-${i}`}
              className="lg:w-[400px] lg:h-[400px] md:h-[200px] h-[150px] md:w-[200px] w-[150px] object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
