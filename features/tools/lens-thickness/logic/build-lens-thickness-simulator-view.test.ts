import { describe, expect, it } from "vitest";

import type { PrescriptionFullValues } from "@/entities/prescription";

import type { SimulatorOrchestratorState } from "../types/simulator-orchestrator-state";

import { buildLensThicknessSimulatorView } from "./build-lens-thickness-simulator-view";

const prescription = (
  sphere: number,
  cylinder: number,
): PrescriptionFullValues => ({
  SPHERE: sphere,
  CYLINDER: cylinder,
  AXIS: 0,
  DIAMETER: 55,
});

const buildOrchestratorState = (
  submittedValues: PrescriptionFullValues | null,
): SimulatorOrchestratorState => ({
  prescriptionForm: {
    submittedValues,
    handleSubmit: () => {},
  },
  lensComparison: {
    active: "lensA",
    select: () => {},
  },
  refractiveIndexByLensComparison: {
    indexes: { lensA: "1.5", lensB: "1.67" },
    setIndex: () => {},
    getIndex: (lensComparisonKey) =>
      lensComparisonKey === "lensA" ? "1.5" : "1.67",
  },
  calculatedLensThickness: { lensA: 4, lensB: 3 },
  thicknessDifferenceDisplay: { kind: "hidden" },
});

describe("buildLensThicknessSimulatorView", () => {
  it("marca lente negativa con prescripción -8", () => {
    const view = buildLensThicknessSimulatorView(
      buildOrchestratorState(prescription(-8, 0)),
    );

    expect(view.lensComparisonPanelViews.every((panel) => !panel.isPositiveLens)).toBe(
      true,
    );
  });

  it("marca lente positiva con prescripción +8", () => {
    const view = buildLensThicknessSimulatorView(
      buildOrchestratorState(prescription(8, 0)),
    );

    expect(view.lensComparisonPanelViews.every((panel) => panel.isPositiveLens)).toBe(
      true,
    );
  });

  it("usa lente negativa por defecto sin prescripción enviada", () => {
    const view = buildLensThicknessSimulatorView(buildOrchestratorState(null));

    expect(view.lensComparisonPanelViews.every((panel) => !panel.isPositiveLens)).toBe(
      true,
    );
  });

  it("incluye mensaje de grosor por panel tras enviar la prescripción", () => {
    const view = buildLensThicknessSimulatorView(
      buildOrchestratorState(prescription(-8, 0)),
    );

    expect(view.lensComparisonPanelViews[0]?.thicknessMessage).toBe(
      "El grosor del lente es de 4.0 mm",
    );
  });

  it("no muestra mensaje de grosor sin prescripción enviada", () => {
    const view = buildLensThicknessSimulatorView(buildOrchestratorState(null));

    expect(
      view.lensComparisonPanelViews.every((panel) => panel.thicknessMessage === null),
    ).toBe(true);
  });
});
