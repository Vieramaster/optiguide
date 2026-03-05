import type { calculateThicknessType } from "@/types/calculate-thickness-types";

const defaultThicknessMap: Record<number, number> = {
  1.5: 1.8,
  1.56: 1.6,
  1.6: 1.5,
  1.67: 1.3,
  1.74: 1.2,
};

/**
 * Devuelve la potencia máxima (meridiano más negativo).
 * Si el cilindro es negativo, se suma al valor esférico.
 */
export const getMaxPower = (sphere: number, cylinder: number): number =>
  cylinder < 0 ? sphere + cylinder : sphere;

/**
 * Cálculo aproximado del espesor total de la lente.
 *
 * Fórmula base:
 *   Δe ≈ |Fmax| * (D/2)^2 / (2000 * (n - 1))
 *
 * donde:
 * - Fmax: potencia máxima en dioptrías
 * - D: diámetro en mm
 * - n: índice de refracción
 */
export const calculateThickness = ({
  sphere,
  cylinder,
  diameter,
  refractiveIndex,
}: calculateThicknessType): number => {
  const centerThickness = defaultThicknessMap[refractiveIndex] ?? 1.2;
  const maxPower = getMaxPower(sphere, cylinder);
  const semiDiameter = diameter / 2; // mm

  const thicknessIncrease =
    Math.abs(maxPower) * Math.pow(semiDiameter, 2) / (2000 * (refractiveIndex - 1));

  const totalThickness = centerThickness + thicknessIncrease;

  return Number(totalThickness.toFixed(1));
};
