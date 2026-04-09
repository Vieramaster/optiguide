"use client";

import {
  Title,
  SubTitle,
  Table,
  TableBody,
  TableHeader,
} from "@/components/ui";
import { SelectField } from "@/components/select-field";
import { useSelect } from "./hooks/use-select";
import { useCatalogFilters } from "./hooks/use-catalog-filters";
import { TableColumnsHeader } from "./components/table-columns-header";
import { CatalogRowItem } from "./components/catalog-row-item";
import { FilterCheckboxes } from "./components/filter-checkboxes";
import {
  OPTICAL_COMPANY_OPTIONS,
  OPTICAL_LENS_OPTIONS,
} from "./data/catalog-table-columns";

export const Catalog = () => {
  const { onChangeCompany, onChangeLens, companySelect, lensSelect } =
    useSelect();
  const { filteredCatalog, filters, handleCheckboxChange, FILTERABLE_COLUMNS } =
    useCatalogFilters(companySelect, lensSelect);

  return (
    <section className="overflow-x-auto">
      <div className="flex flex-col items-center gap-8 p-10">
        <article className="flex flex-col gap-4 items-center">
          <Title>Catalogo para opticas</Title>
          <SubTitle>elije la optica y el cristal que quieras buscar</SubTitle>
        </article>
        {/* Filtros booleanos */}
        <FilterCheckboxes
          columns={FILTERABLE_COLUMNS}
          filters={filters}
          onChange={handleCheckboxChange}
        />
        <div className="flex gap-8">
          <SelectField
            options={OPTICAL_COMPANY_OPTIONS}
            onValueSelect={onChangeCompany}
          />
          <SelectField
            options={OPTICAL_LENS_OPTIONS}
            onValueSelect={onChangeLens}
          />
        </div>
      </div>

      <Table className="min-w-full">
        <TableHeader>
          <TableColumnsHeader />
        </TableHeader>

        <TableBody>
          {filteredCatalog.map((lensItem) => (
            <CatalogRowItem key={lensItem.key} lensItem={lensItem} />
          ))}
        </TableBody>
      </Table>
    </section>
  );
};
