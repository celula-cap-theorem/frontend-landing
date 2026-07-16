import { Architecture } from "@/components/Architecture";
import { CTA } from "@/components/CTA";
import { Docs } from "@/components/Docs";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Navbar } from "@/components/Navbar";
import { Security } from "@/components/Security";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <HowItWorks />
        <Architecture />
        <Security />
        <Docs />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
