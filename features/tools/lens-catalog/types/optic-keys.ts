import { CATALOG_OPTICAL_COMPANY } from "../data/companies/catalog-optical-company";
import { Optica } from "./lens/optica-company";

export type OpticalCompanyKey = keyof typeof CATALOG_OPTICAL_COMPANY;
export type LensTypeKey = keyof Optica<string>;
