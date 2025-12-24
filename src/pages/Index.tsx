import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import WelcomeSection from "@/components/WelcomeSection";
import SpecializationSection from "@/components/SpecializationSection";
import ConsultationCTA from "@/components/ConsultationCTA";
import ProjectsSection from "@/components/ProjectsSection";
import TeamSection from "@/components/TeamSection";
import StatsSection from "@/components/StatsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroCarousel />
      <WelcomeSection />
      <SpecializationSection />
      <ConsultationCTA />
      <ProjectsSection />
      <TeamSection />
      <StatsSection />
      <Footer />
    </div>
  );
};

export default Index;
