import {
  Sparkles,
  MonitorSmartphone,
  DropletOff,
  Shield,
  ZapOff,
  Sun,
  RectangleGoggles,
} from "lucide-react";

import type { TableOptions, RowOptions } from "../types/ui/table-options";

export const CATALOG_FILTER_COLUMNS = [
  { label: "polarizado", value: "polarized", Icon: RectangleGoggles },
  { label: "antireflejo", Icon: Sparkles, value: "antiReflex" },
  { label: "filtro de pantalla", Icon: MonitorSmartphone, value: "blueControl" },
  {
    label: "oleofobico e hidrofobico",
    Icon: DropletOff,
    value: "oleophobicHydrophobic",
  },
  { label: "proteccion contra rayas", Icon: Shield, value: "scratchResistant" },
  { label: "anti estatica", Icon: ZapOff, value: "antiStatic" },
  { label: "fotocromatico", Icon: Sun, value: "photochromatic" },
] satisfies readonly TableOptions[];

export const CATALOG_TABLE_COLUMNS: TableOptions[] = [
  { label: "nombre del cristal", value: "lensLine" },
  { label: "rango", value: "range" },
  { label: "dioptrias", value: "rangeDiopters" },
  { label: "add", value: "add" },
  { label: "indice", value: "index" },
  { label: "diam", value: "diam" },
  { label: "tallado", value: "surfacing" },
  { label: "forma", value: "lensForm" },
  ...CATALOG_FILTER_COLUMNS,
] satisfies readonly TableOptions[];

export const OPTICAL_COMPANY_OPTIONS = [
  { label: "Tecni-Optica", value: "tecniOptica" },
] satisfies readonly RowOptions[];

export const OPTICAL_LENS_OPTIONS = [
  { label: "monofocal", value: "monofocal" },
  { label: "bifocal", value: "bifocal" },
  { label: "progresivos", value: "progressive" },
] satisfies readonly RowOptions[];
