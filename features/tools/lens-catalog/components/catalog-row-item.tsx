import { TableRow, TableCell } from "@/components/ui";
import { FormatCatalogCellValue } from "../components/format-catalog-cell-value";
import { CATALOG_TABLE_COLUMNS } from "../data/catalog-table-columns";
import { mapCatalogToRow } from "../logic/catalog-row";
import type { LensObjectCatalog } from "../types/lens/optica-company";

interface CatalogRowItemProps {
  lensItem: LensObjectCatalog;
}
export const CatalogRowItem = ({ lensItem }: CatalogRowItemProps) => {
  const row = mapCatalogToRow(lensItem);
  return (
    <TableRow>
      {CATALOG_TABLE_COLUMNS.map(({ value, label }) => (
        <TableCell key={value} aria-label={label}>
          <FormatCatalogCellValue value={row[value]} label={label} />
        </TableCell>
      ))}
    </TableRow>
  );
};
