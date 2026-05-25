import type { TableOptions } from "../types/ui/table-options";

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
  <ul className="w-50 flex flex-wrap items-center justify-center gap-8 lg:gap-16 lg:w-[90%]">
    {columns.map(({ label, Icon, value }) => (
      <CheckboxField
        key={value}
        label={label}
        onChange={(checked) => onChange(value, checked)}
        checked={!!filters[value]}
      >
        {Icon ? <Icon /> : <span>{label}</span>}
      </CheckboxField>
    ))}
  </ul>
);
