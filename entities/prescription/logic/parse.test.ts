import { describe, expect, it } from "vitest";

import { parseBasePrescription, parseFullPrescription } from "./parse";

const buildFormData = (fields: Record<string, string>) => {
  const formData = new FormData();

  for (const [name, value] of Object.entries(fields)) {
    formData.set(name, value);
  }

  return formData;
};

describe("parseBasePrescription", () => {
  it("convierte campos vacíos en 0", () => {
    const formData = buildFormData({ SPHERE: "", CYLINDER: "" });
    const parsed = parseBasePrescription(formData);

    expect(parsed).toEqual({ SPHERE: 0, CYLINDER: 0 });
  });

  it("parsea números válidos", () => {
    const formData = buildFormData({ SPHERE: "-2", CYLINDER: "0.5" });
    const parsed = parseBasePrescription(formData);

    expect(parsed).toEqual({ SPHERE: -2, CYLINDER: 0.5 });
  });
});

describe("parseFullPrescription", () => {
  it("incluye AXIS y DIAMETER como NaN cuando están vacíos", () => {
    const formData = buildFormData({
      SPHERE: "-1",
      CYLINDER: "0",
      AXIS: "",
      DIAMETER: "",
    });
    const parsed = parseFullPrescription(formData);

    expect(parsed.SPHERE).toBe(-1);
    expect(parsed.CYLINDER).toBe(0);
    expect(Number.isNaN(parsed.AXIS)).toBe(true);
    expect(Number.isNaN(parsed.DIAMETER)).toBe(true);
  });

  it("parsea receta completa", () => {
    const formData = buildFormData({
      SPHERE: "-3",
      CYLINDER: "-1",
      AXIS: "90",
      DIAMETER: "55",
    });
    const parsed = parseFullPrescription(formData);

    expect(parsed).toEqual({
      SPHERE: -3,
      CYLINDER: -1,
      AXIS: 90,
      DIAMETER: 55,
    });
  });
});
