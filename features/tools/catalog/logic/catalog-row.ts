import { LensTreatment, Features } from "../types/domain/technologies/lens-treatments";
import type { LensObjectResolved } from "../types/companies/companies";
import type { CatalogRow } from "../types/ui/table-options";


export const mapCatalogToRow = (catalog: LensObjectResolved): CatalogRow => {
  const { lens, treatment, photochromatic } = catalog;

  if (!lens || typeof lens === "string") {
    throw new Error("Lens dont resolve");
  }

  const {
    category,
    rangeDiopters,
    maxDiopters,
    add,
    range,
    surfacing,
    lensForm,
    diam,
    lensMaterial,
  } = lens;

  const lensLine = buildLensLine(category, treatment, photochromatic);

  const rangeDioptersText = buildRange(rangeDiopters, maxDiopters);

  const addText = add ? `${add.min} hasta ${add.max}` : "—";
  const photochromaticCell = Boolean(photochromatic);
  const polarizedCell =
    photochromatic?.photochromaticPolarized ||
    hasFeature(treatment, "polarized");

  return {
    lensLine,
    range,
    rangeDiopters: rangeDioptersText,
    add: addText,
    index: lensMaterial.index,
    diam: diam.join(", "),
    surfacing,
    lensForm,
    antiReflex: hasFeature(treatment, "antiReflex"),
    blueControl: hasFeature(treatment, "blueControl"),
    oleophobicHydrophobic: hasFeature(treatment, "oleophobicHydrophobic"),
    scratchResistant: hasFeature(treatment, "scratchResistant"),
    antiStatic: hasFeature(treatment, "antiStatic"),
    photochromatic: photochromaticCell,
    polarized: polarizedCell,
  };
};

//HELPERS
const hasFeature = (
  treatment: LensTreatment[] | undefined,
  feature: Features
) =>
  treatment?.some((item) => item.treatmentFeatures.includes(feature)) ?? false;


const buildLensLine = (
  category: string,
  treatment: LensTreatment[] | undefined,
  photochromatic: LensObjectResolved["photochromatic"]
) =>
  [
    category,
    ...(treatment?.map((t) => t.treatmentName) ?? []),
    photochromatic?.photochromaticName,
  ]
    .filter(Boolean)
    .join(" ");

const buildRange = (
  rangeDiopters: LensObjectResolved["lens"]["rangeDiopters"],
  maxDiopters: LensObjectResolved["lens"]["maxDiopters"]
) => {
  if (rangeDiopters?.length) {
    return rangeDiopters
      .map(
        (r) => `Esf ${r.minEsf} a ${r.maxEsf} / Cil ${r.minCil} a ${r.maxCil}`
      )
      .join(", ");
  }

  if (maxDiopters?.length) {
    return maxDiopters
      .map((r) => `${r.min} hasta ${r.max} dioptrias`)
      .join(", ");
  }

  return "—";
};