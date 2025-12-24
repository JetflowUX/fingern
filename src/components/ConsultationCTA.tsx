import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import workerImage from "@/assets/worker-consultation.jpg";

const ConsultationCTA = () => {
  return (
    <section className="container-section">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img
            src={workerImage}
            alt="Solar panel installation worker"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-primary font-medium mb-2">Get Your Free Consultation</h3>
          <p className="text-muted-foreground mb-6">
            We will contact you in less than 24 hours.
          </p>
          <Link to="/contact">
            <Button className="bg-primary hover:bg-orange-dark text-primary-foreground">
              Send Request
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ConsultationCTA;
