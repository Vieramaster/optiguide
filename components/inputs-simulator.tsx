import { GraduationInput } from "./graduation-input";
import { Button } from "./ui/button";
import { GraduationValueType,graduationType } from "@/types/simulator-types";

interface InputsSimulatorProps {
    GraduationKeys: graduationType[];
    graduationValue: GraduationValueType
    onChangevalues: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClickGraduation: () => void;
}

export const InputsSimulator = ({ GraduationKeys, graduationValue, onChangevalues, onClickGraduation }: InputsSimulatorProps) => {

    return (
        <div className="bg-violet-500 flex flex-wrap gap-8 justify-center p-6 rounded">
            {GraduationKeys.map((key) => (
                <GraduationInput
                    key={key}
                    name={key}
                    maxLength={5}
                    value={graduationValue[key]}
                    onChange={onChangevalues}
                />
            ))}

            <Button
                onClick={onClickGraduation}
                type="button"
                className="self-end mb-2"
            >
                Calcular
            </Button>
        </div>
    )
}