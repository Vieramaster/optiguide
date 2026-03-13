import { Title } from "@/components/ui/typography";
interface HeaderSimulatorProps {
    title: string;
    text: string;
    buttonText: string;
    note: string;
}

export const HeaderSimulator = ({ title, text, buttonText, note }: HeaderSimulatorProps) =>

    <header className="max-w-2xl mx-auto flex flex-col gap-3 text-center">
        <Title>{title}</Title>
        <p className="italic"> {note} </p>
        <p> {text}<strong>{buttonText}</strong>.</p>
    </header>
