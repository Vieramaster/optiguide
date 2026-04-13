export const transposePrescription = (sphere: number, cylinder: number) => {
  return {
    sphere: sphere + cylinder,
    cylinder: -cylinder,
  };
};