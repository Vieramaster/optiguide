import { lensPathEmulator } from "@/lib/lens-path-emulator";

type LensSVGProps = {
  size: number;
  isPositive: boolean;
};

export const LensSVG = ({ size, isPositive }: LensSVGProps) => {
  //const path = lensPathEmulator(size, isPositive);

    const frontX = size * 36;
  const frontY = size * 31.5;
  const backX = size * 9.5;
  const backY = size * 9.5;

  // negativos
  const negSide = size * 31.2;
const EDGE = 20;
const H = 500;
  const positivePath = `
    M 0 ${-500}
    L ${EDGE} ${-500}
    C ${size * 36} ${-size * 31.5} ${size * 36} ${size * 31.5} ${EDGE} ${500}
    L 0 ${500H}
    C ${size * 9.5} ${ size * 9.5} ${size * 9.5} ${- size * 9.5} 0 ${-500}
    Z
  `;
  return (
    <svg
      viewBox="-100 -500 200 1000"
      className="h-80 w-80 ease-in duration-200"
    >
      <path d={positivePath} fill="black" />
    </svg>
  );
};
