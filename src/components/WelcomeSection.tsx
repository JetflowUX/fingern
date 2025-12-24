import engineersImage from "@/assets/engineers.jpg";

const WelcomeSection = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in">
          <h3 className="text-lg text-primary font-medium mb-2">Welcome to Fingren</h3>
          <h2 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-4">
            Where We Build Your Visions
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Sunlight made into electricity. It's that simple. Enough electricity to power not just a few appliances, but an entire home. Fingren provides a complete design and project management service; from feasibility, design and contract administration to final completion and handover.
          </p>
        </div>
        <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="absolute -right-4 -top-4 w-full h-full border-2 border-primary rounded-lg" />
          <img
            src={engineersImage}
            alt="Fingren engineers reviewing solar project"
            className="relative z-10 rounded-lg shadow-lg w-full h-64 md:h-80 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
