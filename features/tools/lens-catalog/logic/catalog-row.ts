import { LensObjectCatalog } from "../types/lens/optica-store"
import { LensTreatment, Features } from "../types/tecnologies/lens-treatments"

export type CatalogRow = {
    lensLine: string
    type: string
    rangeDiopters: string
    index: number
    diam: string
    surfacing: string
    lensForm: string
    antiReflex: boolean
    blueControl: boolean
    oleophobicHydrophobic: boolean
    scratchResistant: boolean
    antiStatic: boolean
    photochromatic: boolean
    polarized: boolean
}

const findTreatment = (
    treatment: LensTreatment[] | undefined,
    feature: Features
) => treatment?.some((item) => item.treatmentFeatures.includes(feature)) ?? false

export const mapCatalogToRow = (catalog: LensObjectCatalog): CatalogRow => {
    const { lens, treatment, photochromatic } = catalog

    const lensLine = [
        lens.category,
        ...(treatment?.map((t) => t.treatmentName) ?? []),
        photochromatic?.photochromaticName
    ].filter(Boolean).join(" ")

    const rangeDiopters = lens.rangeDiopters
        ?.map((r) => `Esf ${r.minEsf} a ${r.maxEsf} / Cil ${r.minCil} a ${r.maxCil}`)
        .join(", ")
        ?? lens.maxDiopters
            ?.map((r) => `${r.min} hasta ${r.max} dioptrias`)
            .join(", ")
        ?? "—"

    return {
        lensLine,
        type: lens.lensForm,
        rangeDiopters,
        index: lens.lensMaterial.index,
        diam: lens.diam.join(", "),
        surfacing: lens.surfacing,
        lensForm: lens.lensForm,
        antiReflex: findTreatment(treatment, "antiReflex"),
        blueControl: findTreatment(treatment, "blueControl"),
        oleophobicHydrophobic: findTreatment(treatment, "oleophobicHydrophobic"),
        scratchResistant: findTreatment(treatment, "scratchResistant"),
        antiStatic: findTreatment(treatment, "antiStatic"),
        photochromatic: !!photochromatic,
        polarized: photochromatic?.photochromaticPolarized || findTreatment(treatment, "polarized")
    }
}
