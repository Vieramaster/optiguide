"use client";

import { Button } from "@/components/ui/";
import { PrescriptionForm, ErrorList } from "@/components/";

import { HeaderSimulator, LensSimulator } from "./components";
import { graduationKeysArray } from "./logic";
import { LensThicknessTitle } from "./data/title";
import { useLensThicknessSimulator } from "./hooks/use-lens-thickness-simulator";
import type { LensSide } from "./types/simulator";

const SIDES: LensSide[] = ["A", "B"];

export const LensThicknessSimulator = () => {
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    activeSide,
    setActiveSide,
    sideResults,
    isPositive,
    handleIndexChange,
    isSubmitEnabled,
  } = useLensThicknessSimulator();

  return (
    <section className="w-full h-full  p-10 flex flex-col gap-8 text-center">
      <HeaderSimulator {...LensThicknessTitle} />

      <PrescriptionForm
        keys={graduationKeysArray}
        values={values}
        onChange={handleChange}
        onSubmit={handleSubmit}
        isEnabled={isSubmitEnabled}
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
            isShow={activeSide === side}
            currentThickness={sideResults[side].thickness}
            isPositive={isPositive}
            isMax={sideResults[side].isMax}
            percentageDiff={sideResults[side].percentageDiff}
            onIndexChange={handleIndexChange(side)}
          />
        ))}
      </div>
    </section>
  );
};
