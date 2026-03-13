//VALIDATIONS
import { validateGraduationInputs } from "../validations/validate-graduation-inputs";
//COMPONENTS
import { Button } from "@/components/ui/button";
import { GraduationInput } from "./graduation-input";
//TYPES
import { GraduationKey, GraduationObject} from "../types/simulator";

interface InputsSimulatorProps {
  graduationKeys: GraduationKey[];
  graduationValue: GraduationObject;
  onChangevalues: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickGraduation: () => void;
}

export const InputsSimulator = ({
  graduationKeys,
  graduationValue,
  onChangevalues,
  onClickGraduation,

}: InputsSimulatorProps) => {
  const isDisabled = !validateGraduationInputs(graduationValue);

  return (
    <div className="flex flex-wrap gap-2  lg:flex-row  lg:gap-4 justify-center items-center ">


      {graduationKeys.map((key) => (
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
