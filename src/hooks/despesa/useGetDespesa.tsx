import { getAPIDespesa } from "@/utils/api/APICore";
import { useEffect, useState } from "react";
import DespesaProps from "@/types/despesa_props";

export default function useGetDespesa() {
    const [data, setData] = useState<DespesaProps | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const repo = await getAPIDespesa();
                if (repo && repo.data) {
                    setData(repo.data);
                } else {
                    setError("Dados não encontrados.");
                }
            } catch (err) {
                console.error("Erro ao buscar despesas:", err);
                setError("Erro ao carregar dados das despesas.");                
            }
        };

        fetchData();
    }, []);

    return [ data, error ] as const;
}