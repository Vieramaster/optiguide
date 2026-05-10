
import { useState } from "react";

import type {
  GraduationFields,
  GraduationError,
} from "@/shared/types/graduation";


import { GRADUATION_RANGES } from "../../../../shared/graduation-form/graduation-ranges";
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
  // VALIDACIÓN NUMÉRICA
  // -------------------------
  const validate = (): GraduationError => {
    const newErrors: GraduationError = {};

    (Object.keys(values) as (keyof GraduationFields)[]).forEach((key) => {
      const raw = values[key];

      // ignorar campos que no se usan
      if (raw === "" || raw === undefined) return;

      const val = Number(raw);
      const config = GRADUATION_RANGES[key];

      if (!config) return;

      const { min, max, step } = config;

      if (!Number.isFinite(val)) {
        newErrors[key] = "número inválido";
        return;
      }

      if (val < min || val > max) {
        newErrors[key] = `entre ${min} y ${max}`;
        return;
      }

      if ((val - min) % step !== 0) {
        newErrors[key] = `múltiplo de ${step}`;
      }
    });

    return newErrors;
  };

  // -------------------------
  // SUBMIT (form)
  // -------------------------
  const handleSubmit = () => {
    // 1. validación numérica
    const newErrors = validate();

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
