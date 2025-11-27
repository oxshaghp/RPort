"use client";
import React from "react";
import StaggeredMenu from "@/components/StaggeredMenu";

function NavBar() {
  const menuItems = [
    { label: "Home", ariaLabel: "Go to home page", link: "/" },

    { label: "About", ariaLabel: "Learn about us", link: "/about" },

    { label: "Services", ariaLabel: "View our services", link: "/services" },

    { label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
  ];

  const socialItems = [
    { label: "Twitter", link: "https://twitter.com" },

    { label: "GitHub", link: "https://github.com" },

    { label: "LinkedIn", link: "https://linkedin.com" },
  ];
  return (
    <div className="fixed top-5 left-0 z-50 w-full px-4">
      <nav className="flex items-center justify-between gap-6 rounded-3xl border border-white/10 bg-black/50 px-6 py-4 text-white backdrop-blur-2xl">
        <div className="flex flex-col gap-1 text-left">
          <h1 className="text-2xl font-semibold">Minddeast</h1>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-sm uppercase tracking-[0.4em] text-white/60">
            Ready
          </span>

          <StaggeredMenu
            position="right"
            items={menuItems}
            socialItems={socialItems}
            displaySocials={true}
            displayItemNumbering={true}
            menuButtonColor="#fff"
            openMenuButtonColor="#fff"
            changeMenuColorOnOpen={true}
            colors={["#B19EEF", "#5227FF"]}
            inlineTrigger={true}
            showLogo={false}
            accentColor="#ff6b6b"
          />
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
