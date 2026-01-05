import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
    return (
        <main className="min-h-screen">
            <div id="home">
                <HeroSection />
            </div>
            <ProjectsSection />
            <ExperienceSection />
            <ContactSection />
        </main>
    );
}
