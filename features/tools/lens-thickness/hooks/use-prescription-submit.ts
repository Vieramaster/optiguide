import { useState } from "react";

import type { PrescriptionFullValues } from "@/entities/prescription";

export const usePrescriptionSubmit = () => {
  const [submittedValues, setSubmittedValues] =
    useState<PrescriptionFullValues | null>(null);

  const handleSubmit = (values: PrescriptionFullValues) => {
    setSubmittedValues(values);
  };

  return {
    submittedValues,
    handleSubmit,
  };
};
