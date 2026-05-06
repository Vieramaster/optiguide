"use client";

import { useMemo } from "react";

import {
  Title,
  SubTitle,
  Table,
  TableBody,
  TableHeader,
  Button,
} from "@/components/ui";
import { ErrorList, PrescriptionForm, SelectField } from "@/components/";
import { useFormGraduation } from "@/shared/graduation-form/graduation-form-hook";
import { GraduationBaseKeys } from "@/shared/graduation-form/graduation-type";

import {
  TableColumnsHeader,
  CatalogRowItem,
  FilterCheckboxes,
} from "./components/";
import { filterTranspolation } from "./logic/filter-transpolation";
import { hasGraduationValues } from "./logic/has-graduation-values";
import {
  OPTICAL_COMPANY_OPTIONS,
  OPTICAL_LENS_OPTIONS,
} from "./data/catalog-table-columns";
import {
  useCatalogRows,
  useCatalogFilters,
  useChooseCatalog,
  useVisibleLenses,
} from "./hooks";
import { resolveCatalog } from "./logic/resolve-catalog";

export const Catalog = () => {
  // Claves de graduación a usar en el formulario
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

  return (
    <section className="overflow-x-auto">

      <div className="flex flex-col items-center gap-8 p-10">
        {/*Header */}
        <header className="flex flex-col gap-6 items-center py-4">
          <Title>Catalogo para opticas</Title>
          <SubTitle>Elije la óptica y el cristal que quieras buscar</SubTitle>
        </header>
        {/* Filtros principales */}
        <div className="flex gap-8">
          <SelectField
            options={OPTICAL_COMPANY_OPTIONS}
            onValueSelect={handleChangeCompany}
          />
          <SelectField
            options={OPTICAL_LENS_OPTIONS}
            onValueSelect={handleChangeLens}
          />
        </div>
        {/* Filtros booleanos */}
        <FilterCheckboxes
          columns={filtercolumns}
          filters={filters}
          onChange={handleCheckboxChange}
        />
        {/* Filtros por graduación */}
        <div>
          <PrescriptionForm
            keys={PRESCRIPTION_KEYS}
            values={graduationValues}
            onChange={handleGraduationChange}
            onSubmit={handleGraduationSubmit}
            isDisabled={isGraduationValid}
          />
          {Object.keys(graduationErrors).length > 0 && (
            <ErrorList error={graduationErrors} />
          )}
        </div>
      </div>

      <Table className="min-w-full">
        <TableHeader>
          <TableColumnsHeader />
        </TableHeader>
        <TableBody>
          {catalogRows.map(({ key, row }) => (
            <CatalogRowItem key={key} row={row} />
          ))}
        </TableBody>
      </Table>

      {hasMore && (
        <div className="w-full flex pb-10">
          <Button onClick={handleVisibleLenses} className="mx-auto">
            Cargar más
          </Button>
        </div>
      )}
    </section>
  );
};
