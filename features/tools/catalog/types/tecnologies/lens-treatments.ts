import { TREATMENTS_CATALOG } from "../../data/tecnologies/treatments";

export type TreatmentBrand = "Clear Look" | "Essilor" | "Vitolen";
export type Features =
  | "antiReflex"
  | "blueControl"
  | "oleophobicHydrophobic"
  | "scratchResistant"
  | "antiStatic"
  | "polarized";

export type LensTreatment = {
  treatmentItemId: string;
  treatmentName: string;
  treatmentBrand: TreatmentBrand;
  treatmentTecnologies: string[];
  treatmentFeatures: Features[];
};

export type TreatmentsName =
  | "MidIndex"
  | "ClearLook"
  | "ClearLookSupra"
  | "BlueCut"
  | "CrizalSapphire"
  | "CrizalRock"
  | "CrizalPrevencia"
  | "CrizalForte"
  | "SpectrumSky"
  | "SpectrumElite"
  | "Xperio";

export type TreatmentsCatalog = Record<TreatmentsName, LensTreatment>;
