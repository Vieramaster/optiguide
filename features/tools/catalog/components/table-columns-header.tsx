import { TableRow, TableHead } from "@/shared/components/ui";

import { CATALOG_TABLE_COLUMNS } from "../data/catalog-table-columns";

/**
 * Componente UI puro para renderizar el header de columnas de la tabla de catálogo.
 * No contiene lógica de negocio.
 */
export const TableColumnsHeader = () => (
  <TableRow>
    {CATALOG_TABLE_COLUMNS.map(({ label, Ico, value }) => (
      <TableHead key={value} title={label}>
        {Ico ? <Ico className="mx-auto" /> : label}
      </TableHead>
    ))}
  </TableRow>
);
