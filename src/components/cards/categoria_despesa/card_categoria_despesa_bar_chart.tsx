import { CardDescription, CardHeader } from "@/components/ui/card";
import getCategoriaDespesas from "@/hooks/categoria_despesas/get_categoria_despesas";
import CategoriaDespesaBarChart from "@/components/charts/categoria_despesa/categoria_despesa_bar_chart";
import { useState, useEffect } from "react";
import CategoriaDespesaProps from '@/types/categoria_despesa_props';

export default function CardCategoriaDespesaBarChart() {
    const [data, setData] = useState<CategoriaDespesaProps[] | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const repo = await getCategoriaDespesas();
                if (repo && repo.data) {
                    setData(repo.data.data as CategoriaDespesaProps[]);
                } else {
                    setError("Dados não encontrados");
                }
            } catch (err) {
                console.error("Erro ao buscar categorias de despesa:", err);
                setError("Erro ao carregar dados das categorias de despesa");
            }
        }

        fetchData();
    }, []);

    if (error) {
        return (
            <CardHeader>
                <CardDescription>{error}</CardDescription>
            </CardHeader>
        );
    }

    if (!data) {
        return(
            <CardHeader>
                <CardDescription>Carregando...</CardDescription>
            </CardHeader>
        )
    }

    if (!data.length) {
        return(
            <CardHeader>
                <CardDescription>Não foram encontradas categorias de despesa</CardDescription>
            </CardHeader>
        )
    }
    
    return (
        <>
            <CardHeader>
                <CardDescription>Categoria de Despesa - grafico de barras</CardDescription>
            </CardHeader>
            <CategoriaDespesaBarChart data={data} />
        </>
    );
}
