import type { SelectOption } from "@/shared/types/select-option";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "./ui";

export type { SelectOption };

interface SelectFieldProps<T extends string> {
  options: SelectOption[];
  onValueSelect: (value: T) => void;
  value?: string;
  placeholder?: string;
  label?: string;
}

export const SelectField = <T extends string>({
  options,
  onValueSelect,
  value,
  placeholder,
  label,
}: SelectFieldProps<T>) => {
  const isControlled = value !== undefined;

  return (
    <div className="flex w-full justify-center lg:w-auto">
      <Select
        onValueChange={onValueSelect}
        {...(isControlled
          ? { value }
          : { defaultValue: options[0]?.value ?? "" })}
      >
        <SelectTrigger className="w-50" aria-label={label}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            {label ? <SelectLabel>{label}</SelectLabel> : null}

            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
