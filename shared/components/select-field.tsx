
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectGroup,
    SelectLabel,
    SelectItem
}
    from "./ui";

interface SelectOption {
    label: string;
    value: string;
}

interface CustomSelectProps<T> {
    options: SelectOption[];
    onValueSelect: (value: T) => void;
    placeholder?: string;
    label?: string;
}

export const SelectField = <T extends string>({
    options,
    onValueSelect,
    placeholder,
    label,
}: CustomSelectProps<T>) => (
    <Select
        onValueChange={onValueSelect}
        defaultValue={options ? options[0].value : ""}
    >
        <SelectTrigger className="w-58 mx-auto">
            <SelectValue placeholder={placeholder} />
        </SelectTrigger>

        <SelectContent>
            <SelectGroup>
                {label && <SelectLabel>{label}</SelectLabel>}

                {options ? options.map(({ label, value }) => (
                    <SelectItem key={value} value={value}>
                        {label}
                    </SelectItem>
                )) : null}
            </SelectGroup>
        </SelectContent>
    </Select>
);