import { CheckboxBasic } from "@/components/checkbox-basic";

import type { TableOptions } from "../types/table-options";

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
  <ul className="w-50 flex flex-wrap items-center justify-center gap-8 lg:gap-0 lg:w-[90%]">
    {columns.map(({ label, Ico, value }) => (
      <CheckboxBasic
        key={value}
        label={label}
        onChange={(checked) => onChange(value, checked)}
        checked={!!filters[value]}
      >
        {Ico ? <Ico /> : <span>{label}</span>}
      </CheckboxBasic>
    ))}
  </ul>
);
