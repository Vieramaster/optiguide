import { useState } from "react";

interface ThicknessState {
  A: number;
  B: number;
}

/**
 * Hook para manejar el estado y lógica del simulador de espesor
 * @returns Estado y funciones para manejar el simulador
 */
export const useThicknessSimulator = () => {
  const [showSimulator, setShowSimulator] = useState(false);
  const [thickness, setThickness] = useState<ThicknessState>({ A: 0, B: 0 });

  const toggleSimulator = () => {
    setShowSimulator((prev) => !prev);
  };

  return {
    showSimulator,
    thickness,
    setThickness,
    toggleSimulator,
  };
};
