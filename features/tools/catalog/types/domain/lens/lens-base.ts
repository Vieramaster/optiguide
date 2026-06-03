export type Lens = "monofocal" | "bifocal" | "progressive";

export type Company = "Essilor" | "Kodak" | "Vitolén" | "ClearLook";

export type TypeLens =
  | "resina orgánica estándar"
  | "resina de medio índice"
  | "policarbonato"
  | "resina de alto índice"
  | "trivex"
  | "thiourethane"
  | "resina de ultra alto índice";

export type Range = "stock" | "ext" | "lab";

export type LensType = "esf" | "asf";

export type LensName = "Eyezen";

export type LensIndex = 1.5 | 1.53 | 1.56 | 1.59 | 1.6 | 1.67 | 1.74;

export type IndexMaterial =
  | "CR_39"
  | "MID_INDEX_RESIN"
  | "POLICARBONATE"
  | "POLICARBONATE"
  | "RESIN_MR_8"
  | "RESIN_MR_7"
  | "ULTRA_HIGH_INDEX_RESIN";

export type LensMaterial = {
  name: string;
  type: TypeLens;
  index: LensIndex;
};

export type RangeDiopters = {
  minEsf: number;
  maxEsf: number;
  minCil: number;
  maxCil: number;
};


export type MaxDiopters = {
  min: number;
  max: number;
};


export type LensBase = {
  lensItemId: string;
  lensName?: LensName;
  category: string;
  lens: Lens;
  company: Company;
  range: Range;
  diam: number[];
  rangeDiopters?: RangeDiopters[];
  maxDiopters?: MaxDiopters[];
  lensMaterial: LensMaterial;
  lensForm: LensType;
  lensTecnologies?: string[];
  /** `true` = tallado digital; `false` = estándar */
  surfacing: boolean;
  add?: MaxDiopters;
};

export type LensBaseObject = Record<string, LensBase>;

//FACTORY
type DioptersRequirement = {
  rangeDiopters?: RangeDiopters[];
  maxDiopters?: MaxDiopters[];
} & (
    | { rangeDiopters: RangeDiopters[] }
    | { maxDiopters: MaxDiopters[] }
  );

type LensFormRequirement = {
  lensForm?: LensType;
};

type BaseLens = Omit<
  LensBase,
  "company" | "lens" | "category" | "lensMaterial" | "lensForm" | "surfacing"
>;

type BaseBifocal = Omit<
  LensBase,
  "company" | "lens" | "lensForm" | "surfacing" | "diam" | "range"
>;

export type CreateLens = BaseLens & LensFormRequirement & DioptersRequirement;

export type createBifocalProgressive = BaseBifocal & DioptersRequirement;

export type LensCatalog = Record<Lens, LensBaseObject>;