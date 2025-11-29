import About from "@/components/About";
import DarkVeil from "@/components/DarkVeil";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Achievements from "../components/Achievements";
import ServicesSection from "@/components/ServicesSection";
import WorkSection from "@/components/WorkSection";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <DarkVeil />
      </div>

      <div className="w-full">
        <NavBar />
      </div>

      <section id="home" className="relative z-[10] pt-16 md:pt-24">
        <Hero />
      </section>

      <section className="relative z-[10]">
        <About />
      </section>

      <section id="about" className="relative z-[10]">
        <Achievements />
      </section>

      <section id="work" className="relative z-[10]">
        <ServicesSection />
      </section>

      <section className="relative z-[10]">
        <WorkSection />
      </section>
      <section id="terminations" className="relative z-[10] w-full">
        <Testimonials />
      </section>
      <section id="contact" className="relative z-[10] w-full">
        <ContactForm />
      </section>
      <div className="relative z-[10] w-full">
        <Footer />
      </div>
    </main>
  );
}
