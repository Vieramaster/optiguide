"use client";
import { InputsSimulator } from "@/components/inputs-simulator";
import { useState } from "react";

import { simulatorGraduationData } from "@/data/simulator-graduation-data";
import { graduationType, GraduationValueType } from "@/types/simulator-types";
import { HeaderSimulator } from "@/components/header-simulator";
import { GraduationKeysArray } from "@/lib/graduations-array";
import { LensSimulator } from "@/components/lens-simulator";

const ThicknessSimulator = () => {
  const [inputsValues, setInputsValues] = useState<GraduationValueType>({
    ESF: "",
    CIL: "",
    EJE: "",
    DIAM: "",
  });

  const [error, setError] = useState<Record<graduationType, string> | null>(
    null
  );
  const [finalValues, setFinalValues] = useState<GraduationValueType>({
    ESF: "0",
    CIL: "0",
    EJE: "0",
    DIAM: "60",
  });
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

  console.log(error);
  return (
    <section className="w-full h-full  p-10 flex flex-col gap-8 text-center">
      <HeaderSimulator
        title="Simulador de espesor de lentes"
        text="Después de poner tu graduación aquí, dale al botón de "
        buttonText="Calcular"
        note="Nota: este simulador es ilustrativo y no siempre refleja el grosor real, depende del laboratorio y del técnico óptico."
      />

      <InputsSimulator
        GraduationKeys={GraduationKeysArray}
        graduationValue={inputsValues}
        onChangevalues={handleChangeGraduation}
        onClickGraduation={handleClickGraduation}
      />
      {error ? (
        <ul>
          {Object.entries(error).map(([key, value]) => (
            <li key={key}>
              <span className="font-semibold">{`${key} :`}</span>
              <span className="italic"> {value}</span>
            </li>
          ))}
        </ul>
      ) : null}
      <LensSimulator graduationValues={finalValues} />

    </section>
  );
};

export default ThicknessSimulator;

