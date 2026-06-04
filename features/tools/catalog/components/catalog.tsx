"use client";

import {
  Title,
  SubTitle,
  Table,
  TableBody,
  TableHeader,
  Button,
  TooltipProvider,
} from "@/shared/components/ui";
import { SelectField } from "@/shared/components";
import { PrescriptionForm } from "@/entities/prescription";

import {
  OPTICAL_COMPANY_OPTIONS,
  OPTICAL_LENS_OPTIONS,
} from "../constants/catalog-table-columns";
import { CATALOG_FILTER_COLUMNS } from "../constants/catalog-table-columns";
import { useCatalogOrchestrator } from "../hooks";
import type { CatalogSnapshots } from "../types/catalog-snapshots";

import { CatalogRowItem } from "./catalog-row-item";
import { FilterCheckboxes } from "./filter-checkboxes";
import { TableColumnsHeader } from "./table-columns-header";

interface CatalogProps {
  snapshots: CatalogSnapshots;
}
export const Catalog = ({ snapshots }: CatalogProps) => {
  const { selectFilter, checkboxFilter, formFilter, pagination } = useCatalogOrchestrator(snapshots);

  return (
    <TooltipProvider delayDuration={0}>
      <section className="flex w-full min-w-0 flex-col overflow-x-hidden">
        <div className="flex mx-auto w-full max-w-200 flex-col items-center gap-8 overflow-x-hidden p-10">
          <header className="flex flex-col gap-6 items-center py-4 text-center">
            <Title>Catalogo para opticas</Title>
            <SubTitle>Elije la óptica y el cristal que quieras buscar</SubTitle>
          </header>
          <div className="flex w-full flex-col items-center gap-8 lg:flex-row lg:justify-center">
            <SelectField
              label="Óptica"
              options={OPTICAL_COMPANY_OPTIONS}
              onValueSelect={selectFilter.handleSelectCompany}
            />
            <SelectField
              label="Tipo de cristal"
              options={OPTICAL_LENS_OPTIONS}
              onValueSelect={selectFilter.handleSelectLens}
            />
          </div>
          <FilterCheckboxes
            columns={CATALOG_FILTER_COLUMNS}
            filters={checkboxFilter.filter}
            onChange={checkboxFilter.handleCheckboxChange}
          />
          <div>
            <PrescriptionForm
              mode="base"
              onSubmit={formFilter.handleValidSubmit}
            />
          </div>
        </div>
        {selectFilter.isCatalogEmpty ? (
          <p
            className="mx-auto max-w-lg px-10 pb-10 text-center text-muted-foreground"
            role="status"
          >
            No hay cristales para la combinación seleccionada. Elegí otra óptica o
            tipo de cristal.
          </p>
        ) : null}

        <div className="min-w-0 w-full max-w-full overflow-x-auto overscroll-x-contain">
          <Table
            className="min-w-max w-max lg:w-full"
            containerClassName="w-max overflow-x-visible lg:w-full"
          >
            <TableHeader>
              <TableColumnsHeader />
            </TableHeader>
            <TableBody>
              {pagination.visibleItems.map((item, index) => (
                <CatalogRowItem key={index} row={item} />
              ))}
            </TableBody>
          </Table>


        </div>
        {pagination.hasMore && (
          <div className="w-full flex py-5">
            <Button onClick={pagination.next} className="mx-auto cursor-pointer">
              Cargar más
            </Button>
          </div>
        )}
      </section>
    </TooltipProvider>
  );
};
