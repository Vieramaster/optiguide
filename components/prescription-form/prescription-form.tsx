import { Button } from "@/components/ui/button";
import { GraduationInput } from "@/features/tools/lens-thickness/components";
import type {
  BaseGraduation,
  GraduationFields,
} from "@/shared/types/graduation";
import { validateGraduationInputs } from "./prescription-form-utils";

import { GraduationKey, GraduationValues } from "@/shared/types/graduation";
interface PrescriptionFormProps {
  keys: GraduationKey[] ;
  values: BaseGraduation | GraduationFields;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

export const PrescriptionForm = ({
  keys,
  values,
  onChange,
  onSubmit,
}: PrescriptionFormProps) => {
  const isDisabled = !validateGraduationInputs(values);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="flex flex-wrap gap-2 lg:flex-row lg:gap-4 justify-center items-center"
    >
      {keys.map((key) => (
        <GraduationInput
          key={key}
          name={key}
          value={values[key]}
          onChange={onChange}
          maxLength={5}
        />
      ))}

      <Button
        type="submit"
        className=" place-self-end lg:self-end "
        disabled={isDisabled}
      >
        Calcular
      </Button>
    </form>
  );
};
