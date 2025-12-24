import hospitalImage from "@/assets/project-hospital.jpg";
import streetlightImage from "@/assets/project-streetlight.jpg";
import factoryImage from "@/assets/project-factory.jpg";
import residenceImage from "@/assets/project-residence.jpg";
import solar1 from "@/assets/solar-1.jpg";
import solar4 from "@/assets/solar-4.jpg";

const projects = [
  { name: "hospital panels", image: hospitalImage },
  { name: "street light", image: streetlightImage },
  { name: "factory", image: factoryImage },
  { name: "residence", image: residenceImage },
  { name: "industrial", image: solar1 },
  { name: "household", image: solar4 },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="container-section">
      <h2 className="section-heading">Our Recent Projects</h2>
      <p className="text-muted-foreground mb-12 max-w-3xl">
        You need not worry about the kind of project you want to illuminate. We are experienced when it comes to solar panels in general. Checkout the pictures of our recent jobs below.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg aspect-[4/3] animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="absolute bottom-4 left-4 text-primary-foreground font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {project.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
