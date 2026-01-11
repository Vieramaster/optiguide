export const getThicknessMessage = (A: number, B: number, side: "A" | "B"): string => {
  if (A === 0 || B === 0) return "";

  const diffA = ((A - B) / B) * 100;
  const diffB = ((B - A) / A) * 100;

  if ( A > B ) {
    return side === "A"
      ? `un ${diffA.toFixed(1)}% más grueso que su contraparte`
      : `un -${diffA.toFixed(1)}% más delgado que su contraparte`;
  } else if ( B > A ) {
    return side === "B"
      ? `un ${diffB.toFixed(1)}% más grueso que su contraparte`
      : `un -${diffB.toFixed(1)}% más delgado que su contraparte`;
  } else {
    return "el mismo grosor que su contraparte";
  }
}