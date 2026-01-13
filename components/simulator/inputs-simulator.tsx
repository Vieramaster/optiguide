import { GraduationInput } from "./graduation-input";
import { Button } from "../ui/button";
import { GraduationValueType, graduationType } from "@/types/simulator-types";
import { validateGraduationInputs } from "@/lib/validation/graduation-validation";

interface InputsSimulatorProps {
  GraduationKeys: graduationType[];
  graduationValue: GraduationValueType;
  onChangevalues: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickGraduation: () => void;
}

export const InputsSimulator = ({
  GraduationKeys,
  graduationValue,
  onChangevalues,
  onClickGraduation,

}: InputsSimulatorProps) => {
  const isDisabled = !validateGraduationInputs(graduationValue);

  return (
<div className="flex flex-wrap gap-2  lg:flex-row  lg:gap-4 justify-center items-center ">


      {GraduationKeys.map((key) => (
        <GraduationInput
          key={key}
          name={key}
          maxLength={5}
          value={graduationValue[key]}
          onChange={onChangevalues}
        />
      ))}
      <div className=""></div>
      <Button
        onClick={onClickGraduation}
        type="button"
        className=" place-self-end lg:self-end "
        disabled={isDisabled}
      >
        Calcular
      </Button>

    </div>
    
  );
};
