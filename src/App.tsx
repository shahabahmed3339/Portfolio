import { useRef } from 'react';
import Footer from "./components/footer";
import LenisScroll from "./components/lenis";
import AboutSection from "./sections/about-section";
import ContactSection from "./sections/contact-section";
import EducationSection from "./sections/education-section";
import ExperienceSection from "./sections/experience-section";
import HeroSection from "./sections/hero-section";
// import ProjectsSection from "./sections/projects-section";
import SkillsSection from "./sections/skills-section";
import ScrollToTop from './components/scroll-to-top';

export default function App() {
    const contactRef = useRef<HTMLDivElement | null>(null);
    return (
        <main className="max-md:px-4">
            <LenisScroll />
            <ScrollToTop />
            <HeroSection
                onContactClick={() => contactRef.current?.scrollIntoView({ behavior: "smooth" })}
            />
            <AboutSection />
            <ExperienceSection />
            <EducationSection />
            {/* <ProjectsSection /> */}
            <SkillsSection />
            <div ref={contactRef}>
                <ContactSection />
            </div>
            <Footer />
        </main>
    )
}