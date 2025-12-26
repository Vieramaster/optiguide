"use client";

import { useState } from "react";
import { GraduationInput } from "@/components/graduation-input";
import { Button } from "@/components/ui/button";
import { simulatorGraduationData } from "@/data/simulator-graduation-data";
import { calculateThickness } from "@/lib/calculateThickness";

const ThicknessSimulator = () => {
  const GraduationKeys = Object.keys(
    simulatorGraduationData
  ) as (keyof typeof simulatorGraduationData)[];

  const [graduationValue, setGraduationValue] = useState<
    Record<string, string>
  >({
    ESF: "0",
    CIL: "0",
    EJE: "0",
    DIAM: "65",
    INDICE: "1.5",
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
    try {
      GraduationKeys.forEach((key) => {
        const val = parseFloat(graduationValue[key]);
        const { min, max, step } = simulatorGraduationData[key];

        if (isNaN(val)) throw new Error(`${key} debe ser un número`);
        if (val < min || val > max)
          throw new Error(`${key} debe estar entre ${min} y ${max}`);
        if (Math.abs((val - min) % step) > 1e-8)
          throw new Error(`${key} debe ser múltiplo de ${step}`);
      });

      console.log("Valores válidos:", graduationValue);
    } catch (err) {
      alert((err as Error).message);
    }

    finally{
        console.log(
            calculateThickness({
                sphere: parseFloat(graduationValue["ESF"] )|| 0,
                cylinder:parseFloat(graduationValue["CIL"] )|| 0,
                diameter:parseFloat(graduationValue["DIAM"] )|| 65,
                index:parseFloat(graduationValue["INDICE"] )|| 1.5,
            })
        )
    }

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
    </section>
  );
};

export default ThicknessSimulator;
