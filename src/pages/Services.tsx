import { FileText, Settings, Wrench, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import workerImage from "@/assets/worker-consultation.jpg";

const services = [
  {
    icon: FileText,
    title: "Request a quote",
    description: "We will guide your solution requirements towards a cost that fits your budget.",
  },
  {
    icon: Settings,
    title: "Customize it",
    description: "Our team of experts will work with you to build a system that fits your energy need.",
  },
  {
    icon: Wrench,
    title: "We'll set it up",
    description: "Our trained installers will deliver a fully functional system with quality assurance.",
  },
  {
    icon: Headphones,
    title: "Count on us",
    description: "We will provide superior after-sales support with real time monitoring.",
  },
];

const products = [
  {
    title: "ARNERGY 5000 (LO)",
    description: "A modular, stackable system available in single and multi-phase (Sold on LO Packages). Arnergy's finance model where the customer leases the asset towards ownership after 36 months.",
  },
  {
    title: "ARNERGY 5000 (OS)",
    description: "A modular, stackable system available in single and multi-phase (Sold on OS Packages). Our outright sale option where customers pay the outright cost to purchase a system.",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Banner */}
      <section className="relative h-48 md:h-64 bg-navy flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-navy to-navy-light opacity-90" />
        <h1 className="relative z-10 text-3xl md:text-4xl font-heading font-bold text-primary-foreground">
          Services
        </h1>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-primary mb-4">
              Our Services
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              End to end solutions for reliable energy to economic clusters. Our team of experts will work with you to build a system that fits your energy need and our trained installers will deliver a fully functional system with quality assurance.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {services.map((service) => (
                <div key={service.title} className="space-y-2">
                  <div className="flex items-center gap-2">
                    <service.icon className="w-5 h-5 text-primary" />
                    <h3 className="font-heading font-semibold text-foreground">{service.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img
              src={workerImage}
              alt="Solar installation services"
              className="rounded-lg shadow-lg w-full h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Home Users Section */}
      <section className="bg-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-heading font-semibold text-primary mb-8">
            Home Users
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product) => (
              <div key={product.title} className="bg-background p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                  {product.title}
                </h3>
                <p className="text-muted-foreground">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl md:text-2xl font-heading font-semibold text-primary-foreground mb-6">
            We Provide The Best Services to household and business
          </h3>
          <Link to="/contact">
            <Button variant="outline" className="bg-background text-foreground hover:bg-secondary">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
