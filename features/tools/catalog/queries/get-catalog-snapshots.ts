import {
  OPTICAL_COMPANY_OPTIONS,
  OPTICAL_LENS_OPTIONS,
} from "../constants/catalog-table-columns";
import { resolveCatalog } from "../logic/resolve-catalog";
import type { CatalogSnapshots } from "../types/catalog-snapshots";
import type { SelectState } from "../types/companies/companies";
import type { Lens } from "../types/domain/lens/lens-base";
import type { OpticalCompanyKey } from "../types/companies/companies";

export const getCatalogSnapshots = async (): Promise<CatalogSnapshots> => {
  const snapshots: CatalogSnapshots = {};

  for (const companyOption of OPTICAL_COMPANY_OPTIONS) {
    for (const lensOption of OPTICAL_LENS_OPTIONS) {
      // Valores alineados con OPTICAL_*_OPTIONS y el dominio; SelectOption usa string.
      const selectFilter: SelectState = {
        company: companyOption.value as OpticalCompanyKey,
        lens: lensOption.value as Lens,
      };
      const snapshotKey = `${selectFilter.company}:${selectFilter.lens}`;
      const resolvedCatalog = resolveCatalog(selectFilter);
      const serializedCatalog = JSON.parse(
        JSON.stringify(resolvedCatalog),
      ) as typeof resolvedCatalog;

      snapshots[snapshotKey] = serializedCatalog;
    }
  }

  return snapshots;
};
