import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/";
//TYPES

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
  <FieldGroup className="mx-auto w-56 cursor-po">
    <Field orientation="horizontal">
      <Checkbox
        className="cursor-pointer"
        id={`${label}-checkbox`}
        checked={checked}
        onCheckedChange={(checked) => onChange?.(!!checked)}
      />
      <FieldLabel title={label} className="cursor-help">
        {children}
      </FieldLabel>
    </Field>
  </FieldGroup>
);
