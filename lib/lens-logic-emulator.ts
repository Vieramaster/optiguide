export const lensLogicEmulator = (size: number, isPositive: boolean) => {
  const positiveSFrontizeOne = size * 36;
  const positiveFrontSizeTwo = size * 31.5;
  const positiveBackSizeOne = size * 9.5;
  const positiveBackSizeTwo = size * 9.5;

  const path = isPositive
    ? `
          M 0 -500 
          L 20 -500 
          C ${positiveSFrontizeOne} ${-positiveFrontSizeTwo} ${positiveSFrontizeOne} ${positiveFrontSizeTwo} 20 500 
          L 0 500 
          C ${positiveBackSizeOne} ${positiveBackSizeTwo} ${positiveBackSizeOne} ${-positiveBackSizeTwo} 0 -500 
          Z
        `
    : `
          M 0 -200 
          C 20 0.191 19.88 -0.644 0.419 199.726 
          L -100 0 
          C 25 -0.462 25 0.608 -100 -200 
          Z
        `;

  return path;
};
