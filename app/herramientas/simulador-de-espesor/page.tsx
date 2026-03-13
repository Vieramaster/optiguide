"use client";
// COMPONENTS
import { InputsSimulator, HeaderSimulator, ErrorListSimulator , LensSimulator} from "@/features/tools/lens-thickness-simulator/components";
import { Button } from "@/components/ui/button";
// DATA
import { graduationKeysArray } from "@/features/tools/lens-thickness-simulator/utils/graduation-keys-array";
// HOOKS
import { useInputValuesSimulator, useThicknessSimulator } from "@/features/tools/lens-thickness-simulator/hooks";
//TYPES
import type { LensSide } from "@/features/tools/lens-thickness-simulator/types/simulator";

const SIDES: LensSide[] = ["A", "B"];

const ThicknessSimulator = () => {
  const {
    inputsValues,
    finalValues,
    error,
    handleChangeGraduation,
    handleClickGraduation,
  } = useInputValuesSimulator();

  const {
    activeSide,
    setActiveSide,
    thickness,
    setThickness,
  } =
    useThicknessSimulator();


  return (
    <section className="w-full h-full  p-10 flex flex-col gap-8 text-center">
      <HeaderSimulator
        title="Simulador de espesor de lentes"
        text="Después de poner tu graduación en los bloques, dale al botón de "
        buttonText="Calcular"
        note="Nota: este simulador es ilustrativo y no siempre refleja el grosor real, depende del laboratorio y del técnico óptico."
      />

      <InputsSimulator
        graduationKeys={graduationKeysArray}
        graduationValue={inputsValues}
        onChangevalues={handleChangeGraduation}
        onClickGraduation={handleClickGraduation}
      />
      {error && <ErrorListSimulator error={error} />}
      <div className="flex justify-center  gap-6 lg:hidden">
        <Button onClick={() => setActiveSide("A")} disabled={activeSide === "A"}>
          A
        </Button>

        <Button onClick={() => setActiveSide("B")} disabled={activeSide === "B"}>
          B
        </Button>
      </div>
      <div className="flex  w-full justify-center lg:justify-evenly mt-5">

        {SIDES.map((side) => (
          <LensSimulator
            key={side}
            values={finalValues}
            isShow={activeSide === side}
            thickness={thickness}
            setThickness={setThickness}
            side={side}
          />
        ))}

      </div>
    </section>
  );
};

export default ThicknessSimulator;
