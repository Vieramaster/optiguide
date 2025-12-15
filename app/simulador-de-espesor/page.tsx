"use client"
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-dropdown-menu"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

const ThicknessSimulator = () => {

    const [values, setValues] = useState({ ESF: 0, CIL: 0, EJE: 0 });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleChange = (name: "ESF" | "CIL" | "EJE") =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const val = parseFloat(e.target.value);

            if (name === "EJE" && val < 0 || val > 180) {
                setErrors(prev => ({ ...prev, [name]: "El eje debe estar entre 0 y 180" }));

            } else {
                if (val < -14 || val > 14 || val % 0.25) {
                    setErrors(prev => ({ ...prev, [name]: "La graduación debe estar entre -14 y 14 y ser múltiplo de 0.25" }));

                }
            };
            return (
                <section className="w-full h-full ">
                    <fieldset className=" w-full h-28 flex flex-col justify-center items-center gap-4 font-semibold">
                        <label>Introduzca aqui la graduación:</label>
                        <form className="flex gap-8 ">
                            <GraduationInput name="ESF"
                                value={values.ESF}
                                onChange={handleChange("ESF")} />
                            <GraduationInput name="CIL" value={values.CIL}
                                onChange={handleChange("CIL")} />
                            <GraduationInput name="EJE" value={values.EJE}
                                onChange={handleChange("EJE")} />
                            <Button disabled={Object.values(errors).some(error => error !== "")} className="self-end mb-2" type="submit">Calcular</Button>
                        </form>

                    </fieldset>


                </section>

            )

        }

    export default ThicknessSimulator

    export const ErrorInput = ({ message }: { message: string }) => {
        return (
            <p className="text-sm text-red-500 mt-1">{message}</p>
        )
    }


    type GraduationInputProps = {
        name: "ESF" | "CIL" | "EJE";
        value: number;
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    };

    export const GraduationInput = ({ name, value, onChange }: GraduationInputProps) => {
        const isEje = name === "EJE";
        return (
            <div className="text-center">
                <Label className="mb-1">{name}:</Label>
                <Input
                    type="number"
                    step={isEje ? 0 : 0.25}
                    min={isEje ? 0 : -14}
                    max={isEje ? 180 : 14}
                    value={value}
                    onChange={onChange}
                    className="w-18 bg-primary-foreground"
                />
            </div>
        );
    };
