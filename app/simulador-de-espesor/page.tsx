"use client";
//COMPONENTS
import { InputsSimulator } from "@/components/inputs-simulator";
import { HeaderSimulator } from "@/components/header-simulator";
import { ErrorListSimulator } from "@/components/error-list-simulator";
import { LensSimulator } from "@/components/lens-simulator";
//DATA
import { GraduationKeysArray } from "@/lib/graduations-array";
//HOOKS
import { useLensSimulator } from "@/hooks/use-lens-simulator";


const ThicknessSimulator = () => {

  const { inputsValues, finalValues, error, handleChangeGraduation, handleClickGraduation } = useLensSimulator()

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
      <LensSimulator values={finalValues} />
      
    </section>
  );
};

export default ThicknessSimulator;
