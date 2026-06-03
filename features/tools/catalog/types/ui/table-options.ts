
import type { LucideIcon } from "lucide-react";
import type { SelectOption } from "@/shared/types/select-option";

import type { Range } from "../domain/lens/lens-base";


export type CatalogRow = {
  lensLine: string;
  range: Range;
  add: string,
  rangeDiopters: string;
  index: number;
  diam: string;
  surfacing: boolean;
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
  Icon?: LucideIcon;
};

export type RowOptions = SelectOption;
