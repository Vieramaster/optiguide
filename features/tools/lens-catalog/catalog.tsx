import type { ReactNode } from "react"
import { Table, TableHead, TableBody, TableHeader, TableRow, TableCell } from "@/components/ui"
import type { LucideProps } from "lucide-react"
import { Sparkles, MonitorSmartphone, DropletOff, Shield, ZapOff, Sun } from "lucide-react"
import { searchOpticaStore } from "./utils/search-optica-store"
import { CATALOG_TECNI_OPTICA } from "./data/company-tecni-optica/catalog-tecni-optica"
import { LensObjectCatalog } from "./types/lens/optica-store"
import { LensTreatment, Features } from "./types/tecnologies/lens-treatments"
import type { MaxDiopters, RangeDiopters } from "./types/lens/lens-base"
import { Check } from "lucide-react"

type Row = ReturnType<typeof mapCatalogToRow>

export const formatCatalogCellValue = (
    value: Row[keyof Row]
): ReactNode => {
    if (value === undefined) return "—"
    if (typeof value === "boolean") return value ? <Check className="mx-auto" /> : "—"
    if (typeof value === "string" || typeof value === "number") return value

    if (Array.isArray(value)) return formatArray(value)

    return "—"
}

function formatArray(value: unknown[]): ReactNode {
    if (value.length === 0) return "—"

    //para DIAM
    if (typeof value[0] === "number") {
        return (value as number[]).join(", ")
    }

    const first = value[0] as RangeDiopters | MaxDiopters

    if ("minEsf" in first) {
        return (value as RangeDiopters[])
            .map(
                (r) =>
                    `Esf ${r.minEsf} a ${r.maxEsf} / Cil ${r.minCil} a ${r.maxCil}`
            )

    }

    return (value as MaxDiopters[])
        .map((r) => `${r.min} hasta ${r.max} dioptrias`)

}
type Objet = {
    tableTitle: string
    tableKey: keyof Row
    Ico?: React.ForwardRefExoticComponent<
        Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
    >
}

export const tableObject: Objet[] = [
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

const findTreatment = (
    treatment: LensTreatment[] | undefined,
    feature: Features
) => treatment?.some((item) => item.treatmentFeatures.includes(feature)) ?? false

const mapCatalogToRow = (catalog: LensObjectCatalog) => {
    const { lens, treatment, photochromatic } = catalog

    const lensLine = [
        lens.category,
        ...(treatment?.map(t => t.treatmentName) ?? []),
        photochromatic?.photochromaticName
    ].filter(Boolean).join(" ")

    return {
        lensLine,
        type: lens.lensForm,
        rangeDiopters: lens.rangeDiopters ?? lens.maxDiopters,
        index: lens.lensMaterial.index,
        diam: lens.diam,
        surfacing: lens.surfacing,
        lensForm: lens.lensForm,

        antiReflex: findTreatment(treatment, "antiReflex"),
        blueControl: findTreatment(treatment, "blueControl"),
        oleophobicHydrophobic: findTreatment(treatment, "oleophobicHydrophobic"),
        scratchResistant: findTreatment(treatment, "scratchResistant"),
        antiStatic: findTreatment(treatment, "antiStatic"),

        photochromatic: !!photochromatic,
        polarized: photochromatic?.photochromaticPolarized ?? false
    }
}
export const Catalog = () => {
    const { monofocal } = searchOpticaStore(CATALOG_TECNI_OPTICA)

    return (
        <section className="overflow-x-auto">
            <Table className="min-w-full">
                <TableHeader>
                    <TableRow>
                        {tableObject.map(({ tableTitle, Ico, tableKey }) => (
                            <TableHead key={tableKey} >
                                {Ico ? <Ico className="mx-auto" /> : tableTitle}
                            </TableHead>
                        ))}
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {monofocal.map((lensItem) => {
                        const row = mapCatalogToRow(lensItem)

                        return (
                            <TableRow key={lensItem.key}>
                                {tableObject.map(({ tableKey }) => {
                                    const value = row[tableKey]

                                    return (
                                        <TableCell key={tableKey}>
                                            {formatCatalogCellValue(value)}
                                        </TableCell>
                                    )
                                })}
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </section>
    )
}