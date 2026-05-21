import { useState } from "react";

import type {
  BaseGraduationKeys,
  GraduationFieldsKey,
} from "@/shared/types/graduation";

import { GRADUATION_RANGES } from "./graduation-ranges";

export const getGraduationErrors = <
  K extends BaseGraduationKeys | GraduationFieldsKey,
>(
  values: Record<K, string>,
  fields: K[],
) => {
  const newErrors: Partial<Record<K, string>> = {};

  fields.forEach((key) => {
    const raw = values[key];
    if (!raw) return;

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

export const useFormGraduation = <
  K extends BaseGraduationKeys | GraduationFieldsKey,
>(
  fields: K[],
) => {
  const [values, setValues] = useState<Record<K, string>>(() => {
    const initial = {} as Record<K, string>;
    fields.forEach((f) => {
      initial[f] = "";
    });
    return initial;
  });

  const [errors, setErrors] = useState<Partial<Record<K, string>>>({});
  const [submittedValues, setSubmittedValues] = useState<Record<
    K,
    string
  > | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name as K;
    const value = e.target.value;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => getGraduationErrors(values, fields);

  const handleSubmit = () => {
    const newErrors = validate();

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmittedValues(values);
  };

  return {
    values,
    errors,
    submittedValues,
    handleChange,
    handleSubmit,
  };
};
