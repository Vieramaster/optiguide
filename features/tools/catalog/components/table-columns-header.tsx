import { TableRow, TableHead } from "@/shared/components/ui";

import { CATALOG_TABLE_COLUMNS } from "../constants/catalog-table-columns";

/**
 * Componente UI puro para renderizar el header de columnas de la tabla de catálogo.
 * No contiene lógica de negocio.
 */
export const TableColumnsHeader = () => (
  <TableRow>
    {CATALOG_TABLE_COLUMNS.map(({ label, Icon, value }) => (
      <TableHead key={value} title={label} className=" text-center">
        {Icon ? <Icon className="mx-auto " /> : label}
      </TableHead>
    ))}
  </TableRow>
);
