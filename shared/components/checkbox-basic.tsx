import { Checkbox } from "@/shared/components/ui/checkbox";
import { Field, FieldGroup, FieldLabel } from "@/shared/components/ui";

interface CheckBoxBasicProps {
  children?: React.ReactNode;
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}
export const CheckboxBasic = ({
  children,
  label,
  checked,
  onChange,
}: CheckBoxBasicProps) => (
  <li>
    <FieldGroup className="mx-auto w-14">
      <Field orientation="horizontal" className="w-10">
        <Checkbox
          className="cursor-pointer"
          id={`${label}-checkbox`}
          checked={checked}
          onCheckedChange={(checked) => onChange?.(!!checked)}
        />
        <FieldLabel title={label} className="cursor-help ">
          {children}
        </FieldLabel>
      </Field>
    </FieldGroup>
  </li>
);
