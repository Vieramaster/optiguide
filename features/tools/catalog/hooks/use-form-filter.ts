"use client";
import { useState } from "react";

import { prescriptionValid } from "@/shared/utils/validation/prescription-valid";
import { transposePrescription } from "@/shared/utils/transposed-prescription";
import {
  IS_VALID_DIOPTERS,
  IS_VALID_TRANSPOSITION,
} from "@/shared/lib/prescription/messages";

import { transpositionFilter } from "../logic/transposition-filter";
import type { LensObjectResolved } from "../types/companies/companies";
import type { PrescriptionValues } from "../types/hooks-types";

export const useFormFilter = (data: LensObjectResolved[]) => {
  const [submittedValues, setSubmittedValues] =
    useState<PrescriptionValues | null>(null);

  const [formErrors, setFormErrors] = useState<string[]>([]);

  const handleFormSubmit: React.SubmitEventHandler<HTMLFormElement> = (
    event,
  ) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const values: PrescriptionValues = {
      ESF: Number(formData.get("ESF")),

      CIL: Number(formData.get("CIL")),
    };

    const { ESF, CIL } = values;

    const errors: string[] = [];

    const isEsfValid = prescriptionValid(ESF);

    const isCilValid = prescriptionValid(CIL);

    if (!isEsfValid || !isCilValid) {
      errors.push(IS_VALID_DIOPTERS);
    }

    const transposedPrescription = transposePrescription(ESF, CIL);

    const isTranspositionValid = prescriptionValid(
      transposedPrescription.sphere,
    );

    if (!isTranspositionValid) {
      errors.push(IS_VALID_TRANSPOSITION);
    }

    if (errors.length > 0) {
      setFormErrors(errors);

      return;
    }

    setFormErrors([]);

    setSubmittedValues(values);
  };

  const catalog = transpositionFilter(data, submittedValues);

  return {
    submittedValues,
    formErrors,
    handleFormSubmit,
    catalog,
  };
};
