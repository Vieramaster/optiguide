//COMPONENTS
import { CheckboxBasic } from "@/components/checkbox-basic";
//TYPES
import type {  TableOptions } from "../types/table-options";

interface FilterCheckboxesProps {
  columns: TableOptions[];
  filters: Record<string, boolean>;
  onChange: (key: string, checked: boolean) => void;
}

export const FilterCheckboxes = ({
  columns,
  filters,
  onChange,
}: FilterCheckboxesProps) => (
  <div className="w-50 flex flex-wrap items-center justify-center gap-8  lg:gap-0 lg:w-[90%]">
    {columns.map(({ label, Ico, value }, index) =>
      Ico ? (
        <CheckboxBasic
          key={label + index}
          label={label}
          onChange={(checked) => onChange(value, checked)}
          checked={!!filters[value]}
        >
          <Ico />
        </CheckboxBasic>
      ) : value === "polarized" ? (
        <CheckboxBasic
          key={label + index}
          label={label}
          onChange={(checked) => onChange(value, checked)}
          checked={!!filters[value]}
        >
          <span>polarized</span>
        </CheckboxBasic>
      ) : null
    )}
  </div>
);
