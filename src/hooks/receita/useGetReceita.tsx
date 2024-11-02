import { getAPIReceita } from "@/utils/api/APICore";
import { useEffect, useState } from "react";
import ReceitaProps from "@/types/receita_props";

export default function useGetReceita() {
    const [data, setData] = useState<ReceitaProps | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const repo = await getAPIReceita();
                if (repo && repo.data) {
                    setData(repo.data);
                } else {
                    setError("Dados não encontrados.");
                }
            } catch (err) {
                console.error("Erro ao buscar receitas:", err);
                setError("Erro ao carregar dados das receitas.");
            }
        };

        fetchData();
    }, []);

    return [data, error] as const;
}
