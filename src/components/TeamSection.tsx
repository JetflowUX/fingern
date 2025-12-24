import { User } from "lucide-react";
import teamImg2 from "@/assets/team-img-2.jpg";
import teamImg3 from "@/assets/team-img-3.jpg";
import harrisonImage from "/harrison-finnestad.jpg";

const team = [
  {
    name: "Harrison Finnestad",
    role: "CEO/ President",
    email: "harrisonsolar@fingren.com",
    image: harrisonImage,
  },
  {
    name: "Samantha Ingles",
    role: "Accountant/ Assistant",
    image: teamImg2,
  },
  {
    name: "Antonio Rodriguez", // Fixed typo
    role: "Technical/ maintenance",
    image: teamImg3,
  },
];

const TeamSection = () => {
  return (
    <section className="bg-secondary py-16">
      <div className="container-section py-0">
        <h2 className="section-heading">Our Expert Team</h2>
        <p className="text-muted-foreground mb-12 max-w-3xl">
          We are able to accomplish all of our achievements because we are made up of small, but qualified professionals willing to take on difficult tasks and do everything it takes to uplift Fingren as a brand.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-48 h-48 mx-auto mb-4 bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                {member.image ? (
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                ) : (
                  <User className="w-24 h-24 text-muted-foreground/50" />
                )}
              </div>
              <h3 className="font-heading font-semibold text-primary">{member.name}</h3>
              <p className="text-muted-foreground text-sm">{member.role}</p>
              {member.email && (
                <a href={`mailto:${member.email}`} className="text-sm text-primary hover:underline">
                  {member.email}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
