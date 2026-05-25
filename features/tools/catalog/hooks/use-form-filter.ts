"use client";
import { useState, useMemo } from "react";

import { isDiopterValid } from "@/shared/lib/prescription/validations";
import { transposePrescription } from "@/shared/lib/prescription/transform";
import {
  INVALID_DIOPTERS,
  INVALID_TRANSPOSITION,
} from "@/shared/lib/prescription/messages";
import type { PrescriptionBaseValues } from "@/shared/lib/prescription/types";

import { transpositionFilter } from "../logic/transposition-filter";
import type { LensObjectResolved } from "../types/companies/companies";

export const useFormFilter = (baseCatalog: LensObjectResolved[]) => {
  const [submittedValues, setSubmittedValues] =
    useState<PrescriptionBaseValues | null>(null);

  const [formErrors, setFormErrors] = useState<string[]>([]);

  const handleFormSubmit: React.SubmitEventHandler<HTMLFormElement> = (
    event,
  ) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const values = {
      SPHERE: Number(formData.get("SPHERE")),
      CYLINDER: Number(formData.get("CYLINDER")),
    } satisfies PrescriptionBaseValues;

    const { SPHERE, CYLINDER } = values;

    const errors: string[] = [];

    const isEsfValid = isDiopterValid(SPHERE);

    const isCilValid = isDiopterValid(CYLINDER);

    if (!isEsfValid || !isCilValid) {
      errors.push(INVALID_DIOPTERS);
    }

    const transposedPrescription = transposePrescription(SPHERE, CYLINDER);

    const isTranspositionValid = isDiopterValid(transposedPrescription.SPHERE);

    if (!isTranspositionValid) {
      errors.push(INVALID_TRANSPOSITION);
    }

    if (errors.length > 0) {
      setFormErrors(errors);

      return;
    }

    setFormErrors([]);

    setSubmittedValues(values);
  };

  const catalog = useMemo(() => {
    if (!submittedValues) {
      return baseCatalog;
    }

    return transpositionFilter(
      baseCatalog,

      submittedValues,
    );
  }, [baseCatalog, submittedValues]);

  return {
    submittedValues,

    formErrors,

    handleFormSubmit,

    catalog,
  };
};
