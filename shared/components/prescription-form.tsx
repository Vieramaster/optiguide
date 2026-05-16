import { Button } from "@/shared/components/ui/button";

import { InputBlock } from "./input-block";

interface PrescriptionFormProps<T extends Record<string, string>> {
  keys: (keyof T)[];
  values: T;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  isEnabled: boolean;
}

export const PrescriptionForm = <T extends Record<string, string>>({
  keys,
  values,
  onChange,
  onSubmit,
  isEnabled,
}: PrescriptionFormProps<T>) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="flex gap-4 justify-between w-fit mx-auto"
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

      <Button type="submit" className=" ml-6 " disabled={!isEnabled}>
        Calcular
      </Button>
    </form>
  );
};
