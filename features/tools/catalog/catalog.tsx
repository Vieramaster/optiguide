"use client";

import {
  Title,
  SubTitle,
  Table,
  TableBody,
  TableHeader,
  Button,
} from "@/shared/components/ui";
import { ErrorList, PrescriptionForm, SelectField } from "@/shared/components";

import {
  TableColumnsHeader,
  CatalogRowItem,
  FilterCheckboxes,
} from "./components/";
import {
  OPTICAL_COMPANY_OPTIONS,
  OPTICAL_LENS_OPTIONS,
} from "./data/catalog-table-columns";
import { useCatalogOrchestrator } from "./hooks/use-catalog-orchestrator";

export const Catalog = () => {
  const {
    handleChangeCompany,
    handleChangeLens,
    filtercolumns,
    filters,
    handleCheckboxChange,
    PRESCRIPTION_KEYS,
    graduationValues,
    graduationErrors,
    handleGraduationChange,
    handleGraduationSubmit,
    handleVisibleLenses,
    isGraduationValid,
    catalogRows,
    hasMore,
  } = useCatalogOrchestrator();

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
            isEnabled={isGraduationValid}
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
