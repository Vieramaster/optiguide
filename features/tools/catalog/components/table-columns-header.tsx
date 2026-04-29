import { TableRow, TableHead } from "@/components/ui";

import { CATALOG_TABLE_COLUMNS } from "../data/catalog-table-columns";

export const TableColumnsHeader = () => (
  <TableRow>
    {CATALOG_TABLE_COLUMNS.map(({ label, Ico, value }) => (
      <TableHead key={value} title={label}>
        {Ico ? <Ico className="mx-auto" /> : label}
      </TableHead>
    ))}
  </TableRow>
);
