import { Label } from "@radix-ui/react-dropdown-menu";

import { Input } from "@/shared/components/ui/input";

interface GraduationInputProps {
  name: string;
  step: number;
  min: number;
  max: number;
}

export const InputBlock = ({ name, step, min, max }: GraduationInputProps) => (
  <div className="flex  items-center  gap-2 text-center font-semibold relative">
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
