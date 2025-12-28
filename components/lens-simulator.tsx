import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {CRYSTAL_INDEXES_DATA} from "@/data/crystal-indexes-data";


export const LensSimulator = () => {

  return (
    <div className="h-full bg-violet-800 flex flex-col gap-8 ">
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Seleccionar indice" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Indices</SelectLabel>

            {CRYSTAL_INDEXES_DATA.map((item) => (
              <SelectItem key={item.index} value={item.index}>
                <span className="mr-3 font-semibold">{item.index}</span>
                <span className="italic">{item.name}</span>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
