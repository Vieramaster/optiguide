// lens-path-emulator.ts
const H = 500;
const EDGE = 20;

export const lensPathEmulator = (size: number, isPositive: boolean) => {
  // positivos
  const frontX = size * 36;
  const frontY = size * 31.5;
  const backX = size * 9.5;
  const backY = size * 9.5;

  // negativos
  const negSide = size * 31.2;

  const positivePath = `
    M 0 ${-H}
    L ${EDGE} ${-H}
    C ${frontX} ${-frontY} ${frontX} ${frontY} ${EDGE} ${H}
    L 0 ${H}
    C ${backX} ${backY} ${backX} ${-backY} 0 ${-H}
    Z
  `;

  const negativePath = `
    M -30 ${-H}
    C 30 -230 30 230 -30 ${H}
    L ${-negSide} ${H}
    C 20 300 20 -300 ${-negSide} ${-H}
    L -30 ${-H}
    Z
  `;

  return isPositive ? positivePath : negativePath;
};
