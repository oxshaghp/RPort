"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import StaggeredMenu from "@/components/StaggeredMenu";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

function NavBar() {
  const navRef = useRef(null);

  const menuItems = [
    { label: "Home", ariaLabel: "Go to home page", link: "#home" },
    { label: "About", ariaLabel: "Learn about us", link: "#about" },
    { label: "Work", ariaLabel: "View our work", link: "#work" },
    {
      label: "Terminations",
      ariaLabel: "View testimonials",
      link: "#terminations",
    },
    { label: "Contact", ariaLabel: "Get in touch", link: "#contact" },
  ];

  useEffect(() => {
    gsap.to(navRef.current, {
      backdropFilter: "blur(14px)",
      backgroundColor: "rgba(0,0,0,0.55)",
      duration: 0.4,
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <div
      ref={navRef}
      className="fixed pointer-events-none top-4 left-0 right-0 px-4 z-[1000]"
    >
      <nav className="pointer-events-auto flex items-center justify-between gap-6 rounded-3xl border border-white/10 bg-black/20 px-6 py-4 text-white transition-all max-w-[calc(100%-2rem)] mx-auto">
        {/* Logo */}
        <Link href="/" className="flex flex-col gap-0 text-left">
          <h1 className="text-xl font-semibold uppercase tracking-wide">
            MindNest
          </h1>
        </Link>

        {/* Menu */}
        <StaggeredMenu
          position="right"
          items={menuItems}
          displaySocials={true}
          displayItemNumbering={true}
          isFixed={true}
          menuButtonColor="#fff"
          openMenuButtonColor="#000"
          changeMenuColorOnOpen={true}
          colors={["#B19EEF", "#5227FF"]}
          accentColor="#a66bff"
        />
      </nav>
    </div>
  );
}

export default NavBar;
