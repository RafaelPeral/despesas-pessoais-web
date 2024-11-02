import { useEffect, useState } from "react";

interface Field {
    name: string;
    label: string;
    placeholder?: string;
    type?: "text" | "date" | "dropdown" | "number";
    options?: () => Promise<string[]>; // Aceitando função assíncrona
}

export function useDropdownOptions(field: Field, open: boolean, uniqueKey: any) {
    const [dropdownOptions, setDropdownOptions] = useState<string[]>([]);

    useEffect(() => {
        let isMounted = true; // variável para evitar atualização do estado se o componente for desmontado

        const loadOptions = async () => {
            if (open && isMounted) {
                const options = (field.options ? await field.options() : []) as string[];
                setDropdownOptions(options);
            }
        };

        loadOptions();

        return () => {
            isMounted = false; // garantir que o estado não será atualizado após desmontagem
        };
    }, [open, field.options, uniqueKey]);

    return dropdownOptions;
}
