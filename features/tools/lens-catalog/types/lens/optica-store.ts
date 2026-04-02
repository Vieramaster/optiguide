import type { LensTreatment, TreatmentsName, } from "../tecnologies/lens-treatments"
import type { PhotochromaticLens, PhotochromaticName } from "../tecnologies/photochromatic";
import type { LensBase } from "./lens-base";


export type LensBaseProduct<L, T, P> = {
    key: string,
    lens: L,
    treatment?: T,
    photochromatic?: P
}

export type LensArrayCatalog = LensBaseProduct<
    string,
    TreatmentsName[],
    PhotochromaticName
>

export type LensObjectCatalog = LensBaseProduct<
    LensBase,
    LensTreatment[],
    PhotochromaticLens
>

export type Optica<T> = {
    monofocal: T[]
    bifocal?: T[]
    progressive?: T[]
}

export type OpticaInput = Optica<LensArrayCatalog>
export type OpticaResolved = Optica<LensObjectCatalog>