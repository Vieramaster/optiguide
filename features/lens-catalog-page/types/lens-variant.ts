import { LensBase } from "./lens-base";
import { Treatment } from "./treatment";
import { Photochromatic } from "./photochromatic";

export type LensVariant = {
    id: string
    base: LensBase;
    treatments?: Treatment[];
    photochromatic?: Photochromatic;
};