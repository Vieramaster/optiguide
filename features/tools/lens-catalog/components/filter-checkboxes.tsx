import { CheckboxBasic } from "@/components/checkbox-basic";
import type { FC } from "react";

interface FilterCheckboxesProps {
  columns: { value: string; label: string; Ico?: FC<any> }[];
  filters: Record<string, boolean>;
  onChange: (key: string, checked: boolean) => void;
}

export const FilterCheckboxes = ({
  columns,
  filters,
  onChange,
}: FilterCheckboxesProps) => (
  <div className="w-200 flex justify-center items-center ">
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
