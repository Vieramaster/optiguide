import { ErrorStateType } from "@/types/simulator-types"

interface ErrorListSimulatorProps {
    error: ErrorStateType
}

export const ErrorListSimulator = ({ error }: ErrorListSimulatorProps) => <ul className=" mx-auto p-3 bg-primary-foreground rounded-md text-left">
    {Object.entries(error).map(([key, value]) => (
        <li key={key}>
            <p className="font-semibold">{`${key} :`}</p>
            <p className="italic"> {value}</p>
        </li>
    ))}
</ul>
