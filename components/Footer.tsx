"use client";

import {
  FaLinkedin,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-white/5 backdrop-blur-xl border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
              MindNest
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Creative design agency specializing in visual identity, AI-powered
              advertising, and strategic brand development.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-[#5227FF] hover:border-[#5227FF] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-lg" />
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-[#25D366] hover:border-[#25D366] transition-all duration-300"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-lg" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-gradient-to-r hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#dc2743] hover:border-transparent transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram className="text-lg" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-[#1877F2] hover:border-[#1877F2] transition-all duration-300"
                aria-label="Facebook"
              >
                <FaFacebook className="text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-400 hover:text-[#5227FF] transition-colors duration-300 text-left text-sm"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-400 hover:text-[#5227FF] transition-colors duration-300 text-left text-sm"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("work")}
                className="text-gray-400 hover:text-[#5227FF] transition-colors duration-300 text-left text-sm"
              >
                Our Work
              </button>
              <button
                onClick={() => scrollToSection("terminations")}
                className="text-gray-400 hover:text-[#5227FF] transition-colors duration-300 text-left text-sm"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-400 hover:text-[#5227FF] transition-colors duration-300 text-left text-sm"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-semibold mb-2">Services</h4>
            <div className="flex flex-col gap-3">
              <p className="text-gray-400 text-sm">Brand Identity Design</p>
              <p className="text-gray-400 text-sm">AI-Powered Advertising</p>
              <p className="text-gray-400 text-sm">Visual Design</p>
              <p className="text-gray-400 text-sm">Data Analysis</p>
              <p className="text-gray-400 text-sm">Creative Strategy</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-semibold mb-2">Get in Touch</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <FaEnvelope className="text-[#5227FF] flex-shrink-0" />
                <a
                  href="mailto:hello@mindnest.com"
                  className="hover:text-[#5227FF] transition-colors duration-300"
                >
                  hello@mindnest.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <FaPhone className="text-[#5227FF] flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="hover:text-[#5227FF] transition-colors duration-300"
                >
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-start gap-3 text-gray-400 text-sm">
                <FaMapMarkerAlt className="text-[#5227FF] flex-shrink-0 mt-1" />
                <span>Creative District, Design City</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} MindNest. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a
              href="#"
              className="hover:text-[#5227FF] transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <span>•</span>
            <a
              href="#"
              className="hover:text-[#5227FF] transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
