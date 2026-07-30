import { Architecture } from "@/components/Architecture";
import { CTA } from "@/components/CTA";
import { Docs } from "@/components/Docs";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Navbar } from "@/components/Navbar";
import { Security } from "@/components/Security";
import { Stats } from "@/components/Stats";
import { apiFetch } from "@/lib/api";
import type { LandingMetrics } from "@/lib/types";

async function getMetrics(): Promise<LandingMetrics | null> {
  try {
    return await apiFetch<LandingMetrics>("/api/landing/metrics");
  } catch {
    return null;
  }
}

export default async function Home() {
  const metrics = await getMetrics();

  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero metrics={metrics} />
        <Stats metrics={metrics} />
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
