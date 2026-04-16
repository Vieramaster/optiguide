"use client";
// COMPONENTS
import { HeaderSimulator, LensSimulator } from "./components";
import { Button } from "@/components/ui/";
import { PrescriptionForm, ErrorList } from "@/components/";
//UTILS
import { graduationKeysArray, validateFormValues } from "./utils";
// DATA
import { LensTicknessTitle } from "./data/title";
import { graduationComplete } from "@/shared/graduation-form/graduation-data";
// HOOKS
import { useThicknessSimulator } from "./hooks";
import { useFormGraduation } from "@/shared/graduation-form/graduation-form-hook";
//TYPES
import type { LensSide } from "./types/simulator";
const SIDES: LensSide[] = ["A", "B"];

export const LensThicknessSimulator = () => {
  const { values, errors, submittedValues, handleChange, handleSubmit } =
    useFormGraduation(["ESF", "CIL", "EJE", "DIAM"]);

  const { activeSide, setActiveSide, thickness, setThickness } =
    useThicknessSimulator();

  const isButtonDisabled = validateFormValues(values);

  return (
    <section className="w-full h-full  p-10 flex flex-col gap-8 text-center">
      <HeaderSimulator {...LensTicknessTitle} />

      <PrescriptionForm
        keys={graduationKeysArray}
        values={values}
        onChange={handleChange}
        onSubmit={handleSubmit}
        isDisabled={isButtonDisabled}
      />
      {Object.keys(errors).length > 0 && <ErrorList error={errors} />}
      <div className="flex justify-center  gap-6 lg:hidden">
        <Button
          onClick={() => setActiveSide("A")}
          disabled={activeSide === "A"}
        >
          A
        </Button>

        <Button
          onClick={() => setActiveSide("B")}
          disabled={activeSide === "B"}
        >
          B
        </Button>
      </div>
      <div className="flex  w-full justify-center lg:justify-evenly mt-5">
        {SIDES.map((side) => (
          <LensSimulator
            key={side}
            values={submittedValues ?? graduationComplete}
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
