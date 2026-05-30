import { Label } from "@/shared/components/ui/label";
import { Input } from "@/shared/components/ui/input";

interface PrescriptionFieldProps {
  name: string;
  label: string;
  step: number;
  min: number;
  max: number;
  isComplete: boolean;
}

export const PrescriptionField = ({
  name,
  label,
  step,
  min,
  max,
  isComplete,
}: PrescriptionFieldProps) => {
  const fieldId = `prescription-${name}`;

  return (
    <div
      className={`relative flex items-center gap-1 text-center font-semibold xl:gap-3 ${isComplete ? "flex-col xl:flex-row" : ""}`}
    >
      <Label htmlFor={fieldId}>{label}:</Label>
      <Input
        id={fieldId}
        className="w-18 bg-primary-foreground text-center"
        type="number"
        step={step}
        name={name}
        min={min}
        max={max}
        placeholder="0"
      />
    </div>
  );
};
