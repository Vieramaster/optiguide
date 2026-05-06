import {
  Sparkles,
  MonitorSmartphone,
  DropletOff,
  Shield,
  ZapOff,
  Sun,
} from "lucide-react";

import type { TableOptions, RowOptions } from "../types/ui/table-options";

export const CATALOG_TABLE_COLUMNS: TableOptions[] = [
  { label: "nombre del cristal", value: "lensLine" },
  { label: "rango", value: "range" },
  { label: "dioptrias", value: "rangeDiopters" },
  { label: "add", value: "add" },
  { label: "indice", value: "index" },
  { label: "diam", value: "diam" },
  { label: "tallado", value: "surfacing" },
  { label: "forma", value: "lensForm" },
  { label: "antireflejo", Ico: Sparkles, value: "antiReflex" },
  { label: "filtro de pantalla", Ico: MonitorSmartphone, value: "blueControl" },
  {
    label: "oleofobico e hidrofobico",
    Ico: DropletOff,
    value: "oleophobicHydrophobic",
  },
  { label: "proteccion contra rayas", Ico: Shield, value: "scratchResistant" },
  { label: "anti estatica", Ico: ZapOff, value: "antiStatic" },
  { label: "fotocromatico", Ico: Sun, value: "photochromatic" },
  { label: "polarizado", value: "polarized" },
] as const;

export const OPTICAL_COMPANY_OPTIONS: RowOptions[] = [
  { label: "Tecni-Optica", value: "tecniOptica" }
];

export const OPTICAL_LENS_OPTIONS: RowOptions[] = [
  { label: "monofocal", value: "monofocal" },
  { label: "bifocal", value: "bifocal" },
  { label: "progresivos", value: "progressive" },
];
