import type {
  LensMaterial,
  IndexMaterial,
} from "../types/domain/lens/lens-base";

export const LENS_MATERIALS: Record<IndexMaterial, LensMaterial> = {
  CR_39: {
    name: "CR-39",
    type: "resina orgánica estándar",
    index: 1.5,
  },
  MID_INDEX_RESIN: {
    name: "Orgánico 1.56",
    type: "resina de medio índice",
    index: 1.56,
  },
  POLICARBONATE: {
    name: "policarbonato",
    type: "policarbonato",
    index: 1.59,
  },
  RESIN_MR_8: {
    name: "MR-8",
    type: "resina de alto índice",
    index: 1.6,
  },
  RESIN_MR_7: {
    name: "MR-7",
    type: "thiourethane",
    index: 1.67,
  },
  ULTRA_HIGH_INDEX_RESIN: {
    name: "MR-174",
    type: "resina de ultra alto índice",
    index: 1.74,
  },
};
