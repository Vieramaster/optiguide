"use client";
// COMPONENTS
import { GraduationInput } from "@/components/graduation-input";
import { Button } from "@/components/ui/button";

// DATA
import { simulatorGraduationData } from "@/data/simulator-graduation-data";

// HOOKS
import { useState } from "react";
import { calculateThickness } from "@/lib/calculateThickness";

const ThicknessSimulator = () => {
  const [graduationValue, setGraduationValue] = useState({
    ESF: "",
    CIL: "",
    EJE: "",
    DIAM: "",
    INDICE: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChangeGraduation = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;

    // todo OK
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setGraduationValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleClickGraduation = () => {
    console.log(
      calculateThickness({
        sphere: valueValidator({ name: "ESF", value: graduationValue.ESF }),
        cylinder: valueValidator({ name: "CIL", value: graduationValue.CIL }),
        diameter: valueValidator({ name: "DIAM", value: graduationValue.DIAM }),
        index: valueValidator({ name: "EJE", value: graduationValue.EJE }),
      })
    );
  };
  type ValueValidatorType = {
    name: keyof typeof simulatorGraduationData;
    value: string;
  };
  const valueValidator = ({ name, value }: ValueValidatorType) =>
    value === "" ? simulatorGraduationData[name].min : value;

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
        <GraduationInput
          name="ESF"
          value={valueValidator({ name: "ESF", value: graduationValue.ESF })}
          onChange={handleChangeGraduation}
          {}
        />
        <GraduationInput
          name="CIL"
          value={valueValidator({ name: "CIL", value: graduationValue.CIL })}
          onChange={handleChangeGraduation}
        />
        <GraduationInput
          name="EJE"
          value={valueValidator({ name: "EJE", value: graduationValue.EJE })}
          onChange={handleChangeGraduation}
        />
        <GraduationInput
          name="DIAM"
          value={valueValidator({ name: "DIAM", value: graduationValue.DIAM })}
          onChange={handleChangeGraduation}
        />
        <GraduationInput
          name="INDICE"
          value={valueValidator({
            name: "INDICE",
            value: graduationValue.INDICE,
          })}
          onChange={handleChangeGraduation}
        />

        <Button
          onClick={handleClickGraduation}
          disabled={!Object.values(errors).some(Boolean)}
          className="self-end mb-2"
          type="button"
        >
          Calcular
        </Button>
      </div>
    </section>
  );
};

export default ThicknessSimulator;
