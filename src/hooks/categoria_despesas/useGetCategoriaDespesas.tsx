import { getAPICategoriaDespesa } from "@/utils/api/APICore"
import { useEffect, useState } from "react"
import CategoriaDespesaProps from "@/types/categoria_despesa_props"

export default function useGetCategoriaDespesas() {
    const [data, setData] = useState<CategoriaDespesaProps[] | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const repo = await getAPICategoriaDespesa();
                if (repo && repo.data) {
                    setData(repo.data.data as CategoriaDespesaProps[]);
                } else {
                    setError("Dados não encontrados.");
                }
            } catch (err) {
                console.error("Erro ao buscar categorias de despesa:", err);
                setError("Erro ao carregar dados das categorias de despesa.");
            }
        };
        fetchData();
    }, []);

    return [ data, error ] as const;
}