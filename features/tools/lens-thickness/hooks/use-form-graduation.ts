import { useState } from "react";

import type {
  GraduationFields,
  GraduationError,
} from "@/shared/types/graduation";

import {graduationValidate} from "../logic/graduation-validate";

export const useFormGraduation = () => {
  const [values, setValues] = useState<GraduationFields>({
    ESF: "",
    CIL: "",
    EJE: "",
    DIAM: "",
  });

  const [errors, setErrors] = useState<GraduationError>({});
  const [submittedValues, setSubmittedValues] =
    useState<GraduationFields | null>(null);

  // -------------------------
  // CHANGE (controlado)
  // -------------------------
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // -------------------------
  // SUBMIT (form)
  // -------------------------
  const handleSubmit = () => {
    // 1. validación numérica
    const newErrors = graduationValidate(values);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmittedValues(values);
  };

  // -------------------------
  // UI state
  // -------------------------


  return {
    values,
    errors,
    submittedValues,
    handleChange,
    handleSubmit,
  };
};
