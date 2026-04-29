"use client";

import { useMemo } from "react";

import {
  Title,
  SubTitle,
  Table,
  TableBody,
  TableHeader,
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
import { useCatalogRows, useCatalogFilters, useChooseCatalog } from "./hooks";
import { resolveCatalog } from "./logic/resolve-catalog";

export const Catalog = () => {
  const PRESCRIPTION_KEYS: GraduationBaseKeys[] = ["ESF", "CIL"];

  //HANDLERS DE OPTICA
  const { handleChangeCompany, handleChangeLens, companySelect, lensSelect } =
    useChooseCatalog();

  //CATALOGO

  const resolvedCatalog = useMemo(
    () => resolveCatalog({ company: companySelect, lens: lensSelect }),
    [companySelect, lensSelect],
  );

  //FILTROS
  const { filteredCatalog, filters, handleCheckboxChange, FILTERABLE_COLUMNS } =
    useCatalogFilters(resolvedCatalog);

  //FILTROS EN BASE A GRADUACION
  const { values, errors, submittedValues, handleChange, handleSubmit } =
    useFormGraduation(PRESCRIPTION_KEYS);

  const transposedCatalog = useMemo(
    () => filterTranspolation(filteredCatalog, submittedValues),
    [filteredCatalog, submittedValues],
  );

  const transposedCatalogWithRow = useCatalogRows(transposedCatalog);
  //HABILITA EL BOTON DE TRANSPOSICION
  const isValidForm = hasGraduationValues(values);
  return (
    <section className="overflow-x-auto">
      <div className="flex flex-col items-center gap-8 p-10">
        <header className="flex flex-col gap-6 items-center">
          <Title>Catalogo para opticas</Title>
          <SubTitle>elije la optica y el cristal que quieras buscar</SubTitle>
        </header>
        {/*FILTROS PRINCIPALES */}
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
        {/* FILTROS BOOLEANOS */}
        <FilterCheckboxes
          columns={FILTERABLE_COLUMNS}
          filters={filters}
          onChange={handleCheckboxChange}
        />
        {/* FILTROS TRANSPOLACIONES */}
        <div className="">
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
