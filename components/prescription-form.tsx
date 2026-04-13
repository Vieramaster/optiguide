import { Button } from "@/components/ui/button";
import { InputBlock } from "./input-block";

interface PrescriptionFormProps<T extends Record<string, string>> {
  keys: (keyof T)[];
  values: T;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  isDisabled:boolean
}

export const PrescriptionForm = <T extends Record<string, string>>({
  keys,
  values,
  onChange,
  onSubmit,
  isDisabled
  
}: PrescriptionFormProps<T>) => {


  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="flex flex-wrap gap-2 lg:flex-row lg:gap-4 justify-center items-center"
    >
      {keys.map((key) => (
        <InputBlock
          key={String(key)}
          name={String(key)}
          value={values[key]}
          onChange={onChange}
          maxLength={5}
        />
      ))}

      <Button
        type="submit"
        className=" place-self-end lg:self-end "
        disabled={!isDisabled}
      >
        Calcular
      </Button>
    </form>
  );
};
