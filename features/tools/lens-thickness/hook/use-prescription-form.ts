import { useState } from "react";

import { PrescriptionFullValues } from "@/shared/lib/prescription/types";

import { parsePrescriptionForm } from "../parses/parse-simulator-form";

const DEFAULT_VALUES = {
  ESF: 0,
  CIL: 0,
  EJE: 0,
  DIAM: 0,
};

export const usePrescriptionForm = () => {
  const [submittedValues, setSubmittedValues] =
    useState<PrescriptionFullValues>(DEFAULT_VALUES);

  const [formErrors, setFormErrors] = useState<string[]>([]);

  const handlePrescriptionSubmit: React.SubmitEventHandler<HTMLFormElement> = (
    event,
  ) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const result = parsePrescriptionForm(formData);

    if (!result.success) {
      setFormErrors(result.errors);

      return;
    }
    setFormErrors([]);
    setSubmittedValues(result.values);
  };

  return {
    submittedValues,
    formErrors,
    handlePrescriptionSubmit,
  };
};
