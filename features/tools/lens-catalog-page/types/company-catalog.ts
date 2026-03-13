
import { LensVariant } from "./lens-variant";


export type CompanyCatalog = {
    id: string,
    monofocals: LensVariant[]
    bifocals: LensVariant[]
    progressive: LensVariant[]
}