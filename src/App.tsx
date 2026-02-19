import { useRef, useState } from 'react';
import html2canvas from 'html2canvas-pro';
import jsPDF from "jspdf";
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
    const printRef = useRef<HTMLDivElement | null>(null);
    const [isDownloading, setIsDownloading] = useState(false);

    const handleDownloadPdf = async () => {
        if (!printRef.current) {
            console.error("Nothing to print — printRef is null!");
            return;
        }

        setIsDownloading(true);
        setTimeout(async () => {
            try {
                const element = printRef.current;
                const canvas = await html2canvas(element!, { scale: 2 });
                const imgData = canvas.toDataURL("image/png");

                const pdf = new jsPDF("p", "mm", "a4");
                const imgProps = pdf.getImageProperties(imgData);
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

                let heightLeft = pdfHeight;
                let position = 0;

                pdf.addImage(imgData, "PNG", 0, position, pdfWidth, pdfHeight);
                heightLeft -= pdf.internal.pageSize.getHeight();

                while (heightLeft > 0) {
                    position = heightLeft - pdfHeight;
                    pdf.addPage();
                    pdf.addImage(imgData, "PNG", 0, position, pdfWidth, pdfHeight);
                    heightLeft -= pdf.internal.pageSize.getHeight();
                }

                pdf.save("portfolio.pdf");
            } catch (err) {
                console.error(err);
            }
            setIsDownloading(false);
        }, 0);
    };

    return (
        <main className="max-md:px-4 print-padding">
            <LenisScroll />
            <ScrollToTop />
            <div ref={printRef}>
                <HeroSection
                    onContactClick={() => contactRef.current?.scrollIntoView({ behavior: "smooth" })}
                    onDownloadClick={handleDownloadPdf}
                    isDownloading={isDownloading}
                />
                <AboutSection />
                <ExperienceSection />
                <EducationSection />
                {/* <ProjectsSection /> */}
                <SkillsSection />
                <div ref={contactRef}>
                    <ContactSection />
                </div>
            </div>
            <Footer />
        </main>
    )
}