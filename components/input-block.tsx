import { Label } from "@radix-ui/react-dropdown-menu";

import { Input } from "@/components/ui/input";

interface GraduationInputProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength: number;
}

export const InputBlock = ({
  name,
  value,
  onChange,
  maxLength,
}: GraduationInputProps) => (
  <div className="flex  items-center  gap-2 text-center font-semibold relative">
    <Label>{name}:</Label>
    <Input
      className="w-18 bg-primary-foreground"
      type="text"
      {...{ name, value, maxLength, onChange }}
      placeholder="0"
    />
  </div>
);
