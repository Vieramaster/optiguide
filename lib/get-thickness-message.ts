export const getThicknessMessage = (
  thicknessA: number,
  thicknessB: number,
  currentSide: "A" | "B"
): string => {
  if (thicknessA === 0 || thicknessB === 0) return "";

  const percentageDifferenceA = ((thicknessA - thicknessB) / thicknessB) * 100;
  const percentageDifferenceB = ((thicknessB - thicknessA) / thicknessA) * 100;

  if (thicknessA > thicknessB) {
    return currentSide === "A"
      ? `un ${percentageDifferenceA.toFixed(1)}% más grueso que su contraparte`
      : `un -${percentageDifferenceA.toFixed(1)}% más delgado que su contraparte`;
  } else if (thicknessB > thicknessA) {
    return currentSide === "B"
      ? `un ${percentageDifferenceB.toFixed(1)}% más grueso que su contraparte`
      : `un -${percentageDifferenceB.toFixed(1)}% más delgado que su contraparte`;
  } else {
    return "el mismo grosor que su contraparte";
  }
}