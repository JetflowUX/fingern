import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StatsSection from "@/components/StatsSection";
import TeamSection from "@/components/TeamSection";
import whoWeAreImage from "@/assets/who-we-are.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Banner */}
      <section className="relative h-48 md:h-64 bg-navy flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-navy to-navy-light opacity-90" />
        <h1 className="relative z-10 text-3xl md:text-4xl font-heading font-bold text-primary-foreground">
          About Us
        </h1>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-primary mb-4">
              About Us
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A reliable and affordable solar energy solution for homes and businesses. Our mission is to deliver energy solution for productive use by deploying products, services and systems that power business operations and improve economic outcomes for our clients.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <ArrowRight className="w-4 h-4 text-primary" />
                  Professional Specialist
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <ArrowRight className="w-4 h-4 text-primary" />
                  Brilliant Ideas
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <ArrowRight className="w-4 h-4 text-primary" />
                  Precise Builders
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <ArrowRight className="w-4 h-4 text-primary" />
                  24/7 Assistance
                </li>
              </ul>
            </div>
          </div>
          <div className="relative">
            <img
              src={whoWeAreImage}
              alt="About Fingren"
              className="rounded-lg shadow-lg w-full h-80 object-cover"
            />
          </div>
        </div>
      </section>

      <TeamSection />

      <StatsSection />
      <Footer />
    </div>
  );
};



export default About;
