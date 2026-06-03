"use client";

import { Button } from "@/shared/components/ui/button";
import { ErrorMessages } from "@/shared/components/error-messages";

import { PRESCRIPTION_FIELD_CONFIG } from "../constants";
import { usePrescriptionForm } from "../hooks/use-prescription-form";
import type { PrescriptionFormConfig } from "../types/prescription-form-config";
import { BASE_PRESCRIPTION_KEYS, FULL_PRESCRIPTION_KEYS } from "../constants";

import { PrescriptionField } from "./prescription-field";

export const PrescriptionForm = (props: PrescriptionFormConfig) => {
  const { errors, handleSubmit } = usePrescriptionForm(props);

  const keysToRender =
    props.mode === "full" ? FULL_PRESCRIPTION_KEYS : BASE_PRESCRIPTION_KEYS;
  const isComplete = props.mode === "full";

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex  gap-6 items-center flex-col w-60 xl:flex-row xl:justify-center  mx-auto "
      >
        <div className="grid grid-cols-2 w-full gap-6 xl:flex xl:w-fit">
          {keysToRender.map((key) => (
            <PrescriptionField
              key={key}
              name={key}
              label={PRESCRIPTION_FIELD_CONFIG[key].label}
              step={PRESCRIPTION_FIELD_CONFIG[key].step}
              min={PRESCRIPTION_FIELD_CONFIG[key].min}
              max={PRESCRIPTION_FIELD_CONFIG[key].max}
              isComplete={isComplete}
            />
          ))}
        </div>

        <Button
          type="submit"
          className="w-full py-4 cursor-pointer xl:w-30 xl:ml-6"
        >
          Calcular
        </Button>
      </form>
      {errors.length > 0 ? <ErrorMessages errors={errors} /> : null}
    </>
  );
};
