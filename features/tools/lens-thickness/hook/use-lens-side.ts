import { useState } from "react";

import type { LensSide } from "../types/simulator";

export const useLensSide = () => {
  const [activeSide, setActiveSide] = useState<LensSide>("left");

  const handleToogleSide = () =>
    setActiveSide((prev) => (prev === "left" ? "right" : "left"));

  return {
    activeSide,
    handleToogleSide,
  };
};
