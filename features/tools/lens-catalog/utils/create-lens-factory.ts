//TYPES
import type { CreateEssilorDefault, CreateEssilorLensInput, Lens, Company, LensBase } from "../types/lens/lens-base";

export const createLensFactory = (
    data: CreateEssilorLensInput,
    defaults: CreateEssilorDefault,
    lensConfig: Lens,
    companyCofing: Company
): LensBase => ({
    lens: lensConfig,
    company: companyCofing,
    ...defaults,
    ...data,
});
