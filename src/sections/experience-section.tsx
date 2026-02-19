import Section from "../components/section";

export default function ExperienceSection() {
    const experience = [
        {
            image: "/assets/dn.jpg",
            title: "Senior Software engineer",
            company: "Binary Tech",
            description: "Healthcare Software Support & Maintenance Specialist",
            location: "Lahore, Pakistan",
            start: "Mar 2024",
            end: "Feb 2026",
            accomplishments: [
                "Developed a medical software system using the MEAN stack.",
                "Standardized modules to improve efficiency and readability.",
                "Successfully completed sprint tasks within assigned timelines.",
                "Provided real-time issue support for customers.",
            ],
        },
        {
            image: "/assets/lps.png",
            title: "Associate Software Engineer",
            company: "Logic Powered Solutions",
            description: "Software and IT Solutions",
            location: "Islamabad, Pakistan",
            start: "Dec 2021",
            end: "Mar 2024",
            accomplishments: [
                "MEAN Stack developer building and maintaining scalable, reliable systems.",
                "Developing a multi-module ERP system (HR, Accounts, Finance, Ledgers, etc.).",
                "Developing Power BI solutions with clean, efficient, and maintainable code.",
                "Troubleshooting software defects and supporting production environments.",
            ],
        },
        {
            image: "/assets/qc-360.png",
            title: "Junior Full Stack Developer",
            company: "Quality Compliance 360",
            description: "ISO Quality Compliance",
            location: "Islamabad, Pakistan",
            start: "Feb 2021",
            end: "Dec 2021",
            accomplishments: [
                "Developed a MERN stack web app for ISO-compliant risk assessments.",
                "Developed a scalable HR management and recruitment system.",
                "Built a real-time attendance system in Django using machine learning.",
            ],
        },
    ];

    return (
        <Section title="Experience">
            <div className="w-full space-y-2">
                {experience.map((experience) => (
                    <div key={experience.title} className="w-full border border-gray-200 p-6 rounded-xl">
                        <div className="flex flex-col md:flex-row items-start gap-3 md:items-center justify-between w-full text-gray-500">
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                                    <img
                                        src={experience.image}
                                        alt={experience.title}
                                        width={25}
                                        height={25}
                                    />
                                </div>
                                <div>
                                    <h3 className="text-base font-medium text-gray-800">
                                        {experience.title}
                                    </h3>
                                    <div>
                                        {experience.company} <span className="text-xs">({experience.description})</span></div>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-col items-start md:items-end gap-2">
                            <div>{experience.start} - {experience.end}</div>
                            <div className="text-xs">{experience.location}</div>
                            </div>
                        </div>
                        <ul className="list-disc px-5 mt-6 text-gray-500 space-y-2">
                            {experience.accomplishments.map((accomplishments) => (
                                <li key={accomplishments}>{accomplishments}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
}