import Section from "../components/section";

interface AboutProps {
    about: string;
}

export default function AboutSection(props: AboutProps) {
    return (
        <Section title="About">
            <div className="w-full text-sm/6.5 text-justify">
                <p>
                    {props.about}
                </p>
            </div>
        </Section>
    );
}