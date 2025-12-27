"use client";

import { useState } from "react";
import { GraduationInput } from "@/components/graduation-input";
import { Button } from "@/components/ui/button";
import { simulatorGraduationData } from "@/data/simulator-graduation-data";

type graduationType = keyof typeof simulatorGraduationData;

const ThicknessSimulator = () => {
  const GraduationKeys = Object.keys(
    simulatorGraduationData
  ) as graduationType[];

  const [graduationValue, setGraduationValue] = useState<
    Record<graduationType, string>
  >({
    ESF: "0",
    CIL: "0",
    EJE: "0",
    DIAM: "20",
  });

  const [error, setError] = useState<Record<string, string> | null>(null);
  const [finalGraduation, setFinalGraduation] = useState<
    Record<graduationType, string>
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
      <div className="bg-violet-400 p-4 rounded">
        <h2 className="text-4xl mb-5 font-semibold">
          Simulador de espesor de lentes
        </h2>
        <p className="italic text-sm">
          Nota: este simulador es ilustrativo y no siempre refleja el grosor
          real, depende del laboratorio y del técnico óptico.
        </p>
      </div>

      <div className="bg-violet-500 flex flex-wrap gap-8 justify-center p-6 rounded">
        {GraduationKeys.map((key) => (
          <GraduationInput
            key={key}
            name={key}
            maxLength={5}
            value={graduationValue[key]}
            onChange={handleChangeGraduation}
          />
        ))}

        <Button
          onClick={handleClickGraduation}
          type="button"
          className="self-end mb-2"
        >
          Calcular
        </Button>
      </div>
      <Simulator />
    </section>
  );
};

export default ThicknessSimulator;

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Simulator = () => {
  const crystalIndexes = [
    { index: "1.50", name: "CR-39" },
    { index: "1.56", name: "resina de alto índice " },
    { index: "1.59", name: "policarbonato " },
    { index: "1.60", name: "resina de alto índice" },
    { index: "1.67", name: "resina de alto índice " },
    { index: "1.74", name: "resina de alto índice " },
  ];
  return (
    <div className="h-full bg-violet-800 flex flex-col gap-8 ">
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Seleccionar indice" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Indices</SelectLabel>

            {crystalIndexes.map((item) => (
              <SelectItem key={item.index} value={item.index}>
                <span className="mr-3 font-semibold">{item.index}</span>
                <span className="italic">{item.name}</span>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
