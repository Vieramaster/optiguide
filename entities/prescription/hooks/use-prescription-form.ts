import { useState } from "react";

import {
    parseBasePrescription,
    parseFullPrescription,
} from "../logic/parse";
import { evaluatePrescriptionRules } from "../logic/evaluate-prescription-rules";
import type { PrescriptionFormConfig } from "../types/prescription-form-config";

export const usePrescriptionForm = (config: PrescriptionFormConfig) => {
    const [errors, setErrors] = useState<string[]>([]);


    const handleSubmit: React.SubmitEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        if (config.mode === "base") {
            const values = parseBasePrescription(formData);

            const validationErrors = evaluatePrescriptionRules({
                mode: "base",
                values,
            });

            if (validationErrors.length > 0) {
                setErrors(validationErrors);
                return;
            }

            setErrors([]);

            config.onSubmit(values);

            return;
        }

        const values = parseFullPrescription(formData);

        const validationErrors = evaluatePrescriptionRules({
            mode: "full",
            values,
        });

        if (validationErrors.length > 0) {
            setErrors(validationErrors);
            return;
        }

        setErrors([]);

        config.onSubmit(values);
    };

    return {
        errors,
        handleSubmit,
    };
};