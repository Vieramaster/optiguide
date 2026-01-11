"use client";
//COMPONENTS
import { InputsSimulator } from "@/components/inputs-simulator";
import { HeaderSimulator } from "@/components/header-simulator";
import { ErrorListSimulator } from "@/components/error-list-simulator";
import { LensSimulator } from "@/components/lens-simulator";
import { Button } from "@/components/ui/button";
//DATA
import { GraduationKeysArray } from "@/lib/graduations-array";
//HOOKS
import { useLensSimulator } from "@/hooks/use-lens-simulator";
import { useState } from "react";

const ThicknessSimulator = () => {
  const {
    inputsValues,
    finalValues,
    error,
    handleChangeGraduation,
    handleClickGraduation,
  } = useLensSimulator();
  const [showSimulator, setShowSimulator] = useState(false);

  const handleClick = () => {
    setShowSimulator((prev) => !prev);
  };


  const [thickness,setThickness] = useState({A:0, B:0})
  
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
      {error && <ErrorListSimulator {...{ error }} />}
      <div className="flex justify-center  gap-6 xl:hidden">
        <Button onClick={handleClick} disabled={showSimulator}>
          A
        </Button>

        <Button onClick={handleClick} disabled={!showSimulator}>
          B
        </Button>
      </div>
      <div className="flex  w-full justify-center xl:justify-evenly mt-5">
        <LensSimulator values={finalValues} isShow={showSimulator} setThickness={setThickness} side="A"/>
        <LensSimulator values={finalValues} isShow={!showSimulator} setThickness={setThickness} side="B"/>
      </div>
    </section>
  );
};

export default ThicknessSimulator;
