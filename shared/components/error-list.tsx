interface ErrorListProps {
  errors: string[];
}
export const ErrorList = ({ errors }: ErrorListProps) => (
  <div className="w-full xl:w-300 mx-auto flex flex-col gap-4 text-center ">
    {errors.map((item, key) => (
      <p key={key}>{item}</p>
    ))}
  </div>
);
