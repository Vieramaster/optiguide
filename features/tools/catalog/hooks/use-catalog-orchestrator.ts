import { useMemo } from "react";

import { useFormGraduation } from "@/shared/graduation-form/graduation-form-hook";
import type { GraduationBaseKeys } from "@/shared/graduation-form/graduation-type";

import { resolveCatalog } from "../logic/resolve-catalog";
import { filterTranspolation } from "../logic/filter-transpolation";
import { hasGraduationValues } from "../logic/has-graduation-values";


import { useCatalogRows } from "./use-catalog-rows";
import { useChooseCatalog } from "./use-choose-catalog";
import { useCatalogFilters } from "./use-catalog-filters";
import { useVisibleLenses } from "./use-visible-lenses";

export const useCatalogOrchestrator = () => {
  const PRESCRIPTION_KEYS: GraduationBaseKeys[] = ["ESF", "CIL"];

  // Estado y handlers de selección de óptica y tipo de lente
  const { handleChangeCompany, handleChangeLens, companySelect, lensSelect } =
    useChooseCatalog();

  // Catálogo resuelto según selección
  const resolvedCatalog = useMemo(
    () => resolveCatalog({ company: companySelect, lens: lensSelect }),
    [companySelect, lensSelect],
  );

  // Filtros booleanos
  const { filteredCatalog, filters, handleCheckboxChange, filtercolumns } =
    useCatalogFilters(resolvedCatalog);

  // Estado y handlers del formulario de graduación
  const {
    values: graduationValues,
    errors: graduationErrors,
    submittedValues: submittedGraduationValues,
    handleChange: handleGraduationChange,
    handleSubmit: handleGraduationSubmit,
  } = useFormGraduation(PRESCRIPTION_KEYS);

  // Filtrado por transposición de graduación
  const transposedCatalog = useMemo(
    () => filterTranspolation(filteredCatalog, submittedGraduationValues),
    [filteredCatalog, submittedGraduationValues],
  );

  // Hook para paginado incremental en cliente.
  const { visibleLenses, handleVisibleLenses, hasMore } =
    useVisibleLenses(transposedCatalog);

  // Mapeo a filas de tabla
  const catalogRows = useCatalogRows(visibleLenses);

  // Habilita el botón de transposición si hay valores válidos
  const isGraduationValid = hasGraduationValues(graduationValues);

  return {
    handleChangeCompany,
    handleChangeLens,
    companySelect,
    lensSelect,
    filters,
    handleCheckboxChange,
    filtercolumns,
    graduationValues,
    graduationErrors,
    submittedGraduationValues,
    handleGraduationChange,
    handleGraduationSubmit,
    isGraduationValid,
    catalogRows,
    handleVisibleLenses,
    hasMore,
    PRESCRIPTION_KEYS
  };
};
