import Section from "../components/section";

export default function SkillsSection() {
    const skills = [
        "MEAN Stack",
        "MERN Stack",
        "Angular",
        "React.js",
        "Next.js",
        "Nest.js",
        "Node.js",
        "Python",
        "Flask",
        "Django",
        "TypeScript",
        "JavaScript",
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "PowerBi",
        "Git",
        "HTML",
        "Tailwind CSS",
        "Bootstrap CSS",
        "CSS",
        "Teamwork",
        "Problem Solving",
        "Customer Support",
        "Critical Thinking",
    ];

    return (
        <Section title="Skills">
            <div className="flex flex-wrap gap-4">
                {skills.map((skill) => (
                    <p key={skill} className="border cursor-default border-gray-300 hover:bg-gray-100/70 text-gray-600 text-[13px] rounded-full px-5 py-1.5">
                        {skill}
                    </p>
                ))}
            </div>
        </Section>
    );
}