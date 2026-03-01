import { useState, useEffect } from 'react';
import { ThemeProvider } from 'next-themes';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { TechStackSection } from '@/components/TechStackSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { LoadingScreen } from '@/components/LoadingScreen';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <div className="min-h-screen bg-background animate-fade-in">
          <Navbar />
          <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ExperienceSection />
            <TechStackSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      )}
    </ThemeProvider>
  );
};

export default Index;
