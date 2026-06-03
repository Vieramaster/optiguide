"use client";

import { PrescriptionForm } from "@/entities/prescription";

import { useSimulatorOrchestrator } from "../hooks";
import { buildLensThicknessSimulatorView } from "../logic/build-lens-thickness-simulator-view";

import { LensComparisonPanelGroup } from "./lens-comparison-panel-group";
import { LensComparisonToggle } from "./lens-comparison-toggle";
import { LensThicknessAwaitingMessage } from "./lens-thickness-awaiting-message";
import { LensThicknessDifferenceBanner } from "./lens-thickness-difference-banner";
import { LensThicknessSimulatorHeader } from "./lens-thickness-simulator-header";

export const LensThicknessSimulator = () => {
  const orchestratorState = useSimulatorOrchestrator();
  const simulator = buildLensThicknessSimulatorView(orchestratorState);

  return (
    <section className="flex h-full w-full flex-col gap-10 p-10 text-center">
      <LensThicknessSimulatorHeader />

      <PrescriptionForm
        mode="full"
        onSubmit={simulator.onSubmit}
      />

      {!simulator.hasSubmittedPrescription ? (
        <LensThicknessAwaitingMessage
          message={simulator.awaitingPrescriptionMessage}
        />
      ) : null}

      <LensComparisonToggle
        items={simulator.lensComparisonToggleItems}
        onSelectLens={simulator.selectLens}
      />

      <LensThicknessDifferenceBanner
        message={simulator.thicknessDifferenceMessage}
      />

      <LensComparisonPanelGroup panels={simulator.lensComparisonPanelViews} />

      <p className="mt-10 italic">{simulator.noteMessage}</p>
    </section>
  );
};
