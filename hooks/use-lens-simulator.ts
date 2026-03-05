import { useState } from "react";
import type {
  GraduationValueType,
  ErrorStateType,
  graduationType,
} from "@/types/simulator-types";
import { simulatorGraduationData } from "@/data/simulator-graduation-data";

const isValidEsfCilSum = (esf: string, cil: string): boolean =>
  Math.abs(Number(esf) + Number(cil)) <= 20;

const validateGraduations = (
  values: GraduationValueType,
): Record<string, string> => {
  const keys = Object.keys(simulatorGraduationData) as graduationType[];
  const newErrors: Record<string, string> = {};

  keys.forEach((key) => {
    const val = Number(values[key]);
    const { min, max, step } = simulatorGraduationData[key];

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

export const useLensSimulator = () => {
  const [inputsValues, setInputsValues] = useState<GraduationValueType>({
    ESF: "",
    CIL: "",
    EJE: "",
    DIAM: "",
  });
  const [finalValues, setFinalValues] = useState<GraduationValueType>({
    ESF: "0",
    CIL: "0",
    EJE: "0",
    DIAM: "60",
  });
  const [error, setError] = useState<ErrorStateType | null>({});

  const handleChangeGraduation = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = event.target;
    setInputsValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClickGraduation = () => {
    if (!isValidEsfCilSum(inputsValues.ESF, inputsValues.CIL)) {
      setError((prev) => ({
        ...(prev ?? {}),
        ESF: "la conversión total no debe pasar de las 20 dioptrias",
      }));
      return;
    }

    const newErrors = validateGraduations(inputsValues);

    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
      return;
    }

    setError(null);
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