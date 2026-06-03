import { TableRow, TableHead } from "@/shared/components/ui";

import { CATALOG_TABLE_COLUMNS } from "../constants/catalog-table-columns";

import { CatalogColumnIcon } from "./catalog-column-icon";

/**
 * Componente UI puro para renderizar el header de columnas de la tabla de catálogo.
 * No contiene lógica de negocio.
 */
export const TableColumnsHeader = () => (
  <TableRow>
    {CATALOG_TABLE_COLUMNS.map(({ label, Icon, value }) => (
      <TableHead key={value} className="text-center">
        {Icon ? (
          <CatalogColumnIcon
            label={label}
            Icon={Icon}
            className="mx-auto flex-col items-center gap-1"
          />
        ) : (
          label
        )}
      </TableHead>
    ))}
  </TableRow>
);
