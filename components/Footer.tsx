"use client";

import {
  FaLinkedin,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-white/5 backdrop-blur-xl border-t border-white/10 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Links */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-12">
          <button
            onClick={() => scrollToSection("home")}
            className="hover:text-purple-400 transition-colors duration-300 neon-text"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="hover:text-purple-400 transition-colors duration-300 neon-text"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("work")}
            className="hover:text-purple-400 transition-colors duration-300 neon-text"
          >
            Work
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-purple-400 transition-colors duration-300 neon-text"
          >
            Contact
          </button>
          <button
            onClick={() => scrollToSection("terminations")}
            className="hover:text-purple-400 transition-colors duration-300 neon-text"
          >
            Terminations
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            className="hover:text-purple-400 transition-colors duration-300 neon-text"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            className="hover:text-green-400 transition-colors duration-300 neon-text"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            className="hover:text-pink-500 transition-colors duration-300 neon-text"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            className="hover:text-blue-500 transition-colors duration-300 neon-text"
          >
            <FaFacebook />
          </a>
        </div>
      </div>

      {/* Copy */}
      <p className="text-center text-white/50 mt-8 text-sm">
        &copy; {new Date().getFullYear()} MindNest.All rights reserved.
      </p>
    </footer>
  );
}
