"use client";

//SHARED
import { Button, Title } from "@/shared/components/ui";
import { PrescriptionForm } from "@/shared/components";
import { PRESCRIPTION_KEYS } from "@/shared/lib/prescription/constants";

//FEATURES
import { LensSimulator } from "./components/lens-simulator";
import { useSimulatorOrchestrator } from "./hook/use-simulator-orchestrator";
import { LensThicknessTitle } from "./data/title";

const LENS_SIDE = ["left", "right"] as const;

export const LensThicknessSimulator = () => {
  const { prescriptionForm, lensSide, calculatedLensThickness, indexSelect } =
    useSimulatorOrchestrator();


  return (
    <section className="w-full h-full  p-10 flex flex-col gap-10 text-center">
      <header className="max-w-2xl mx-auto flex flex-col gap-3 text-center">
        <Title>{LensThicknessTitle.title}</Title>
        <p className="italic"> {LensThicknessTitle.text} </p>
      </header>

      <PrescriptionForm
        prescriptionKeys={PRESCRIPTION_KEYS}
        onSubmit={prescriptionForm.handlePrescriptionSubmit}
        errorList={prescriptionForm.formErrors}
        isCompletePrescription={true}
      />
      <div className="flex justify-center  gap-6 xl:hidden">
        {LENS_SIDE.map((side, index) => (
          <Button
            key={index}
            onClick={lensSide.handleToogleSide}
            disabled={lensSide.activeSide === side}
          >
            {side}
          </Button>
        ))}
      </div>
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
      <p className="italic mt-10">{LensThicknessTitle.note}</p>
    </section>
  );
};
