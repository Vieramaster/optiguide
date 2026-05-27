import type {
  LensBaseObject,
  CreateLens,
  LensBase,
} from "@/features/tools/catalog/types/domain/lens/lens-base";
import { LENS_MATERIALS } from "@/features/tools/catalog/constants/lens-materials";



export const createSharpPoli = (data: CreateLens): LensBase => ({
  company: "ClearLook",
  lens: "monofocal",
  category: "Sharp Poli",
  lensMaterial: LENS_MATERIALS.POLICARBONATE,
  lensForm: "asf",
  surfacing: "estandar",
  ...data,
});


export const SHARP_POLI: LensBaseObject = {
  clearLook_policarbonate_01: createSharpPoli({
    lensItemId: "CL_POLI_01",
    range: "lab",
    diam: [70],
    rangeDiopters: [{ minEsf: -13, maxEsf: 11, minCil: -6, maxCil: 6 }],
  }),
};
