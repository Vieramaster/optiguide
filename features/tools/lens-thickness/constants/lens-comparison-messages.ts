export const buildLensThicknessMmMessage = (thicknessMm: number): string => {
  const positiveMm = Math.abs(thicknessMm);
  const formattedMm = positiveMm.toFixed(1);

  return `El grosor del lente es de ${formattedMm} mm`;
};
