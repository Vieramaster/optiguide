//COMPONENTS
import { Label } from "@radix-ui/react-dropdown-menu";
import { Input } from "@/components/ui/input";

interface GraduationInputProps {
  name:string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength: number;

};

export const InputBlock = ({
  name,
  value,
  onChange,
  maxLength,

}: GraduationInputProps) => (
  <div className="text-center font-semibold relative">
    <Label className="mb-1">{name}:</Label>
    <Input
      className="w-18 bg-primary-foreground"
      type="text"
      {...{ name, value, maxLength, onChange }}
      placeholder="0"
    />
  </div>
);