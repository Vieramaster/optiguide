"use client";
import { useState, useMemo } from "react";

import type { PrescriptionBaseValues } from "@/features/prescription";
import { dioptersRules } from "@/features/prescription";

import type { LensObjectResolved } from "../types/companies/companies";
import { transpositionFilter } from "../logic/transposition-filter";
import { parseBasePrescription } from "../logic/parse-base-prescription";

export const useFormFilter = (baseCatalog: LensObjectResolved[]) => {
  const [submittedValues, setSubmittedValues] =
    useState<PrescriptionBaseValues | null>(null);
  const [formErrors, setFormErrors] = useState<string[]>([]);

  const handleFormSubmit: React.SubmitEventHandler<HTMLFormElement> = (
    event,
  ) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const values = parseBasePrescription(formData);

    const dioptersErrors = dioptersRules(values.SPHERE, values.CYLINDER);

    if (dioptersErrors.length > 0) {
      setFormErrors(dioptersErrors);
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
