import type { CalculateThicknessParams } from "../types/calculate-thickness-params";

const DEFAULT_THICKNESS_MAP = {
  1.5: 1.8,
  1.56: 1.6,
  1.6: 1.5,
  1.67: 1.3,
  1.74: 1.2,
} as const;

type RefractiveIndex = keyof typeof DEFAULT_THICKNESS_MAP;

/**
 * Devuelve la potencia máxima (meridiano más negativo).
 * Si el cilindro es negativo, se suma al valor esférico.
 */
export const getMaxPower = (sphere: number, cylinder: number): number => {
  return cylinder < 0 ? sphere + cylinder : sphere;
};

/**
 * Cálculo aproximado del espesor total de la lente.
 *
 * Fórmula base:
 * Δe ≈ |Fmax| * (D/2)^2 / (2000 * (n - 1))
 */
export const calculateThickness = ({
  sphere,
  cylinder,
  diameter,
  refractiveIndex,
}: CalculateThicknessParams): number => {
  const centerThickness =
    DEFAULT_THICKNESS_MAP[refractiveIndex as RefractiveIndex] ?? 1.2;

  const maxPower = getMaxPower(sphere, cylinder);

  const semiDiameterSquared = (diameter * diameter) / 4;

  const thicknessIncrease =
    Math.abs(maxPower) * semiDiameterSquared /
    (2000 * (refractiveIndex - 1));

  const totalThickness = centerThickness + thicknessIncrease;

  return Math.round(totalThickness * 10) / 10;
};