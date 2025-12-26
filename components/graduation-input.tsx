import { Label } from "@radix-ui/react-dropdown-menu";
import { Input } from "./ui/input";
import { simulatorGraduationData } from "@/data/simulator-graduation-data";

type GraduationInputProps = {
  name: keyof typeof simulatorGraduationData;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength: number;
};

export const GraduationInput = ({
  name,
  value,
  onChange,
  maxLength ,
}: GraduationInputProps) => {
  return (
    <div className="text-center font-semibold">
      <Label className="mb-1">{name}:</Label>
      <Input
        className="w-18 bg-primary-foreground"
        type="text"
        {...{ name, value, maxLength, onChange }}
        placeholder="0"
     
      />
    </div>
  );
};
