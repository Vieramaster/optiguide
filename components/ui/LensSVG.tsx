import { lensLogicEmulator } from "@/lib/lens-logic-emulator";

type LensSVGProps = {
  size: number;
  isPositive: boolean;
};

export const LensSVG = ({ size, isPositive }: LensSVGProps) => {
  const path = lensLogicEmulator(size, isPositive);
  return (
    <svg
      height={300}
      viewBox="-100 -500 200 1000"
      className="transition ease-in-out duration-500  h-80 size-80"
    >
      <path d={path} fill="black" />
    </svg>
  );
};
