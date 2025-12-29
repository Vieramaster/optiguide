"use client";
// COMPONENTS
import { GraduationInput } from "@/components/graduation-input";
import { Button } from "@/components/ui/button";

// DATA
import { simulatorGraduationData } from "@/data/simulator-graduation-data";

// HOOKS
import { useState } from "react";
import { calculateThickness } from "@/lib/calculate-thickness";

type GraduationValueType = {
  ESF: string;
  CIL: string;
  EJE: string;
  DIAM: string;
  INDICE: string;
};

const ThicknessSimulator = () => {
  const [graduationValue, setGraduationValue] = useState<GraduationValueType>({
    ESF: "0",
    CIL: "0",
    EJE: "0",
    DIAM: "0",
    INDICE: "1.5",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  // Actualiza el estado mientras el usuario escribe
  const handleChangeGraduation = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setGraduationValue((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // limpiar error mientras escribe
  };

  // Validación y cálculo al submit
  const handleClickGraduation = () => {
    const newErrors: Record<string, string> = {};
    let hasError = false;

    Object.entries(graduationValue).forEach(([key, value]) => {
      const rules =
        simulatorGraduationData[key as keyof typeof simulatorGraduationData];
      const num = parseFloat(value);

      if (value === "") {
        newErrors[key] = "El valor no puede estar vacío";
        hasError = true;
        return;
      }

      if (Number.isNaN(num)) {
        newErrors[key] = "El valor no es un número";
        hasError = true;
        return;
      }

      if (rules && num % rules.step !== 0) {
        newErrors[key] = `El valor debe ser múltiplo de ${rules.step}`;
        hasError = true;
        return;
      }

      if (rules && (num < rules.min || num > rules.max)) {
        newErrors[
          key
        ] = `El valor debe estar entre ${rules.min} y ${rules.max}`;
        hasError = true;
        return;
      }
    });

    setErrors(newErrors);
    if (hasError) return;

    // todo OK, convertir a número y calcular
    const result = calculateThickness({
      sphere: parseFloat(graduationValue.ESF),
      cylinder: parseFloat(graduationValue.CIL),
      diameter: parseFloat(graduationValue.DIAM),
      index: parseFloat(graduationValue.INDICE),
    });

    console.log("Resultado:", result);
  };

  return (
    <section className="w-full h-full bg-violet-200 p-10 flex flex-col gap-10 text-center">
      <div className="bg-violet-400">
        <h2 className="text-4xl mb-5 font-semibold">
          Simulador de espesor de lentes
        </h2>
        <p className="italic text-sm">
          nota: este simulador solo es ilustrativo y no siempre sera el grosor
          real, ya que depende del laboratorio y del técnico óptico que lo
          fabrique
        </p>
      </div>

      <div className="bg-violet-500 flex gap-8 mx-auto">
        {Object.keys(graduationValue).map((key) => (
          <GraduationInput
            key={key}
            name={key as keyof GraduationValueType}
            value={graduationValue[key as keyof GraduationValueType]}
            onChange={handleChangeGraduation}
          />
        ))}

        <Button
          onClick={handleClickGraduation}
          className="self-end mb-2"
          type="button"
        >
          Calcular
        </Button>
      </div>

      {/* Mostrar errores */}
      {Object.entries(errors).map(([key, err]) =>
        err ? (
          <p key={key} className="text-red-600 text-sm">
            {key}: {err}
          </p>
        ) : null
      )}
    </section>
  );
};

export default ThicknessSimulator;
