"use client";
//REACT
import { useMemo } from "react";
//COMPONENTS
import {
  Title,
  SubTitle,
  Table,
  TableBody,
  TableHeader,
} from "@/components/ui";

import {
  TableColumnsHeader,
  CatalogRowItem,
  FilterCheckboxes,
} from "./components/";

import { ErrorList, PrescriptionForm, SelectField } from "@/components/";

//UTILS
import { filterTranspolation } from "./utils/filter-transpolation";
import { hasGraduationValues } from "./utils/has-graduation-values";
//DATA
import {
  OPTICAL_COMPANY_OPTIONS,
  OPTICAL_LENS_OPTIONS,
} from "./data/catalog-table-columns";

//HOOKS
import { useCatalogFilters } from "./hooks/use-catalog-filters";
import { useFormGraduation } from "@/shared/graduation-form/graduation-form-hook";
import { useSelect } from "./hooks/use-select";
import { useCatalogRows } from "./hooks/use-catalog-row";

//TYPES
import { GraduationBaseKeys } from "@/shared/graduation-form/graduation-type";

const PRESCRIPTION_KEYS: GraduationBaseKeys[] = ["ESF", "CIL"];

export const Catalog = () => {
  //HANDLERS
  const { handleChangeCompany, handleChangeLens, companySelect, lensSelect } =
    useSelect();

  //FILTROS
  const { filteredCatalog, filters, handleCheckboxChange, FILTERABLE_COLUMNS } =
    useCatalogFilters(companySelect, lensSelect);

  //FILTROS EN BASE A GRADUACION
  const { values, errors, submittedValues, handleChange, handleSubmit } =
    useFormGraduation(PRESCRIPTION_KEYS);

  const transposedCatalog = useMemo(
    () => filterTranspolation(filteredCatalog, submittedValues),
    [filteredCatalog, submittedValues]
  );

  const transposedCatalogWithRow = useCatalogRows(transposedCatalog);
  //HABILITA EL BOTON DE TRANSPOSICION
  const isValidForm = hasGraduationValues(values)
  return (
    <section className="overflow-x-auto">
      <div className="flex flex-col items-center gap-8 p-10">
        <header className="flex flex-col gap-6 items-center">
          <Title>Catalogo para opticas</Title>
          <SubTitle>elije la optica y el cristal que quieras buscar</SubTitle>
        </header>
        {/* Filtros booleanos */}
        <FilterCheckboxes
          columns={FILTERABLE_COLUMNS}
          filters={filters}
          onChange={handleCheckboxChange}
        />
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
        <div className="flex gap-8">
          <PrescriptionForm
            keys={PRESCRIPTION_KEYS}
            values={values}
            onChange={handleChange}
            onSubmit={handleSubmit}
            isDisabled={isValidForm}
          />
          {Object.keys(errors).length > 0 && <ErrorList error={errors} />}
        </div>
      </div>

      <Table className="min-w-full">
        <TableHeader>
          <TableColumnsHeader />
        </TableHeader>

        <TableBody>
          {transposedCatalogWithRow.map(({ key, row }) => (
            <CatalogRowItem key={key} row={row} />
          ))}
        </TableBody>
      </Table>
    </section>
  );
};
