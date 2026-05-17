import { useState } from "react";

import type { LensObjectResolved } from "../types/companies/companies";

const STEP = 20;

export const useVisibleLenses = (catalog: LensObjectResolved[]) => {
  const [visibleCount, setVisibleCount] = useState(STEP);

  const visibleLenses = catalog.slice(0, visibleCount);

  const handleVisibleLenses = () => {
    setVisibleCount((prev) => Math.min(prev + STEP, catalog.length));
  };

  const hasMore = visibleCount < catalog.length;

  return {
    visibleLenses,
    handleVisibleLenses,
    hasMore,
  };
};
