import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { ExperienceSection } from "@/components/experience-section";
import { FeaturedProjects } from "@/components/featured-projects";
import { HeroSection } from "@/components/hero-section";
import { HiringSection } from "@/components/hiring-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProjects />
      <AboutSection />
      <ExperienceSection />
      <HiringSection />
      <ContactSection />
    </>
  );
}
