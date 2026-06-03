import { describe, expect, it } from "vitest";

import { INVALID_MESSAGES } from "../messages";

import { evaluatePrescriptionRules } from "./evaluate-prescription-rules";

describe("evaluatePrescriptionRules", () => {
  it("acepta receta base válida", () => {
    const errors = evaluatePrescriptionRules({
      mode: "base",
      values: { SPHERE: -2, CYLINDER: -0.5 },
    });

    expect(errors).toEqual([]);
  });

  it("rechaza receta base con ambas dioptrías en 0", () => {
    const errors = evaluatePrescriptionRules({
      mode: "base",
      values: { SPHERE: 0, CYLINDER: 0 },
    });

    expect(errors).toContain(INVALID_MESSAGES.INVALID_DIOPTERS__CANNOT_BE_ZERO);
  });

  it("rechaza dioptrías fuera de rango", () => {
    const errors = evaluatePrescriptionRules({
      mode: "base",
      values: { SPHERE: 25, CYLINDER: 0 },
    });

    expect(errors).toContain(INVALID_MESSAGES.INVALID_DIOPTERS);
  });

  it("acepta receta full válida con cilindro y eje", () => {
    const errors = evaluatePrescriptionRules({
      mode: "full",
      values: {
        SPHERE: -2,
        CYLINDER: -1,
        AXIS: 90,
        DIAMETER: 55,
      },
    });

    expect(errors).toEqual([]);
  });

  it("exige eje cuando hay cilindro en modo full", () => {
    const errors = evaluatePrescriptionRules({
      mode: "full",
      values: {
        SPHERE: -2,
        CYLINDER: -1,
        AXIS: Number.NaN,
        DIAMETER: 55,
      },
    });

    expect(errors).toContain(INVALID_MESSAGES.INVALID_AXIS);
  });

  it("rechaza eje sin cilindro en modo full", () => {
    const errors = evaluatePrescriptionRules({
      mode: "full",
      values: {
        SPHERE: -2,
        CYLINDER: 0,
        AXIS: 90,
        DIAMETER: 55,
      },
    });

    expect(errors).toContain(INVALID_MESSAGES.INVALID_ASTIGMATISM);
  });

  it("rechaza diámetro inválido en modo full", () => {
    const errors = evaluatePrescriptionRules({
      mode: "full",
      values: {
        SPHERE: -2,
        CYLINDER: 0,
        AXIS: 0,
        DIAMETER: 10,
      },
    });

    expect(errors).toContain(INVALID_MESSAGES.INVALID_DIAMETER);
  });
});
