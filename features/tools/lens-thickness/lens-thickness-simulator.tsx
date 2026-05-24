"use client";

import { Button } from "@/shared/components/ui";
import { PrescriptionForm } from "@/shared/components";
import { PRESCRIPTION_KEYS } from "@/shared/lib/prescription/constants";

import { HeaderSimulator } from "./components/header-simulator";
import { LensSimulator } from "./components/lens-simulator";
import { LensThicknessTitle } from "./data/title";
import { useSimulatorOrchestrator } from "./hook/use-simulator-orchestrator";

const LENS_SIDE = ["A", "B"] as const;

export const LensThicknessSimulator = () => {
  const { prescriptionForm, lensSide, calculatedLensThickness, indexSelect } =
    useSimulatorOrchestrator();

  console.log(prescriptionForm.submittedValues);
  console.log(lensSide.activeSide);
  return (
    <section className="w-full h-full  p-10 flex flex-col gap-10 text-center">
      <HeaderSimulator {...LensThicknessTitle} />

      <PrescriptionForm
        prescriptionKeys={PRESCRIPTION_KEYS}
        onSubmit={prescriptionForm.handlePrescriptionSubmit}
        errorList={prescriptionForm.formErrors}
        isCompletePrescription={true}
      />
      <div className="flex justify-center  gap-6 xl:hidden">
        <Button
          onClick={lensSide.handleToogleSide}
          disabled={lensSide.activeSide === "A"}
        >
          A
        </Button>

        <Button
          onClick={lensSide.handleToogleSide}
          disabled={lensSide.activeSide === "B"}
        >
          B
        </Button>
        <div className="flex  w-full justify-center lg:justify-evenly mt-5 ">
          {LENS_SIDE.map((side) => (
            <LensSimulator
              key={side}
              isShow={lensSide.activeSide === side}
              currentThickness={calculatedLensThickness[side]}
              onIndexChange={(value) =>
                indexSelect.handleIndexChange(side)(value)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};
/**
 * 

 */
