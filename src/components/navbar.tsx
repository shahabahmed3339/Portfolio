"use client";

import { useState } from "react";

interface NavbarProps {
    onAboutClick: () => void;
    onExperienceClick: () => void;
    onEducationClick: () => void;
    onProjectsClick: () => void;
    onSkillsClick: () => void;
    onContactClick: () => void;
    onDownloadClick: () => void;
}

export default function Navbar({
    onAboutClick,
    onExperienceClick,
    onEducationClick,
    onProjectsClick,
    onSkillsClick,
    onContactClick,
    onDownloadClick,
}: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (cb: () => void) => {
        cb();
        setIsOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
            <div className="md:w-[950px] mx-auto px-4 py-4 flex justify-between items-center">

                {/* Logo */}
                <div className="text-lg font-semibold cursor-pointer">
                    My Portfolio
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 text-sm font-medium">
                    <button onClick={onAboutClick}>About</button>
                    <button onClick={onExperienceClick}>Experience</button>
                    <button onClick={onEducationClick}>Education</button>
                    <button onClick={onSkillsClick}>Skills</button>
                    <button onClick={onContactClick}>Contact</button>
                    <button onClick={onDownloadClick}>Download Résumé</button>
                </div>

                {/* Mobile Button */}
                <button
                    className="md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white px-4 pb-4 flex flex-col gap-4 text-sm font-medium">
                    <button onClick={() => handleClick(onAboutClick)}>About</button>
                    <button onClick={() => handleClick(onExperienceClick)}>Experience</button>
                    <button onClick={() => handleClick(onEducationClick)}>Education</button>
                    <button onClick={() => handleClick(onProjectsClick)}>Projects</button>
                    <button onClick={() => handleClick(onSkillsClick)}>Skills</button>
                    <button onClick={() => handleClick(onContactClick)}>Contact</button>
                    <button onClick={onDownloadClick}>Download Résumé</button>
                </div>
            )}
        </nav>
    );
}
