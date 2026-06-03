import { describe, expect, it } from "vitest";

import {
  calculateThickness,
  getMaxPower,
  isPositiveLensPower,
} from "./calculate-thickness";

describe("getMaxPower", () => {
  it("suma cilindro negativo al esférico", () => {
    expect(getMaxPower(-4, -2)).toBe(-6);
  });

  it("usa solo esférico si el cilindro es positivo", () => {
    expect(getMaxPower(-4, 1)).toBe(-4);
  });
});

describe("isPositiveLensPower", () => {
  it("devuelve false para esfera negativa", () => {
    expect(isPositiveLensPower(-8, 0)).toBe(false);
  });

  it("devuelve true para esfera positiva", () => {
    expect(isPositiveLensPower(8, 0)).toBe(true);
  });

  it("devuelve false para graduación plana", () => {
    expect(isPositiveLensPower(0, 0)).toBe(false);
  });

  it("usa getMaxPower cuando el cilindro es negativo", () => {
    expect(isPositiveLensPower(-4, -2)).toBe(false);
  });
});

describe("calculateThickness", () => {
  it("redondea a un decimal", () => {
    const thickness = calculateThickness(-2, -0.5, 60, 1.6);

    expect(thickness).toBe(Math.round(thickness * 10) / 10);
  });

  it("devuelve el mismo espesor para la misma entrada", () => {
    const first = calculateThickness(-3, -1, 50, 1.67);
    const second = calculateThickness(-3, -1, 50, 1.67);

    expect(first).toBe(second);
  });

  it("aumenta el espesor con diámetro mayor", () => {
    const smallDiameter = calculateThickness(-4, 0, 50, 1.5);
    const largeDiameter = calculateThickness(-4, 0, 65, 1.5);

    expect(largeDiameter).toBeGreaterThan(smallDiameter);
  });

  it("aplica incremento menor para índices 1.67 y 1.74", () => {
    const standardIndex = calculateThickness(-2, 0, 50, 1.5);
    const highIndex = calculateThickness(-2, 0, 50, 1.67);

    expect(highIndex - standardIndex).toBeLessThan(1);
  });

  it("no devuelve un grosor menor que 1 mm", () => {
    const thickness = calculateThickness(0, 0, 50, 1.74);

    expect(thickness).toBeGreaterThanOrEqual(1);
  });
});
