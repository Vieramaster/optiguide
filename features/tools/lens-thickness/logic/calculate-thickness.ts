/**
 * Devuelve la potencia máxima (meridiano más negativo).
 * Si el cilindro es negativo, se suma al valor esférico.
 */
export const getMaxPower = (sphere: number, cylinder: number): number =>
  cylinder < 0 ? sphere + cylinder : sphere;

export const isPositiveLensPower = (sphere: number, cylinder: number): boolean =>
  getMaxPower(sphere, cylinder) > 0;

/**
 * Cálculo aproximado del espesor total de la lente.
 *
 * Base: Δe ≈ |Fmax| * (D/2)^2 / (2000 * (n - 1))
 * Total: base + incremento fijo según índice de refracción.
 * El resultado nunca es menor que 1 mm.
 */
export const calculateThickness = (
  sphere: number,
  cylinder: number,
  diameter: number,
  refractiveIndex: number,
): number => {
  const maxPower = getMaxPower(sphere, cylinder);

  const radiusSquared = (diameter * diameter) / 4;

  const baseThickness =
    (Math.abs(maxPower) * radiusSquared) / (2000 * (refractiveIndex - 1));

  const refractiveIndexThicknessIncrement =
    getThicknessIncrement(refractiveIndex);

  const roundedTotalThickness = roundToOneDecimal(
    baseThickness + refractiveIndexThicknessIncrement,
  );

  return Math.max(1, roundedTotalThickness);
};

const getThicknessIncrement = (refractiveIndex: number): number =>
  refractiveIndex === 1.67 || refractiveIndex === 1.74 ? 0.6 : 1;

const roundToOneDecimal = (value: number): number =>
  Math.round(value * 10) / 10;
