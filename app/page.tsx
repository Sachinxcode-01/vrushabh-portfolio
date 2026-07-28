import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { MarqueeStrip } from '@/components/ui/MarqueeStrip';
import { AboutSection } from '@/components/sections/AboutSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { BentoSection } from '@/components/sections/BentoSection';
import { EducationSection } from '@/components/sections/EducationSection';
import { AchievementsSection } from '@/components/sections/AchievementsSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { NowSection } from '@/components/sections/NowSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { CommandMenu } from '@/components/navigation/CommandMenu';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#05070f] relative overflow-hidden">
      {/* Command Menu (Cmd + K Shortcut) */}
      <CommandMenu />

      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Main Single Page Sections */}
      <main id="main-content">
        <HeroSection />
        <MarqueeStrip />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <BentoSection />
        <EducationSection />
        <AchievementsSection />
        <ServicesSection />
        <NowSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
