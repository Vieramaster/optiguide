import type { SelectOption } from "@/shared/types/select-option";

export const DEFAULT_REFRACTIVE_INDEX_SELECT_VALUE = "1.50";

export const REFRACTIVE_INDEX_SELECT_OPTIONS: SelectOption[] = [
  { value: "1.50", label: "1.50 - CR-39" },
  { value: "1.56", label: "1.56 - resina de medio índice" },
  { value: "1.59", label: "1.59 - policarbonato" },
  { value: "1.60", label: "1.60 - resina de alto índice" },
  { value: "1.67", label: "1.67 - resina de alto índice" },
  { value: "1.74", label: "1.74 - resina de alto índice" },
];
