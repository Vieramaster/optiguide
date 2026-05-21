import { useMemo, useState, useCallback } from "react";

import type { CatalogRowResult } from "../types/companies/companies";

const STEP = 20;

export const usePagination = (catalog:CatalogRowResult) => {
  const [visibleCount, setVisibleCount] = useState<number>(STEP);

  const visibleItems = useMemo(() => {
    return catalog.slice(0, visibleCount);
  }, [catalog, visibleCount]);

  const hasMore = visibleCount < catalog.length;

  const next = useCallback(() => {
    setVisibleCount((prev) => Math.min(prev + STEP, catalog.length));
  }, [catalog.length]);

  return {
    visibleItems,
    hasMore,
    next,
    visibleCount,
  };
};
