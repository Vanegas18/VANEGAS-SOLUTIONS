import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/sections/hero";
import { PainSection } from "@/components/sections/pain";

export default function Home() {
  return (
    <main style={{ backgroundColor: "#0A0A0F", minHeight: "100vh" }}>
      <Navbar />
      <HeroSection />
      <PainSection />
    </main>
  );
}
