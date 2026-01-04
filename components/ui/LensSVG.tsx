import { lensPathEmulator } from "@/lib/lens-path-emulator";
import { useMemo } from "react";


type LensSVGProps = {
  size: number;
  isPositive: boolean;
};

export const LensSVG = ({ size, isPositive }: LensSVGProps) => {

 const path = useMemo(() => lensPathEmulator(size, isPositive), [size, isPositive]);

  return (
    <svg
      viewBox="-100 -500 200 1000"
      className="h-80 w-80 ease-in duration-200"
    >
      <path d={path} fill="black" />
    </svg>
  );
};
