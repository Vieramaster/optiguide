import type { calculateThicknessType } from "@/types/calculate-thickness-types";
const defaultThicknessMap: Record<number, number> =
{
  1.5: 1.8,
  1.56: 1.6,
  1.6: 1.5,
  1.67: 1.3,
  1.74: 1.2,
};
// ---- Potencia máxima (meridiano más negativo) ----

export const getMaxPower = (sphere: number, cylinder: number): number =>
  cylinder < 0 ? sphere + cylinder : sphere;

// ---- Cálculo principal ----

export const calculateThickness = ({
  sphere,
  cylinder,
  diameter,
  refractiveIndex,
}: calculateThicknessType): number => {

  const centerThickness = defaultThicknessMap[refractiveIndex] ?? 1.2;

  const maxPower = getMaxPower(sphere, cylinder);

  const semiDiameter = diameter / 2; // mm

  // Δe ≈ |Fmax| * (D/2)^2 / (2000 * (n - 1))
  const thicknessIncrease =
    Math.abs(maxPower) *
    Math.pow(semiDiameter, 2) /
    (2000 * (refractiveIndex - 1));


  const totalthickness = centerThickness + thicknessIncrease;

  return Number(totalthickness.toFixed(1));

}

/**
 * 
 * type Lens = {
  sphere: number;
  cylinder?: number;
  diameter: number;
  index: number;
};

// Ajustes por índice
const ADJUST: Record<number, number> = {
  1.5: 0.75, // actualizado
  1.56: 0.55,
  1.59: 0.45,
  1.6: 0.435,
  1.67: 0.4,
  1.74: 0.36,
};

// Exponentes por índice
const EXPONENT: Record<number, number> = {
  1.5: 0.57, // calibrado
  1.56: 0.68,
  1.59: 0.74,
  1.6: 0.8,
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
  
  const diameterDefault = 65;
  const tCenter = 1;

  const isPositiveDiameter = sphere >= 0 ? diameterDefault : diameter;

  const tSphere = thicknessFromPower(sphere, isPositiveDiameter, index);

  const tCyl =
    cylinder !== 0 ? thicknessFromPower(cylinder, isPositiveDiameter, index) * 0.25 : 0;

  const sameSign =
    (sphere >= 0 && cylinder >= 0) || (sphere < 0 && cylinder < 0);

  let total =
    tCenter + tSphere + (cylinder !== 0 ? (sameSign ? tCyl : -tCyl) : 0);

  if (sphere > 0) total *= 0.8;

  // UNA sola regla
  return Math.floor(total * 10) / 10;
};


 */