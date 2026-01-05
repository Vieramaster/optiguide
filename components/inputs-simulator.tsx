import { GraduationInput } from "./graduation-input";
import { Button } from "./ui/button";
import { GraduationValueType, graduationType } from "@/types/simulator-types";

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
  const { ESF, CIL, EJE } = graduationValue;

  const esf = Number(ESF);
  const cil = Number(CIL);
  const eje = Number(EJE);

  const esfInvalid = esf === 0;
  const cilEjeInvalid = (cil === 0) !== (eje === 0);

  const isDisabled = esfInvalid || cilEjeInvalid;

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
