import { TableRow, TableCell } from "@/shared/components/ui";

import { FormatCatalogCellValue } from "../components/format-catalog-cell-value";
import { CATALOG_TABLE_COLUMNS } from "../data/catalog-table-columns";
import type { CatalogRow } from "../types/ui/table-options";

interface CatalogRowItemProps {
  row: CatalogRow;
}

export const CatalogRowItem = ({ row }: CatalogRowItemProps) => {
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
