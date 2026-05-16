import { ErrorState } from "../../features/tools/lens-thickness/types/simulator";

interface ErrorListSimulatorProps {
  error: ErrorState;
}

export const ErrorList = ({ error }: ErrorListSimulatorProps) => (
  <ul className=" mx-auto p-3 bg-primary-foreground rounded-md text-left">
    {Object.entries(error).map(([key, value]) => (
      <li key={key}>
        <p className="font-semibold">{`${key} :`}</p>
        <p className="italic"> {value}</p>
      </li>
    ))}
  </ul>
);
