import { CATALOG_OPTICAL_COMPANY } from "../constants/companies/optical-companies-catalog";
import { Optica } from "./lens/optica-company";

export type OpticalCompanyKey = keyof typeof CATALOG_OPTICAL_COMPANY;
export type LensTypeKey = keyof Optica<string>;
