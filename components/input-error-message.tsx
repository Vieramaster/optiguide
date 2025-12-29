import { Popover, PopoverTrigger,PopoverContent } from "@radix-ui/react-popover";
import { Select } from "@radix-ui/react-select";
export const InputErrorMessage = ({hasError}: string) => (
  <Popover open={hasError}>
    <PopoverTrigger asChild>
              <GraduationInput
                key={key}
                name={key}
                maxLength={5}
                value={graduationValue[key]}
                onChange={onChangevalues}
                required={key === "ESF"}
              />
    </PopoverTrigger>

    <PopoverContent className="mt-1 text-sm text-red-500">
      CIL y EJE deben ingresarse juntos
    </PopoverContent>
  </Popover>
);
