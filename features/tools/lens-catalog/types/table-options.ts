//TYPES
import type { CatalogRow } from "../logic/catalog-row";
import type { LucideIco } from "@/shared/types/Icons";

export type Table<L, V> = {
  label: L;
  value: V;
};

export type TableOptions = Table<string, keyof CatalogRow> & {
  Ico?: LucideIco;
};

export type RowOptions = Table<string, string>;
