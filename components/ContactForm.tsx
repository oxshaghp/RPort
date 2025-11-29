"use client";

import { useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    const form = formRef.current as HTMLFormElement;
    const name = form.user_name?.value?.trim();
    const email = form.user_email?.value?.trim();
    const message = form.message?.value?.trim();

    if (!name || !email || !message) {
      toast.error("Please fill in all fields.");
      return;
    }

    setLoading(true);

    try {
      await emailjs.sendForm(
        "service_b8ff6lj", // ضع Service ID من EmailJS
        "template_zu0bpol", // ضع Template ID من EmailJS
        form,
        "FVxBzYZHPJU5gXfYI" // ضع Public Key من EmailJS
      );
      toast.success("Message sent successfully!");
      form.reset();
    } catch (error: any) {
      if (process.env.NODE_ENV === "development") {
        console.error("EmailJS Error:", error);
      }
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full text-white py-24 px-6">
      <ToastContainer />
      <h2 className="text-4xl font-bold text-center mb-16">Contact Me</h2>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl shadow-lg flex flex-col gap-6"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          className="p-4 rounded-xl bg-white/10 border border-white/20 placeholder:text-white/50 text-white focus:outline-none"
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          className="p-4 rounded-xl bg-white/10 border border-white/20 placeholder:text-white/50 text-white focus:outline-none"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="p-4 rounded-xl bg-white/10 border border-white/20 placeholder:text-white/50 text-white focus:outline-none resize-none"
          rows={5}
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-purple-600 hover:bg-purple-700 transition-all duration-300 text-white font-semibold py-4 rounded-xl"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
}
