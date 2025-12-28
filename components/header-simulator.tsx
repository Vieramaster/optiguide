
interface HeaderSimulatorProps {
    title: string;
    text: string;
    buttonText: string;
    note: string;
}

export const HeaderSimulator = ({ title, text, buttonText, note }: HeaderSimulatorProps) =>

    <header className="max-w-2xl mx-auto flex flex-col gap-2 text-center">
        <h1 className="text-4xl font-semibold text-center mb-4"> {title} </h1>
        <p> {text}<strong>{buttonText}</strong>.</p>
        <p className="italic"> {note} </p>
    </header>