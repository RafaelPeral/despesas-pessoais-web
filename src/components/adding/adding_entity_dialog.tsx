import { useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Field {
    name: string;
    label: string;
    placeholder?: string;
}

interface AddEntityDialogProps {
    title: string;
    description: string;
    fields: Field[];
    onSubmit: (formData: Record<string, string>) => void;
    triggerLabel: string;
}

export default function AddEntityDialog({ title, description, fields, onSubmit, triggerLabel }: AddEntityDialogProps) {
    const [open, setOpen] = useState<boolean>(false);
    const [formData, setFormData] = useState<Record<string, string>>({});
    const [error, setError] = useState<string>("");

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        setError("");
    };

    const handleAdd = () => {
        const emptyField = fields.find(field => !formData[field.name]?.trim());
        if (emptyField) {
            setError(`O campo ${emptyField.label} é obrigatório.`);
            return;
        }
        onSubmit(formData);
        setFormData({});
        setOpen(false);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button onClick={() => setOpen(true)}>{triggerLabel}</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogTitle>{title}</DialogTitle>
                <DialogDescription>{description}</DialogDescription>
                <div className="mt-4">
                    {fields.map((field, index) => (
                        <div key={index} className="mt-4">
                            <Label htmlFor={field.name}>{field.label}</Label>
                            <Input
                                id={field.name}
                                value={formData[field.name] || ""}
                                onChange={(e) => handleInputChange(field.name, e.target.value)}
                                placeholder={field.placeholder}
                                className="mt-2"
                            />
                        </div>
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
