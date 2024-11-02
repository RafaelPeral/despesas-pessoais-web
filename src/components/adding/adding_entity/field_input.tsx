import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface FieldInputProps {
    field: { name: string; label: string; placeholder?: string; type?: string };
    value: string;
    onChange: (value: string) => void;
}

export const FieldInput: React.FC<FieldInputProps> = ({ field, value, onChange }) => {
    return (
        <div className="mt-4">
            <Label htmlFor={field.name}>{field.label}</Label>
            <Input
                id={field.name}
                type={field.type || "text"}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={field.placeholder}
                className="mt-2"
            />
        </div>
    );
};