import { Label } from "@radix-ui/react-dropdown-menu";

import { Input } from "@/shared/components/ui/input";

interface PrescriptionFieldProps {
  name: string;
  step: number;
  min: number;
  max: number;
  isComplete: boolean;
}

export const PrescriptionField = ({
  name,
  step,
  min,
  max,
  isComplete,
}: PrescriptionFieldProps) => (
  <div
    className={`flex  items-center  gap-1 xl:gap-3 text-center font-semibold relative ${isComplete ? "flex-col xl:flex-row" : ""}`}
  >
    <Label>{name}:</Label>
    <Input
      className="w-18 bg-primary-foreground text-center"
      type="number"
      step={step}
      {...{ name, min, max }}
      placeholder="0"
    />
  </div>
);
