import Section from "../components/section";

interface SkillsProps {
    title: string,
    skills: any[];
}

export default function SkillsSection({ skills, title }: SkillsProps) {

    return (
        <Section title={title}>
            <div className="flex flex-wrap gap-4 justify-center">
                {skills.map((skill) => (
                    <p key={skill} className="border cursor-default border-gray-300 hover:bg-gray-100/70 text-gray-600 text-[13px] rounded-full px-5 py-1.5">
                        {skill}
                    </p>
                ))}
            </div>
        </Section>
    );
}