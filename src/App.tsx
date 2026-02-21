import { useRef } from 'react';
import html2canvas from 'html2canvas-pro';
import jsPDF from "jspdf";
import Footer from "./components/footer";
import LenisScroll from "./components/lenis";
import AboutSection from "./sections/about-section";
import EducationSection from "./sections/education-section";
import ExperienceSection from "./sections/experience-section";
import HeroSection from "./sections/hero-section";
import ProjectsSection from "./sections/projects-section";
import SkillsSection from "./sections/skills-section";
import ScrollToTop from './components/scroll-to-top';
import Navbar from './components/navbar';
import * as data from './data.json';

export default function App() {
    const aboutRef = useRef<HTMLDivElement | null>(null);
    const experienceRef = useRef<HTMLDivElement | null>(null);
    const educationRef = useRef<HTMLDivElement | null>(null);
    const projectsRef = useRef<HTMLDivElement | null>(null);
    const skillsRef = useRef<HTMLDivElement | null>(null);
    const languagesRef = useRef<HTMLDivElement | null>(null);
    const printRef = useRef<HTMLDivElement | null>(null);

    const scrollToView = (element: HTMLElement) => {
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const elementMiddle = rect.top + scrollTop - window.innerHeight / 2;

        window.scrollTo({
            top: elementMiddle,
            behavior: 'smooth',
        });
    };

    const handleDownloadPdf = async () => {
        if (!printRef.current) {
            console.error("Nothing to print — printRef is null!");
            return;
        }

        try {
            const pdf = new jsPDF("p", "px", "a4");

            const margin = 20;
            const pageWidth = pdf.internal.pageSize.getWidth();
            const pageHeight = pdf.internal.pageSize.getHeight();
            const usableWidth = pageWidth - margin * 2;
            const usableHeight = pageHeight - margin;

            let currentY = margin;

            const sections = printRef.current.querySelectorAll(".pdf-section");

            for (const section of sections) {

                const childSections = section.querySelectorAll(".child-pdf-section");

                // 🔹 If no child sections → treat whole section normally
                if (childSections.length === 0) {

                    const canvas = await html2canvas(section as HTMLElement, { scale: 2 });
                    const scale = usableWidth / canvas.width;
                    const sectionHeight = canvas.height * scale;

                    if (currentY + sectionHeight > usableHeight) {
                        pdf.addPage();
                        currentY = margin;
                    }

                    pdf.addImage(
                        canvas.toDataURL("image/jpeg"),
                        "PNG",
                        margin,
                        currentY,
                        usableWidth,
                        sectionHeight
                    );

                    currentY += sectionHeight + 10;
                }

                // 🔹 If child sections exist → paginate by child
                else {
                    const titleElement = section.querySelector(".section-title");

                    // Get first child if exists
                    const firstChild = childSections[0] as HTMLElement | undefined;

                    if (titleElement && firstChild) {
                        // Render both to canvas first to measure their heights
                        const titleCanvas = await html2canvas(titleElement as HTMLElement, { scale: 2 });
                        const firstChildCanvas = await html2canvas(firstChild, { scale: 2 });

                        const titleScale = usableWidth / titleCanvas.width;
                        const titleHeight = titleCanvas.height * titleScale;

                        const childScale = usableWidth / firstChildCanvas.width;
                        const firstChildHeight = firstChildCanvas.height * childScale;

                        // If they don't fit on the current page, start a new page
                        if (currentY + titleHeight + firstChildHeight > usableHeight) {
                            pdf.addPage();
                            currentY = margin;
                        }

                        // 🔹 Render title
                        pdf.addImage(
                            titleCanvas.toDataURL("image/jpeg"),
                            "PNG",
                            margin,
                            currentY,
                            usableWidth,
                            titleHeight
                        );
                        currentY += titleHeight + 5;

                        // 🔹 Render first child
                        pdf.addImage(
                            firstChildCanvas.toDataURL("image/jpeg"),
                            "PNG",
                            margin,
                            currentY,
                            usableWidth,
                            firstChildHeight
                        );
                        currentY += firstChildHeight + 10;

                        // 🔹 Render remaining children (if any)
                        for (let i = 1; i < childSections.length; i++) {
                            const child = childSections[i] as HTMLElement;
                            const canvas = await html2canvas(child, { scale: 2 });
                            const scale = usableWidth / canvas.width;
                            const childHeight = canvas.height * scale;

                            if (currentY + childHeight > usableHeight) {
                                pdf.addPage();
                                currentY = margin;
                            }

                            pdf.addImage(
                                canvas.toDataURL("image/jpeg"),
                                "PNG",
                                margin,
                                currentY,
                                usableWidth,
                                childHeight
                            );

                            currentY += childHeight + 10;
                        }
                    } else {
                        // Fallback if no title or no children
                        for (const child of childSections) {
                            const canvas = await html2canvas(child as HTMLElement, { scale: 2 });
                            const scale = usableWidth / canvas.width;
                            const childHeight = canvas.height * scale;

                            if (currentY + childHeight > usableHeight) {
                                pdf.addPage();
                                currentY = margin;
                            }

                            pdf.addImage(
                                canvas.toDataURL("image/jpeg"),
                                "PNG",
                                margin,
                                currentY,
                                usableWidth,
                                childHeight
                            );

                            currentY += childHeight + 10;
                        }
                    }
                }
            }

            pdf.save(`${data.head.name} Résumé.pdf`);

        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            {/* Full-page video background */}
            <video
                autoPlay
                loop
                muted
                className="fixed top-0 left-0 w-full h-full object-cover -z-20"
            >
                <source src={data.backgroundVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="fixed top-0 left-0 w-full h-full bg-black/30 -z-10"></div>

            <Navbar
                onAboutClick={() => scrollToView(aboutRef.current!)}
                onExperienceClick={() => scrollToView(experienceRef.current!)}
                onEducationClick={() => scrollToView(educationRef.current!)}
                onProjectsClick={() => scrollToView(projectsRef.current!)}
                onSkillsClick={() => scrollToView(skillsRef.current!)}
                onLanguagesClick={() => scrollToView(languagesRef.current!)}
                onDownloadClick={handleDownloadPdf}
            />
            <main className="mt-20 mb-2 p-5 max-md:px-4 md:w-[1000px] md:max-w-[1000px] mx-auto bg-white shadow-sm z-50 border border-gray-200 rounded-xl">
                <LenisScroll />
                <div ref={printRef}>
                    <div>
                        <HeroSection {...data.head} />
                    </div>
                    <div ref={aboutRef}>
                        <AboutSection about={data.about} />
                    </div>
                    <div ref={experienceRef}>
                        <ExperienceSection experience={data.experience} />
                    </div>
                    <div ref={educationRef}>
                        <EducationSection education={data.education} />
                    </div>
                    <div ref={projectsRef}>
                        <ProjectsSection projects={data.projects} />
                    </div>
                    <div ref={skillsRef}>
                        <SkillsSection title="Skills" skills={data.skills} />
                    </div>
                    <div ref={languagesRef}>
                        <SkillsSection title="Languages" skills={data.languages} />
                    </div>
                </div>
                <Footer />
            </main>
            <ScrollToTop />
        </>
    )
}