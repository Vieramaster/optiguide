import { useState } from "react";

import { PrescriptionFullValues } from "@/features/prescription";

import { rulesFullPrescription, parseFullPrescription } from "../logic";

const DEFAULT_VALUES = {
  SPHERE: 0,
  CYLINDER: 0,
  AXIS: 0,
  DIAMETER: 0,
} satisfies PrescriptionFullValues;

export const usePrescriptionBaseForm = () => {
  const [submittedValues, setSubmittedValues] =
    useState<PrescriptionFullValues>(DEFAULT_VALUES);

  const [formErrors, setFormErrors] = useState<string[]>([]);

  const handlePrescriptionSubmit: React.SubmitEventHandler<HTMLFormElement> = (
    event,
  ) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const parsedValues = parseFullPrescription(formData);

    const validate = rulesFullPrescription(parsedValues);

    if (validate.length > 0) {
      setFormErrors(validate);
      return;
    }

    setFormErrors([]);
    setSubmittedValues(parsedValues);
  };

  return {
    submittedValues,
    formErrors,
    handlePrescriptionSubmit,
  };
};
