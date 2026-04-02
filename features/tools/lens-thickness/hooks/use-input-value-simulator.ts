//HOOKS
import { useState } from "react";
//UTILS
import { graduationKeysArray } from "../utils/graduation-keys-array";
//DATA
import { GRADUATION_RANGES } from "../data/graduation-ranges";
//TYPES
import { type ChangeEvent } from "react";
import type {
  GraduationObject,
  ErrorState
} from "../types/simulator";

const isValidEsfCilSum = (esf: string, cil: string): boolean => {
  const esfNum = Number(esf);
  const cilNum = Number(cil);

  if (!Number.isFinite(esfNum) || !Number.isFinite(cilNum)) return false;

  return Math.abs(esfNum + cilNum) <= 20;
};

const validateGraduations = (
  values: GraduationObject
): ErrorState => {
  const keys = graduationKeysArray
  const newErrors: ErrorState = {};

  keys.forEach((key) => {
    const val = Number(values[key]);
    const { min, max, step } = GRADUATION_RANGES[key];

    if (!Number.isFinite(val)) {
      newErrors[key] = "debe ser un número";
      return;
    }

    if (val < min || val > max) {
      newErrors[key] = `debe estar entre ${min} y ${max}`;
      return;
    }

    if ((val - min) % step !== 0) {
      newErrors[key] = `debe ser múltiplo de ${step}`;
    }
  });

  return newErrors;
};

export const useInputValuesSimulator = () => {
  const [inputsValues, setInputsValues] = useState<GraduationObject>({
    ESF: "",
    CIL: "",
    EJE: "",
    DIAM: "",
  });

  const [finalValues, setFinalValues] = useState<GraduationObject>({
    ESF: "0",
    CIL: "0",
    EJE: "0",
    DIAM: "60",
  });

  const [error, setError] = useState<ErrorState>({});

  const handleChangeGraduation = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;

    setInputsValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClickGraduation = () => {
    if (!isValidEsfCilSum(inputsValues.ESF, inputsValues.CIL)) {
      setError({
        ESF: "la conversión total no debe pasar de las 20 dioptrías",
      });
      return;
    }

    const newErrors = validateGraduations(inputsValues);

    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
      return;
    }

    setError({});
    setFinalValues({ ...inputsValues });
  };

  return {
    inputsValues,
    finalValues,
    error,
    handleChangeGraduation,
    handleClickGraduation,
  };
};