import Section from "../components/section";

export default function ContactSection() {
    return (
        <Section title="Contact">
            <table className="table-auto mr-auto">
                <tbody>
                    <tr>
                        <td className="pr-4 py-2">Email:</td>
                        <td className="py-2 text-gray-500">shahabahmed3339@gmail.com</td>
                    </tr>
                    <tr>
                        <td className="pr-4 py-2">Phone:</td>
                        <td className="py-2 text-gray-500">+92 315 1586289 &nbsp; | &nbsp; +92 330 1573989</td>
                    </tr>
                </tbody>
            </table>
        </Section>
    );
}