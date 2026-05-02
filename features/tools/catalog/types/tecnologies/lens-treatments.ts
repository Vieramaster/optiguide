

export type TreatmentBrand = "ClearLook" | "Essilor" | "Vitolen" | "Kodak";
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
  | "CrizalTrio"
  | "GenericPolarized"
  | "Xperio"
  | "TrioCleanblue"
  | "KodakNoReflexBlue"
  | "ClearLookArBasic"
  | "ClearLookArSupra"
  | "ClearBlue"
  | "ClearLookPolarized"

export type TreatmentsCatalog = Record<TreatmentsName, LensTreatment>;
