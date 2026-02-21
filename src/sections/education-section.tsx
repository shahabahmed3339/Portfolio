import Section from "../components/section";

interface EducationProps {
    education: any[];
}

export default function EducationSection({ education }: EducationProps) {

    return (
        <Section title="Education">
            <div className="w-full space-y-2">
                {education.map((education) => (
                    <div key={education.title} className="w-full border border-gray-200 p-6 rounded-xl child-pdf-section">
                        <div className="flex flex-col md:flex-row items-start gap-3 md:items-center justify-between w-full text-gray-500">
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                                    <img
                                        src={education.image}
                                        alt={education.title}
                                        width={25}
                                        height={25}
                                    />
                                </div>
                                <div>
                                    <h3 className="text-base font-medium text-gray-800">
                                        {education.title}
                                    </h3>
                                    <div>{education.institute}</div>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-col items-start md:items-end gap-2">
                                <div>{education.start} - {education.end}</div>
                                <div className="text-xs">{education.location}</div>
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-3 mt-2 text-gray-500">
                            <h3 className="text-base font-medium text-gray-800">
                                CGPA:
                            </h3>
                            <div>{education.cgpa}</div>
                        </div>
                        <div className="flex flex-row items-center gap-2 text-gray-500">
                            <h3 className="text-base font-medium text-gray-800">
                                Thesis:
                            </h3>
                            <div>{education.thesis}</div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}