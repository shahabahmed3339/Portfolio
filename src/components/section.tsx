interface Props {
    title: string;
    children: React.ReactNode;
}

export default function Section({ title, children }: Props) {
    return (
        <section className="flex flex-col justify-center gap-0 w-full max-w-5xl mx-auto mt-10 pdf-section space-y-3">
            <p className="text-xl font-medium pt-3 w-full section-title">{title}</p>
            {children}
        </section>
    );
}