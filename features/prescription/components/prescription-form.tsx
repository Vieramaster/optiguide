import { Button } from "@/shared/components/ui/button";
import { ErrorMessages } from "@/shared/components/error-messages";

import { PRESCRIPTION_FIELD_CONFIG } from "../constants";
import { PrescriptionKeys } from "../types";

import { PrescriptionField } from "./prescription-field";

interface PrescriptionFormProps {
  prescriptionKeys: readonly PrescriptionKeys[];
  errorList: string[];
  onSubmit: React.SubmitEventHandler<HTMLFormElement>;
  isCompletePrescription: boolean;
}

export const PrescriptionForm = ({
  prescriptionKeys,
  errorList,
  onSubmit,
  isCompletePrescription,
}: PrescriptionFormProps) => {
  return (
    <>
      <form
        onSubmit={onSubmit}
        className={`flex  gap-6 items-center ${isCompletePrescription ? " flex-col  w-72  mx-auto xl:w-full xl:flex-row xl:justify-center" : ""}`}
      >
        <div className="grid grid-cols-2 w-full gap-6 xl:flex xl:w-fit">
          {prescriptionKeys.map((key) => (
            <PrescriptionField
              key={key}
              name={key}
              step={PRESCRIPTION_FIELD_CONFIG[key].step}
              min={PRESCRIPTION_FIELD_CONFIG[key].min}
              max={PRESCRIPTION_FIELD_CONFIG[key].max}
              isComplete={isCompletePrescription}
            />
          ))}
        </div>

        <Button
          type="submit"
          className={`w-full py-4 cursor-pointer ${isCompletePrescription ? " xl:w-30" : "xl:w-22 ml-6"}`}
        >
          Calcular
        </Button>
      </form>
      {errorList.length > 0 ? <ErrorMessages errors={errorList} /> : null}
    </>
  );
};
