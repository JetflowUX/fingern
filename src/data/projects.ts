import project1 from "@/assets/project-factory.jpg";
import hospitalSolarPanels from "@/assets/hospital-solar-panels.png";
import floatingSolarPortugal from "/floating-solar-portugal.jpg";

export const projects = [
    {
        id: "solar-energy-usa-commercial",
        title: "Solar Energy (USA)",
        description: "Commercial Properties",
        fullDescription: "This commercial solar installation in the USA provides a sustainable energy solution for a large-scale facility. The system helps in significantly reducing carbon footprint while offering long-term energy savings. Our team managed the entire lifecycle from initial assessment to final commissioning.",
        features: [
            "A modular, stackable system available in single and multi-phase (Sold on ES Packages)",
            "5000VA output power",
            "Real time Monitoring",
            "24/7 technical support",
            "Grid integration capability"
        ],
        image: project1,
        location: "USA",
        year: "2023",
        note: "We are happy to be among the 5 energy companies that executed this project."
    },
    {
        id: "15mw-solar-project-usa",
        title: "15 megawatts solar project (USA)",
        description: "Commercial Properties",
        fullDescription: "One of our most ambitious projects, this 15MW solar plant powers a major industrial complex. Fingren handled key aspects of the engineering and project management, ensuring timely delivery and adherence to strict safety standards.",
        features: [
            "A modular, stackable system available in single and multi-phase (Sold on ES Packages).",
            "5000VA output power",
            "Real time Monitoring",
            "High-efficiency panels",
            "Advanced battery storage integration"
        ],
        image: hospitalSolarPanels,
        location: "USA",
        year: "2022",
        note: "This project is one of our greatest achievement so far with 30% of its process handled by Fingren."
    },
    {
        id: "floating-solar-panel-portugal",
        title: "Floating solar panel (Portugal)",
        description: "Commercial Properties",
        fullDescription: "An innovative floating solar installation in Portugal. This project utilizes water surfaces to generate clean energy while reducing water evaporation. Fingren served as the major contractor, overseeing the complex installation process on water.",
        features: [
            "A modular, stackable system available in single and multi-phase (Sold on ES Packages).",
            "Real time Monitoring",
            "5000VA output power",
            "Water-cooling effect for higher efficiency",
            "Environmental impact minimization"
        ],
        image: floatingSolarPortugal,
        location: "Portugal",
        year: "2019",
        note: "We are proud to be the major contractor for this project which was completed and delivered in Portugal (2019)."
    }
];
