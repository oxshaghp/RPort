import FloatingLines from "@/components/FloatingLines";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <main className="relative h-screen w-full bg-black">
      <FloatingLines />
      <div className=" absolute top-0 left-0 w-full h-full">
        <NavBar />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
        <Hero />
      </div>
    </main>
  );
}
