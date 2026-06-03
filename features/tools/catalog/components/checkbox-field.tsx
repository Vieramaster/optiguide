import { Checkbox } from "@/shared/components/ui/checkbox";
import { Field, FieldGroup, FieldLabel } from "@/shared/components/ui";

interface CheckboxFieldProps {
  children?: React.ReactNode;
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}
export const CheckboxField = ({
  children,
  label,
  checked,
  onChange,
}: CheckboxFieldProps) => (
  <li className="w-full">
    <FieldGroup className=" place-items-center ">
      <Field orientation="horizontal" className="w-fit">
        <Checkbox
          className="cursor-pointer"
          id={`${label}-checkbox`}
          checked={checked}
          onCheckedChange={(checked) => onChange?.(!!checked)}
        />
        <FieldLabel htmlFor={`${label}-checkbox`} className="cursor-help">
          {children ?? label}
        </FieldLabel>
      </Field>
    </FieldGroup>
  </li>
);
