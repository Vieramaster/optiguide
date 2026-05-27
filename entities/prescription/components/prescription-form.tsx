import { Button } from "@/shared/components/ui/button";
import { ErrorMessages } from "@/shared/components/error-messages";

import { PRESCRIPTION_FIELD_CONFIG } from "../constants";
import { usePrescriptionForm } from "../hooks/use-prescription-form";
import type { PrescriptionFormConfig } from "../types/model/rules";
import { BASE_PRESCRIPTION_KEYS, FULL_PRESCRIPTION_KEYS } from "../constants";

import { PrescriptionField } from "./prescription-field";

export const PrescriptionForm = (props: PrescriptionFormConfig) => {
  // El hook se encarga de toda la lógica sucia
  const { errors, handleSubmitForm } = usePrescriptionForm(props);

  const keysToRender = props.mode === "full" ? FULL_PRESCRIPTION_KEYS : BASE_PRESCRIPTION_KEYS;
  const isComplete = props.mode === "full";

  return (
    <>
      <form
        onSubmit={handleSubmitForm}
        className={`flex  gap-6 items-center ${isComplete ? " flex-col  w-72  mx-auto xl:w-full xl:flex-row xl:justify-center" : ""}`}
      >
        <div className="grid grid-cols-2 w-full gap-6 xl:flex xl:w-fit">
          {keysToRender.map((key) => (
            <PrescriptionField
              key={key}
              name={key}
              step={PRESCRIPTION_FIELD_CONFIG[key].step}
              min={PRESCRIPTION_FIELD_CONFIG[key].min}
              max={PRESCRIPTION_FIELD_CONFIG[key].max}
              isComplete={isComplete}
            />
          ))}
        </div>

        <Button
          type="submit"
          className={`w-full py-4 cursor-pointer ${isComplete ? " xl:w-30" : "xl:w-22 ml-6"}`}
        >
          Calcular
        </Button>
      </form>
      {errors.length > 0 ? <ErrorMessages errors={errors} /> : null}
    </>
  );
};
