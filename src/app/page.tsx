import Hero from "@/components/sections/Hero";
import ADNSection from "@/components/sections/ADNSection";
import ServiceBento from "@/components/sections/ServiceBento";
import PricingSection from "@/components/sections/PricingSection";
import Alliance from "@/components/sections/Alliance";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Hero />
      <ADNSection />
      <ServiceBento />
      <PricingSection />
      <Alliance />
      <Contact />
      <Footer />
    </main>
  );
}
