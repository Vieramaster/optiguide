import { useState } from "react";

import type { PrescriptionFullValues } from "@/entities/prescription/types/types";

export const usePrescriptionSubmit = () => {
  const [submittedValues, setSubmittedValues] =
    useState<PrescriptionFullValues | null>(null);

  const handlePrescriptionSubmit = (data: PrescriptionFullValues) => {
    setSubmittedValues(data);
  };

  return {
    submittedValues,
    handlePrescriptionSubmit,
  };
};