import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-48 md:h-64 bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center">
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">
          Projects
        </h1>
      </section>

      {/* Recent Projects Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-heading font-semibold text-primary mb-4">
            Recent Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We have executed big projects, but below are few ones we can boast of.
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={project.id} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
              <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className={index % 2 === 1 ? 'md:col-start-1' : ''}>
                <h3 className="text-xl md:text-2xl font-heading font-semibold text-primary mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <ul className="space-y-2 mb-6">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                      <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mb-4">
                  <p className="text-muted-foreground">{project.note}</p>
                </div>
                <Link to={`/projects/${project.id}`}>
                  <Button className="bg-primary hover:bg-primary/90">
                    Visit Project
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;