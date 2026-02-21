import Section from "../components/section";

interface ExperienceProps {
    experience: any[];
}

export default function ExperienceSection({ experience }: ExperienceProps) {

    return (
        <Section title="Experience">
            <div className="w-full space-y-2">
                {experience.map((experience) => (
                    <div key={experience.title} className="w-full border border-gray-200 p-6 rounded-xl child-pdf-section">
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
                            {experience.accomplishments.map((accomplishments: any) => (
                                <li key={accomplishments}>{accomplishments}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
}