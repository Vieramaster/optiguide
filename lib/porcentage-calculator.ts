import type {sideThicknessType} from "@/types/simulator-types";

interface porcentageCalculatorprops {
  side: "A" | "B";
  thickness: sideThicknessType;
}

interface ThicknessResult {
  isMax: boolean;
  percentageDiff: string;
}

export const porcentageCalculator = ({ side, thickness }: porcentageCalculatorprops): ThicknessResult => {
  // grosor de la lente opuesta
  const thicknessCounter = thickness[side === "A" ? "B" : "A"];

  // chequeo de igualdad
  const equalThickness = thickness[side] === thicknessCounter;

  // chequeo de cuál es más gruesa
  const isMax = thickness[side] > thicknessCounter;

  // cálculo de porcentaje de diferencia
  const diff = Math.abs(thickness.A - thickness.B);

  // Si son iguales, el porcentaje es 0, de lo contrario se calcula normalmente
  const percentageDiff = equalThickness ? "0" : (diff / thickness[side] * 100).toFixed(1);


  return { isMax, percentageDiff };
};
