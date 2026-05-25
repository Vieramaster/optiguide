"use client";

import {
  Title,
  SubTitle,
  Table,
  TableBody,
  TableHeader,
  Button,
} from "@/shared/components/ui";
import { PrescriptionForm, SelectField } from "@/shared/components";
import { TRANSPOSITION_KEYS } from "@/shared/lib/prescription/constants";

import {
  TableColumnsHeader,
  CatalogRowItem,
  FilterCheckboxes,
} from "./components/";
import {
  OPTICAL_COMPANY_OPTIONS,
  OPTICAL_LENS_OPTIONS,
} from "./data/catalog-table-columns";
import { CATALOG_FILTER_COLUMNS } from "./data/catalog-table-columns";
import { useCatalogOrchestrator } from "./hooks/use-catalog-orchestatrator";
export const Catalog = () => {
  const { selectFilter, checkboxFilter, formFilter, pagination } = useCatalogOrchestrator();

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
            onValueSelect={selectFilter.handleSelectCompany}
          />
          <SelectField
            options={OPTICAL_LENS_OPTIONS}
            onValueSelect={selectFilter.handleSelectLens}
          />
        </div>
        <FilterCheckboxes
          columns={CATALOG_FILTER_COLUMNS}
          filters={checkboxFilter.checkboxFilter}
          onChange={checkboxFilter.handleCheckboxChange}
        />
        <div>
          <PrescriptionForm
            prescriptionKeys={TRANSPOSITION_KEYS}
            onSubmit={formFilter.handleFormSubmit}
            errorList={formFilter.formErrors}
            isCompletePrescription={false}
          />
        </div>
      </div>
      <div>
        <Table className="min-w-full">
          <TableHeader>
            <TableColumnsHeader />
          </TableHeader>
          <TableBody>
            {pagination.visibleItems.map((item, index) => (
              <CatalogRowItem key={index} row={item} />
            ))}
          </TableBody>
        </Table>

        {pagination.hasMore && (
          <div className="w-full flex pb-10">
            <Button onClick={pagination.next} className="mx-auto">
              Cargar más
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
