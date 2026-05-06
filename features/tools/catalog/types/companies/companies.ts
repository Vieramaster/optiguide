
import type {
  LensTreatment,
  TreatmentsName,
} from "../domain/tecnologies/lens-treatments";
import type {
  PhotochromaticLens,
  PhotochromaticName,
} from "../domain/tecnologies/photochromatic";
import type { LensBase, Lens } from "../domain/lens/lens-base";

// OBJETO DEL CATALOGO
export type LensBaseProduct<L, T, P> = {
  key: string;
  lens: L;
  treatment?: T;
  photochromatic?: P;
};

// OBJETO DE ENTRADA
export type LensObjectInput = LensBaseProduct<
  string,
  TreatmentsName[],
  PhotochromaticName
>;
// OBJETO RESUELTO
export type LensObjectResolved = LensBaseProduct<
  LensBase,
  LensTreatment[],
  PhotochromaticLens
>;
//OPTICAS
export type OpticalCompanyKey = "tecniOptica";

//CATALOGO DE EMPRESAS OPTICAS
export type Optica<T> = {
  monofocal: T;
  bifocal: T;
  progressive: T
};

// CATÁLOGO DE OPTICA DE ENTRADA
export type OpticaInput = Optica<LensObjectInput[]>;

// CATÁLOGO DE OPTICA DE RESUELTO
export type OpticaResolved = Optica<LensObjectResolved[]>;

//CATALOGO DE COMPANIAS OPTICAS ENTRADA

export type CatalogOpticalCompaniesInput = Record<
  OpticalCompanyKey,
  OpticaInput
>;

//CATALOGO DE COMPANIAS OPTICAS RESUELTO
export type CatalogOpticalCompaniesResolved = Record<
  OpticalCompanyKey,
  OpticaResolved
>;

//ESTADOS 

export type SelectState = {
  company: OpticalCompanyKey;
  lens: Lens;
};