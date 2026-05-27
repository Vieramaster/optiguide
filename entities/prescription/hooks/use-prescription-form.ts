import { useState } from "react";

import type {
    PrescriptionBaseValues,
    PrescriptionFullValues,
} from "../types/types";
import {
    parseBasePrescription,
    parseFullPrescription,
} from "../logic/parse";
import { evaluatePrescriptionRules } from "../rules";
import type { PrescriptionFormConfig } from "../types/model/rules";

export const usePrescriptionForm = (config: PrescriptionFormConfig) => {
    const [errors, setErrors] = useState<string[]>([]);
    const [submittedValues, setSubmittedValues] = useState<
        PrescriptionBaseValues | PrescriptionFullValues | null
    >(null);

    const handleSubmitForm: React.SubmitEventHandler<HTMLFormElement> = (event) => {
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
            setSubmittedValues(values);
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
        setSubmittedValues(values);
        config.onSubmit(values);
    };

    return {
        errors,
        submittedValues,
        handleSubmitForm,
    };
};