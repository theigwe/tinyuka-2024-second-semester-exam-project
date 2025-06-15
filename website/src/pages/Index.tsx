import AnimatedText from "@/components/AnimatedText";
import { Book, Pen, LayoutDashboard } from "lucide-react";

const NAME = "Samuel Ndubuisi Igwe";
const ROLE = "Lead Cloud Engineer";
const PROJECT_TITLE = "The Future of AI-Powered Logistics";
const PITCH = "Transforming how businesses move goods with real-time, autonomous, and predictive supply chain management. Our platform harnesses AI-driven insights to increase efficiency, lower costs, and deliver a competitive edge across global markets.";
const BIO = `I'm a technical leader with deep expertise in cloud infrastructure, distributed systems, and building scalable SaaS products. Previously, I led engineering at FleetOps (acquired), architected multi-cloud solutions at DataRoute, and contributed to open-source projects around container orchestration. With a Master's in Computer Science from MIT, I combine hands-on coding skills with team leadership and a passion for tackling the world's toughest logistics challenges.`;

const SKILLS = [
    "Cloud Architecture (AWS, GCP, Azure)",
    "Distributed Systems",
    "Team Leadership",
    "TypeScript, Go, Python",
    "AI/ML Integration",
    "Product Strategy"
];

const PAST_PROJECTS = [
    {
        name: "FleetOps",
        description: "Optimized trucking logistics with a serverless, AI-powered operations platform (acquired in 2022).",
        icon: <LayoutDashboard size={22} className="text-primary" />
    },
    {
        name: "DataRoute",
        description: "Multi-cloud data movement for Fortune 500 companies.",
        icon: <Book size={22} className="text-primary" />
    },
    {
        name: "OSS Projects",
        description: "Contributor to Kubernetes plugins and the 'logflare' dev toolkit.",
        icon: <Pen size={22} className="text-primary" />
    }
];

const Index = () => (
    <main className="bg-background min-h-screen w-full px-16 py-24 flex flex-col items-center justify-start animate-fade-in-up">
        {/* Hero Section */}
        <section className="w-full max-w-4xl text-left mb-16">
            <div className="flex items-center gap-4 mb-4">
                <img
                    src="/profile.jpeg"
                    alt="Profile"
                    className="w-20 h-20 rounded-full shadow-lg object-cover border-4 border-primary"
                />
                <div>
                    <h1 className="text-4xl font-playfair font-bold text-primary leading-tight">{NAME}</h1>
                    <span className="text-lg text-muted-foreground block mt-1">{ROLE}</span>
                </div>
            </div>
            <div className="mt-2 mb-6">
                <h2 className="text-3xl font-bold font-playfair text-secondary-foreground leading-snug">{PROJECT_TITLE}</h2>
            </div>
            <div className="mt-2 text-lg text-muted-foreground">
                <AnimatedText text={PITCH} className="text-xl font-medium text-foreground" delay={150} />
            </div>
        </section>

        {/* About/Bio */}
        <section className="w-full max-w-4xl grid md:grid-cols-3 gap-8">
            {/* Bio Main Card */}
            <div className="md:col-span-2 bg-card rounded-xl shadow-xl p-8 flex flex-col">
                <h3 className="font-playfair text-2xl font-semibold mb-2 text-primary">About</h3>
                <p className="text-base lg:text-lg text-muted-foreground mb-4" style={{ lineHeight: "1.75" }}>
                    {BIO}
                </p>
                {/* Skills List */}
                <div>
                    <span className="font-semibold text-primary">Key Skills:</span>
                    <ul className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
                        {SKILLS.map((skill) => (
                            <li
                                key={skill}
                                className="inline-block bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs lg:text-sm font-medium shadow-sm hover:scale-105 transition-transform"
                            >
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* Past Projects Listing */}
            <div className="bg-card rounded-xl shadow-lg p-8 flex flex-col">
                <h3 className="font-playfair text-xl font-semibold mb-2 text-primary">Past Projects</h3>
                <ul className="space-y-5">
                    {PAST_PROJECTS.map((project) => (
                        <li key={project.name} className="flex items-start gap-3">
                            <span>{project.icon}</span>
                            <div>
                                <span className="font-semibold text-foreground">{project.name}</span>
                                <p className="text-sm text-muted-foreground">{project.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>

        {/* Subtle footer for contact, if desired */}
        <footer className="mt-24 text-center w-full max-w-4xl mx-auto text-muted-foreground text-xs opacity-80">
            &copy; {new Date().getFullYear()} Ndubuisi Samuel &mdash; Open for collaborations. | theigwe.dev@gmail.com
        </footer>
    </main>
);

export default Index;