import { useState, useEffect } from "react";
import heroImage1 from "@/assets/hero-solar-1.jpg";
import heroImage2 from "@/assets/project-factory.jpg";
import heroImage3 from "@/assets/project-hospital.jpg";
import heroImage4 from "@/assets/project-residence.jpg";
import heroImage5 from "@/assets/worker-consultation.jpg";

const slides = [
  heroImage1,
  heroImage2,
  heroImage3,
  heroImage4,
  heroImage5,
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]); // Reset timer when slide changes

  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          style={{ backgroundImage: `url(${slide})` }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-navy/30 to-navy/50" />

      {/* Slide counter */}
      <div className="absolute top-4 left-4 text-white text-sm font-medium z-10">
        {currentSlide + 1} / {slides.length}
      </div>

      {/* Dots indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`w-3 h-3 rounded-full transition-all ${i === currentSlide ? "bg-primary scale-110" : "bg-white/50 hover:bg-white/75"
              }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
