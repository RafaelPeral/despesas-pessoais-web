import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useDropdownOptions } from "@/hooks/adding_entity/useDropdownOptions";

interface FieldSelectProps {
    key: any;
    field: {
        name: string;
        label: string;
        placeholder?: string;
        type?: "text" | "date" | "dropdown" | "number";
        options?: () => Promise<string[]>;
    };
    value: string;
    onChange: (value: string) => void;
    open: boolean;
}




export const FieldSelect: React.FC<FieldSelectProps> = ({ key, field, value, onChange, open }) => {
    const dropdownOptions = useDropdownOptions(field, open, key);
    
    return (
        <div className="mt-4">
            <Label htmlFor={field.name}>{field.label}</Label>
            <Select value={value || ""} onValueChange={onChange}>
                <SelectTrigger id={field.name}>
                    {value || field.placeholder || "Selecione uma opção"}
                </SelectTrigger>
                <SelectContent>
                    {dropdownOptions.map((option) => (
                        <SelectItem key={option} value={option}>
                            {option}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
};