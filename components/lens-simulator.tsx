import ThicknessSimulator from "@/lala";
import { SelectSimulator } from "./select-simulator";
import { GraduationValueType } from "@/types/simulator-types";
import { calculateThickness } from "@/lib/calculateThickness";

interface LensSimulatorProps {
    graduationValues: GraduationValueType;
}
export const LensSimulator = ({ graduationValues }: LensSimulatorProps) => {

    const handleValueSelect = (value: string) => {

        const index = parseFloat(value);
        console.log(
            calculateThickness({
                sphere: parseFloat(graduationValues.ESF) ?? 0,
                cylinder: parseFloat(graduationValues.CIL) ?? 0,
                diameter: parseFloat(graduationValues.DIAM) ?? 20,
                index: index ?? 1.5,
            })
        );
    }

    return (
        <div className="h-96 w-1/2 bg-violet-800 flex flex-col gap-8 justify-center items-center">  <SelectSimulator onValueSelect={handleValueSelect} />
        </div>
    );
}