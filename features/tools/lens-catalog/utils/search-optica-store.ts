//DATA
import { MONOFOCAL_LENS_CATALOG } from "../data/lens/monofocal-lenses";
import { TREATMENTS_CATALOG } from "../data/tecnologies/treatments";
import { PHOTOCHROMATIC_LENSES_CATALOG } from "../data/tecnologies/photochromatic";
import { LensObjectCatalog, OpticaInput, OpticaResolved } from "../types/lens/optica-store";
import { LensArrayCatalog } from "../types/lens/optica-store";



export const searchOpticaStore = (store: OpticaInput): OpticaResolved => {
    const { monofocal } = store
    return {
        monofocal: searchCatalogs(monofocal)
    }
}


export const searchCatalogs = (lensCatalog: LensArrayCatalog[]): LensObjectCatalog[] => {
    return lensCatalog.map(
        ({ key, lens, treatment, photochromatic }) => {

            const lensObject = MONOFOCAL_LENS_CATALOG[lens]

            const product: LensObjectCatalog = {
                key,
                lens: lensObject
            }

            if (treatment) {
                product.treatment = treatment.map(
                    (item) => TREATMENTS_CATALOG[item]
                )
            }

            if (photochromatic) {
                product.photochromatic =
                    PHOTOCHROMATIC_LENSES_CATALOG[photochromatic]
            }

            return product
        }
    )
}