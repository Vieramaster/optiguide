//==================DATA=================/
import { LENS_MATERIALS } from "@/features/tools/catalog/data/lens-materials";
s;

//==================FACTORY=================/

export const createSharpPoli = (data: CreateLens) =>
  ({
    company: "ClearLook",
    lens: "monofocal",
    category: "Sharp Poli",
    lensMaterial: LENS_MATERIALS.POLICARBONATE,
    lensForm: "esférico",
    surfacing: "convencional",
    ...data,
  }) satisfies LensBase;

//==================CATALOG=================/

export const SHARP_POLI = {
  clearLook_policarbonate_01: createSharpPoli({
    lensItemId: "CL_POLI_01",
    range: "lab",
    diam: [70],
    rangeDiopters: [{ minEsf: -13, maxEsf: 11, minCil: -6, maxCil: 6 }],
  }),
} satisfies LensBaseObject;
