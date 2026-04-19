
type EssilorCategory =
  | "Orma"
  | "Airwear"
  | "Essilor 1.56"
  | "Ormix"
  | "Stylis"
  | "Premium";

type KodakCategory =
  | "Kodak 1.50"
  | "Kodak 1.56"
  | "Kodak Policarbonate"
  | "Kodak Trivex"
  | "Kodak High Index";

type ClearLookCategory =
  | "Sharp CR-39"
  | "Sharp Poli"
  | "Sharp 1.6"
  | "Sharp 1.67"
  | "Sharp 1.74"

type Category = KodakCategory | EssilorCategory | ClearLookCategory

export type Surfacing =
  | "convencional"
  | "digital";

export type Lens =
  | "monofocal"
  | "bifocal"
  | "occupational"
  | "progressive";

export type Company =
  | "Essilor"
  | "Kodak"
  | "Vitolén"
  | "Clear Look";

export type TypeLens =
  | "resina orgánica estándar"
  | "resina de medio índice"
  | "policarbonato"
  | "resina de alto índice"
  | "trivex"
  | "thiourethane"
  | "resina de ultra alto índice";

export type Range = "stock" | "ext" | "lab";

export type LensType = "esférico" | "asférico";

export type LensName = "Eyezen"

export type LensIndex = 1.50 | 1.53 | 1.56 | 1.59 | 1.60 | 1.67 | 1.74

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
  lensName?: LensName
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
};

export type LensBaseObject = Record<string, LensBase>

export type CreateDataLensInput = Omit<LensBase, "company" | "lens" | "lensMaterial" | "category">
