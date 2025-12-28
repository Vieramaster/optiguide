"use client";
import { InputsSimulator } from "@/components/inputs-simulator";
import { useState } from "react";
import { GraduationInput } from "@/components/graduation-input";
import { Button } from "@/components/ui/button";
import { simulatorGraduationData } from "@/data/simulator-graduation-data";
import { graduationType, GraduationValueType } from "@/types/simulator-types";
import { HeaderSimulator } from "@/components/header-simulator";
import { LensSimulator } from "@/components/lens-simulator";
const ThicknessSimulator = () => {
  const GraduationKeys = Object.keys(
    simulatorGraduationData
  ) as graduationType[];


  const [graduationValue, setGraduationValue] = useState<
    GraduationValueType
  >({
    ESF: "0",
    CIL: "0",
    EJE: "0",
    DIAM: "20",
  });

  const [error, setError] = useState<Record<string, string> | null>(null);
  const [finalGraduation, setFinalGraduation] = useState<
    GraduationValueType
  >({
    ESF: "0",
    CIL: "0",
    EJE: "0",
    DIAM: "20",
  });
  const handleChangeGraduation = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setGraduationValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleClickGraduation = () => {
    const keys = Object.keys(simulatorGraduationData) as graduationType[];

    const hasError = keys.some((key) => {
      const val = Number(graduationValue[key]);
      const { min, max, step } = simulatorGraduationData[key];

      if (!Number.isFinite(val)) {
        setError({ [key]: "debe ser un número" });
        return true;
      }

      if (val < min || val > max) {
        setError({ [key]: `debe estar entre ${min} y ${max}` });
        return true;
      }

      if ((val - min) % step !== 0) {
        setError({ [key]: `debe ser múltiplo de ${step}` });
        return true;
      }

      return false;
    });

    if (hasError) return;

    setError(null);
    setFinalGraduation(graduationValue);
  };

  return (
    <section className="w-full h-full bg-violet-200 p-10 flex flex-col gap-10 text-center">

      <HeaderSimulator title="Simulador de espesor de lentes" text="Después de poner tu graduación aquí, dale al botón de " buttonText="Calcular" note="Nota: este simulador es ilustrativo y no siempre refleja el grosor real, depende del laboratorio y del técnico óptico." />

      <InputsSimulator
        GraduationKeys={GraduationKeys}
        graduationValue={graduationValue}
        onChangevalues={handleChangeGraduation}
        onClickGraduation={handleClickGraduation}
      />
      <LensSimulator />
    </section>
  );
};

export default ThicknessSimulator;

