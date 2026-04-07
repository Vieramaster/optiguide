import type { ForwardRefExoticComponent, RefAttributes } from "react"
import type { LucideProps } from "lucide-react"
import { Sparkles, MonitorSmartphone, DropletOff, Shield, ZapOff, Sun } from "lucide-react"
import type { CatalogRow } from "../logic/catalog-row"

export type CatalogTableColumn = {
    tableTitle: string
    tableKey: keyof CatalogRow
    Ico?: ForwardRefExoticComponent<
        Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    >
}

export const CATALOG_TABLE_COLUMNS: CatalogTableColumn[] = [
    { tableTitle: "nombre del cristal", tableKey: "lensLine" },
    { tableTitle: "tipo", tableKey: "type" },
    { tableTitle: "rango de dioptrias", tableKey: "rangeDiopters" },
    { tableTitle: "indice", tableKey: "index" },
    { tableTitle: "diam", tableKey: "diam" },
    { tableTitle: "tallado", tableKey: "surfacing" },
    { tableTitle: "forma", tableKey: "lensForm" },
    { tableTitle: "antireflejo", Ico: Sparkles, tableKey: "antiReflex" },
    { tableTitle: "filtro de pantalla", Ico: MonitorSmartphone, tableKey: "blueControl" },
    { tableTitle: "oleofobico e hidrofobico", Ico: DropletOff, tableKey: "oleophobicHydrophobic" },
    { tableTitle: "proteccion contra rayas", Ico: Shield, tableKey: "scratchResistant" },
    { tableTitle: "anti estatica", Ico: ZapOff, tableKey: "antiStatic" },
    { tableTitle: "fotocromatico", Ico: Sun, tableKey: "photochromatic" },
    { tableTitle: "polarizado", tableKey: "polarized" }
]
