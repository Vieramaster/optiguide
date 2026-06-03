
const H = 500;
const EDGE = 20;

export const lensPathEmulator = (size: number, isPositive: boolean) => {
  // positivos
  if (size === 0) {
    size = 2;
  }
  const frontCurveControlX = size * 36;
  const frontCurveControlY = size * 31.5;
  const backCurveControlX = size * 9.5;
  const backCurveControlY = size * 9.5;

  // negativos
  const negativeSideCurveOffset = size * 31.2;

  const positivePath = `
    M 0 ${-H}
    L ${EDGE} ${-H}
    C ${frontCurveControlX} ${-frontCurveControlY} ${frontCurveControlX} ${frontCurveControlY} ${EDGE} ${H}
    L 0 ${H}
    C ${backCurveControlX} ${backCurveControlY} ${backCurveControlX} ${-backCurveControlY} 0 ${-H}
    Z
  `;

  const negativePath = `
    M -30 ${-H}
    C 30 -230 30 230 -30 ${H}
    L ${-negativeSideCurveOffset} ${H}
    C 20 300 20 -300 ${-negativeSideCurveOffset} ${-H}
    L -30 ${-H}
    Z
  `;

  return isPositive ? positivePath : negativePath;
};
