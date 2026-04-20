//ICONS
import {
  Sparkles,
  MonitorSmartphone,
  DropletOff,
  Shield,
  ZapOff,
  Sun,
} from "lucide-react";
//TYPES
import type { TableOptions, RowOptions } from "../types/table-options";

export const CATALOG_TABLE_COLUMNS: TableOptions[] = [
  { label: "nombre del cristal", value: "lensLine" },
  { label: "tipo", value: "type" },
  { label: "rango de dioptrias", value: "rangeDiopters" },
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
  { label: "Tecni-Optica", value: "tecniOptica" },
  { label: "Optica Luro", value: "opticaLuro" },
];

export const OPTICAL_LENS_OPTIONS: RowOptions[] = [
  { label: "monofocal", value: "monofocal" },
  { label: "bifocal", value: "bifocal" },
];
