import { useState } from "react";

import type { LensSide } from "../types/simulator";

export const useLensSide = () => {
  const [activeSide, setActiveSide] = useState<LensSide>("A");

  const handleToogleSide = () =>
    setActiveSide((prev) => (prev === "A" ? "B" : "A"));

  return {
    activeSide,
    handleToogleSide,
  };
};
