import type { TableOptions } from "../types/ui/table-options";

import { CatalogColumnIcon } from "./catalog-column-icon";
import { CheckboxField } from "./checkbox-field";

/**
 * Componente UI puro para mostrar checkboxes de filtros de columnas.
 * No contiene lógica de negocio, solo renderiza según props.
 */
interface FilterCheckboxesProps {
  columns: TableOptions[];
  filters: Record<string, boolean>;
  onChange: (columnKey: string, checked: boolean) => void;
}

export const FilterCheckboxes = ({
  columns,
  filters,
  onChange,
}: FilterCheckboxesProps) => (
  <ul className="w-full grid grid-cols-4 gap-4 place-items-center  ">
    {columns.map(({ label, Icon, value }) => (
      <CheckboxField
        key={value}
        label={label}
        onChange={(checked) => onChange(value, checked)}
        checked={!!filters[value]}
      >
        {Icon ? <CatalogColumnIcon label={label} Icon={Icon} /> : <span>{label}</span>}
      </CheckboxField>
    ))}
  </ul>
);
