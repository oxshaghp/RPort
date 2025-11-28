import About from "@/components/About";
import DarkVeil from "@/components/DarkVeil";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Achievements from "../components/Achievements";

export default function Home() {
  return (
    <main className="relative bg-black overflow-hidden">
      {/* BACKGROUND EFFECT */}
      <div className="absolute inset-0 z-1">
        <DarkVeil />
      </div>

      {/* NAVBAR ALWAYS ON TOP */}
      <div className="absolute top-0 left-0 z-50 w-full">
        <NavBar />
      </div>

      {/* HERO CENTRED ABOVE THE EFFECT */}
      <div className="relative z-20 flex items-center justify-center min-h-screen w-full">
        <Hero />
      </div>
      <div className="relative z-20 w-full">
        <About />
      </div>
      <div className="relative z-30 w-full">
        <Achievements />
      </div>
    </main>
  );
}
