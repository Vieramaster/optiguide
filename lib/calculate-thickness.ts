type Lens = {
  sphere: number;
  cylinder?: number;
  diameter: number;
  index: number;
};

// Ajustes por índice
const ADJUST: Record<number, number> = {
  1.5: 0.75,   // actualizado
  1.56: 0.55,
  1.59: 0.45,
  1.6: 0.435,
  1.67: 0.40,
  1.74: 0.36,
};

// Exponentes por índice
const EXPONENT: Record<number, number> = {
  1.5: 0.62,   // calibrado
  1.56: 0.68,
  1.59: 0.74,
  1.6: 0.80,
  1.67: 0.82,
  1.74: 0.85,
};

const getAdjust = (index: number) => {
  const a = ADJUST[index];
  if (a == null) throw new Error("Índice no soportado");
  return a;
};

const getExp = (index: number) => {
  const e = EXPONENT[index];
  if (e == null) throw new Error("Índice no soportado");
  return e;
};

const thicknessFromPower = (power: number, diameter: number, index: number) => {
  const adjust = getAdjust(index);
  const exp = getExp(index);

  const P = Math.pow(Math.abs(power), exp);
  const numerator = diameter ** 2 * P * adjust;
  const denominator = 2000 * (index - 1);

  return numerator / denominator;
};

export const calculateThickness = ({
  sphere = 0,
  cylinder = 0,
  diameter,
  index,
}: Lens): number => {
  const tCenter = 1;

  const tSphere = thicknessFromPower(sphere, diameter, index);

  // sin cilindro
  if (!cylinder) {
    let total = tCenter + tSphere;
    if (sphere > 0) total *= 0.8; // −20% para positivos
    return Number(total.toFixed(2));
  }

  const tCyl = thicknessFromPower(cylinder, diameter, index) * 0.25;

  const sameSign =
    (sphere >= 0 && cylinder >= 0) || (sphere < 0 && cylinder < 0);

  let total = tCenter + tSphere + (sameSign ? tCyl : -tCyl);

  if (sphere > 0) total *= 0.8; // −20% para positivos

  return Number(total.toFixed(2));
};
