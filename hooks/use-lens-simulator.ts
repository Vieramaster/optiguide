import { useState } from "react";
import type { GraduationValueType, ErrorStateType, graduationType } from "@/types/simulator-types";
import { simulatorGraduationData } from "@/data/simulator-graduation-data";



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
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setInputsValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleClickGraduation = () => {
    const keys = Object.keys(simulatorGraduationData) as graduationType[];

    const newErrors: Record<string, string> = {};

    // validación ESF + CIL
    if (Math.abs(Number(inputsValues.ESF) + Number(inputsValues.CIL)) > 20) {
      setError((prev) => ({
        ...(prev ?? {}),
        ESF: "la conversión total no debe pasar de las 20 dioptrias",
      }));
      return;
    }

    keys.forEach((key) => {
      const val = Number(inputsValues[key]);
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
        return;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
      return;
    }

    setError(null);
    setFinalValues({ ...inputsValues });
  };

    return {inputsValues, finalValues, error, handleChangeGraduation, handleClickGraduation}
}