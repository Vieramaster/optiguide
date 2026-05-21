import { Button } from "@/shared/components/ui/button";

import { getPrescriptionProps } from "../lib/prescription/logic";

import { InputBlock } from "./input-block";
import { ErrorList } from "./error-list";
type PrescriptionFormProps<T extends readonly string[]> = {
  prescriptionKeys: T;
  errorList: string[];
  onSubmit: React.SubmitEventHandler<HTMLFormElement>;
};

export const PrescriptionForm = <T extends readonly string[]>({
  prescriptionKeys,
  errorList,
  onSubmit,
}: PrescriptionFormProps<T>) => {
  return (
    <>
      <form
        onSubmit={onSubmit}
        className="flex gap-4 justify-between w-fit mx-auto"
      >
        {prescriptionKeys.map((key) => (
          <InputBlock
            key={key}
            name={key}
            step={getPrescriptionProps(key).step}
            min={getPrescriptionProps(key).min}
            max={getPrescriptionProps(key).max}
          />
        ))}

        <Button type="submit" className="ml-6">
          Calcular
        </Button>
      </form>
      {errorList.length > 0 ? <ErrorList errorList={errorList} /> : null}
    </>
  );
};
