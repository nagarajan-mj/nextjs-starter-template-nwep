import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { SocialProof } from "@/components/sections/SocialProof";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { Stats } from "@/components/sections/Stats";
import { WhyZitraar } from "@/components/sections/WhyZitraar";
import { Services } from "@/components/sections/Services";
import { EngagementModel } from "@/components/sections/EngagementModel";
import { FAQ } from "@/components/sections/FAQ";
import { DemoForm } from "@/components/sections/DemoForm";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <ProblemSolution />
        <Stats />
        <WhyZitraar />
        <Services />
        <EngagementModel />
        <FAQ />
        <DemoForm />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
