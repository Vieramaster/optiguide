import { useMemo } from "react";

import { lensPathEmulator } from "../logic";

type LensSVGProps = {
  size: number;
  isPositive: boolean;
  estimatedThickness: number;
};

export const LensSVG = ({
  size,
  isPositive,
  estimatedThickness,
}: LensSVGProps) => {
  const path = useMemo(
    () => lensPathEmulator(size, isPositive),
    [size, isPositive],
  );

  const lensShapeDescription = isPositive
    ? `Lente positiva, espesor estimado ${estimatedThickness} milímetros`
    : `Lente negativa, espesor estimado ${estimatedThickness} milímetros`;

  return (
    <svg
      viewBox="-100 -500 200 1000"
      className="mx-auto h-80 w-80"
      role="img"
      aria-label={lensShapeDescription}
    >
      <path d={path} fill="currentColor" />
    </svg>
  );
};
