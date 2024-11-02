import { useState } from "react";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useForm } from "@/hooks/adding_entity/useForm";
import {FieldInput} from "@/components/adding/adding_entity/field_input";
import {FieldSelect} from "@/components/adding/adding_entity/field_select";

interface Field {
    name: string;
    label: string;
    placeholder?: string;
    type?: "text" | "date" | "dropdown" | "number";
    options?: () => Promise<string[]>; // Aceitando função assíncrona
}

interface AddEntityDialogProps {
    title: string;
    description: string;
    fields: Field[];
    onSubmit: (formData: Record<string, string>) => void;
    triggerLabel: string;
}

export default function AddEntityDialog({
    title,
    description,
    fields,
    onSubmit,
    triggerLabel,
}: AddEntityDialogProps) {
    const currentDate = new Date().toISOString().split("T")[0];
    const initialFormData: Record<string, string> = fields.reduce<Record<string, string>>((acc, field) => {
        acc[field.name] = field.type === "date" ? currentDate : "";
        return acc;
    }, {});

    const [open, setOpen] = useState<boolean>(false);
    const { formData, error, handleInputChange, validateFields, resetForm } = useForm(initialFormData);

    const handleAdd = () => {
        if (!validateFields(fields)) return;
        onSubmit(formData);
        resetForm(initialFormData);
        setOpen(false);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="text-xs" onClick={() => setOpen(true)}>
                    {triggerLabel}
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogTitle>{title}</DialogTitle>
                <DialogDescription>{description}</DialogDescription>
                <div className="mt-4">
                    {fields.map((field, index) => (
                        field.type === "dropdown" ? (
                            <FieldSelect
                                key={index}
                                field={field}
                                value={formData[field.name]}
                                onChange={(value) => handleInputChange(field.name, value)}
                                open={open}
                            />
                        ) : (
                            <FieldInput
                                key={index}
                                field={field}
                                value={formData[field.name]}
                                onChange={(value) => handleInputChange(field.name, value)}
                            />
                        )
                    ))}
                    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                </div>
                <DialogFooter>
                    <Button variant="outline" onClick={() => setOpen(false)}>
                        Cancelar
                    </Button>
                    <Button onClick={handleAdd}>Adicionar</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}