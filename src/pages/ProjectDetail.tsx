import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

const ProjectDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projects.find((p) => p.id === id);

    if (!project) {
        return (
            <div className="min-h-screen bg-background flex flex-col">
                <Header />
                <div className="flex-1 flex flex-col items-center justify-center p-4">
                    <h1 className="text-2xl font-bold mb-4">Project not found</h1>
                    <Button onClick={() => navigate("/projects")}>Back to Projects</Button>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Hero Section */}
            <div className="relative h-[50vh] min-h-[400px]">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
                            {project.title}
                        </h1>
                        <div className="flex flex-wrap gap-4 text-white/90">
                            <div className="flex items-center gap-2">
                                <MapPin className="w-5 h-5" />
                                <span>{project.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-5 h-5" />
                                <span>{project.year}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <Button
                    variant="ghost"
                    className="mb-8 pl-0 hover:bg-transparent hover:text-primary"
                    onClick={() => navigate("/projects")}
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Projects
                </Button>

                <div className="grid md:grid-cols-3 gap-12">
                    <div className="md:col-span-2 space-y-8">
                        <div>
                            <h2 className="text-2xl font-heading font-semibold text-primary mb-4">Project Overview</h2>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                                {project.fullDescription || project.description}
                            </p>
                        </div>

                        <div className="bg-secondary/20 p-6 rounded-lg border border-border">
                            <h3 className="text-xl font-semibold mb-4 text-foreground">Key Features</h3>
                            <ul className="space-y-3">
                                {project.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                                        <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="bg-primary/5 p-6 rounded-lg border border-primary/10">
                            <h3 className="text-xl font-semibold mb-4 text-foreground">Project Details</h3>
                            <dl className="space-y-4">
                                <div>
                                    <dt className="text-sm font-medium text-muted-foreground">Category</dt>
                                    <dd className="text-foreground font-medium">{project.description}</dd>
                                </div>
                                <div>
                                    <dt className="text-sm font-medium text-muted-foreground">Location</dt>
                                    <dd className="text-foreground font-medium">{project.location}</dd>
                                </div>
                                <div>
                                    <dt className="text-sm font-medium text-muted-foreground">Year Completed</dt>
                                    <dd className="text-foreground font-medium">{project.year}</dd>
                                </div>
                            </dl>
                        </div>

                        <div className="bg-muted p-6 rounded-lg italic text-muted-foreground">
                            "{project.note}"
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ProjectDetail;
