interface ThicknessResult {
  percentageDifferenceA: number;
  percentageDifferenceB: number;
}

export const GetThicknessDifference = (
  thicknessA: number,
  thicknessB: number
) :ThicknessResult => {

  // 1. Validación temprana para evitar división por cero
  if (thicknessA === 0 || thicknessB === 0) {
    return { percentageDifferenceA: 0, percentageDifferenceB: 0 };
  }

  // 2. Cálculo de diferencias
  // Fórmula: ((Nuevo - Base) / Base) * 100
  const diffA = ((thicknessA - thicknessB) / thicknessB) * 100;
  const diffB = ((thicknessB - thicknessA) / thicknessA) * 100;

  return {
    percentageDifferenceA: parseFloat(diffA.toFixed(1)),
    percentageDifferenceB: parseFloat(diffB.toFixed(1))
  };
};


