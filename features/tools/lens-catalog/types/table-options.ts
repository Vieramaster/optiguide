//TYPES
import type { CatalogRow } from "../logic/catalog-row";
import type { LucideIco } from "@/shared/types/Icons";

export type Table<L, V> = {
  label: L;
  value: V;
  Ico?: LucideIco;
};

export type TableOptions = Table<string, keyof CatalogRow>;
export type RowOptions = Table<string, string>;
