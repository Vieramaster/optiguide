/**
 * Devuelve la potencia máxima (meridiano más negativo).
 * Si el cilindro es negativo, se suma al valor esférico.
 */
export const getMaxPower = (sphere: number, cylinder: number): number => {
  const maxPower = cylinder < 0 ? sphere + cylinder : sphere;

  return maxPower;
};

/**
 * Cálculo aproximado del espesor total de la lente.
 *
 * Base: Δe ≈ |Fmax| * (D/2)^2 / (2000 * (n - 1))
 * Total: base + incremento fijo según índice de refracción.
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
  const totalThickness = baseThickness + refractiveIndexThicknessIncrement;
  const roundedTotalThickness = roundToOneDecimal(totalThickness);

  return roundedTotalThickness;
};

const getThicknessIncrement = (
  refractiveIndex: number,
): number => {
  const increment =
    refractiveIndex === 1.67 || refractiveIndex === 1.74 ? 0.5 : 1;

  return increment;
};

const roundToOneDecimal = (value: number): number => {
  const roundedValue = Math.round(value * 10) / 10;

  return roundedValue;
};
