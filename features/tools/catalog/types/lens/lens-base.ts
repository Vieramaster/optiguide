type EssilorCategory =
  | "Orma"
  | "Airwear"
  | "Essilor 1.56"
  | "Ormix"
  | "Stylis"
  | "Premium";

type KodakCategory =
  | "Kodak 1.50"
  | "EvoClear Digital 1.56"
  | "Kodak Policarbonate"
  | "Kodak Trivex"
  | "Kodak High Index";

type ClearLookCategory =
  | "Sharp CR-39"
  | "Sharp Poli"
  | "Sharp 1.6"
  | "Sharp 1.67"
  | "Sharp 1.74";

export type Category = KodakCategory | EssilorCategory | ClearLookCategory;

export type Surfacing = "estandar" | "digital";

export type Lens = "monofocal" | "bifocal";

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
  category: Category;
  lens: Lens;
  company: Company;
  range: Range;
  diam: number[];
  rangeDiopters?: RangeDiopters[];
  maxDiopters?: MaxDiopters[];
  lensMaterial: LensMaterial;
  lensForm: LensType;
  lensTecnologies?: string[];
  surfacing: Surfacing;
  add?: number;
};

export type LensBaseObject = Record<string, LensBase>;

//FACTORY
type DioptersRequirement =
  | { rangeDiopters: RangeDiopters[]; maxDiopters?: MaxDiopters[] }
  | { maxDiopters: MaxDiopters[]; rangeDiopters?: RangeDiopters[] };

type LensFormRequirement = { lensForm: LensType } | { lensForm?: never };

export type OmitBase = Omit<
  LensBase,
  "company" | "lens" | "category" | "lensMaterial" | "lensForm" | "surfacing"
>;
export type CreateLens = OmitBase & LensFormRequirement & DioptersRequirement;

export type LensCatalog = Record<Lens, LensBaseObject>;
