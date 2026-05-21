
interface ErrorListSimulatorProps {
  errorList: string[];
}

export const ErrorList = ({ errorList }: ErrorListSimulatorProps) => (
  <ul className=" mx-auto p-3 bg-primary-foreground rounded-md text-left">
    {errorList.map(([key, value]) => (
      <li key={key}>
        <p className="font-semibold">{`${key} :`}</p>
        <p className="italic"> {value}</p>
      </li>
    ))}
  </ul>
);
