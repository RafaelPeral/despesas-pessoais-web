import { useState } from "react";

export function useForm(initialValues: Record<string, string>) {
    const [formData, setFormData] = useState<Record<string, string>>(initialValues);
    const [error, setError] = useState<string>("");

    const handleInputChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        setError("");
    };

    const validateFields = (fields: { name: string; label: string }[]) => {
        const emptyField = fields.find((field) => !formData[field.name]?.trim());
        if (emptyField) {
            setError(`O campo ${emptyField.label} é obrigatório.`);
            return false;
        }
        return true;
    };

    const resetForm = (initialValues: Record<string, string>) => {
        setFormData(initialValues);
        setError("");
    };

    return { formData, error, handleInputChange, validateFields, resetForm };
}