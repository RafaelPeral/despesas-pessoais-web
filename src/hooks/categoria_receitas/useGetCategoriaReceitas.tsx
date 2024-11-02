import { getAPICategoriaReceita } from "@/utils/api/APICore";
import { useEffect, useState } from "react";
import CategoriaReceitaProps from "@/types/categoria_receita_props";

export default function useGetCategoriaReceitas() {
    const [data, setData] = useState<CategoriaReceitaProps[] | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {    
        const fetchData = async () => {
            try {
                const repo = await getAPICategoriaReceita();
                if (repo && repo.data) {
                    setData(repo.data.data as CategoriaReceitaProps[]);
                } else {
                    setError("Dados não encontrados.");
                }            
            } catch (err) {
                console.error("Erro ao buscar categorias de receita:", err);
                setError("Erro ao carregar dados das categorias de receita.");
            }
        };

        fetchData();
    }, []);

    return [ data, error ] as const;
}