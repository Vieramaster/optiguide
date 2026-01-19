"use client";
//COMPONENTS
import { InputsSimulator } from "@/components/simulator/inputs-simulator";
import { HeaderSimulator } from "@/components/simulator/header-simulator";
import { ErrorListSimulator } from "@/components/simulator/error-list-simulator";
import { LensSimulator } from "@/components/simulator/lens-simulator";
import { Button } from "@/components/ui/button";
//DATA
import { GraduationKeysArray } from "@/lib/graduations-array";
//HOOKS
import { useLensSimulator } from "@/hooks/use-lens-simulator";
import { useThicknessSimulator } from "@/hooks/use-thickness-simulator";

const ThicknessSimulator = () => {
  const {
    inputsValues,
    finalValues,
    error,
    handleChangeGraduation,
    handleClickGraduation,
  } = useLensSimulator();

  const { showSimulator, thickness, setThickness, toggleSimulator } =
    useThicknessSimulator();

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
      {error && <ErrorListSimulator error={error} />}
      <div className="flex justify-center  gap-6 lg:hidden">
        <Button onClick={toggleSimulator} disabled={showSimulator}>
          A
        </Button>

        <Button onClick={toggleSimulator} disabled={!showSimulator}>
          B
        </Button>
      </div>
      <div className="flex  w-full justify-center lg:justify-evenly mt-5">
        <LensSimulator
          values={finalValues}
          isShow={showSimulator}
          thickness={thickness}
          setThickness={setThickness}
          side="A"
        />
        <LensSimulator
          values={finalValues}
          isShow={!showSimulator}
          thickness={thickness}
          setThickness={setThickness}
          side="B"
        />
      </div>
    </section>
  );
};

export default ThicknessSimulator;
