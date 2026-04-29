
import type { LucideIco } from "@/shared/types/Icons";

export type CatalogRow = {
  lensLine: string;
  type: string;
  rangeDiopters: string;
  index: number;
  diam: string;
  surfacing: string;
  lensForm: string;
  antiReflex: boolean;
  blueControl: boolean;
  oleophobicHydrophobic: boolean;
  scratchResistant: boolean;
  antiStatic: boolean;
  photochromatic: boolean;
  polarized: boolean;
};

export type Table<L, V> = {
  label: L;
  value: V;
};

export type TableOptions = Table<string, keyof CatalogRow> & {
  Ico?: LucideIco;
};

export type RowOptions = Table<string, string>;

