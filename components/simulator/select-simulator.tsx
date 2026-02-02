import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CRYSTAL_INDEXES_DATA } from "@/data/crystal-indexes-data";

interface SelectSimulatorProps {
  onValueSelect: (value: string) => void;
}
export const SelectSimulator = ({ onValueSelect }: SelectSimulatorProps) => {
  return (
    <Select onValueChange={onValueSelect}>
      <SelectTrigger className="w-56 mx-auto ">
        <SelectValue placeholder="1.50 CR-39" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Indices</SelectLabel>

          {CRYSTAL_INDEXES_DATA.map(({ name, index }) => (
            <SelectItem key={index} value={index} className="">
              <span className="mr-3 font-semibold">{index}</span>
              <span className="italic">{name}</span>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
