import { useEffect, useState } from 'react';
import { CardDescription, CardHeader } from "@/components/ui/card";
import getCategoriaReceitas from "@/hooks/categoria_receitas/get_categoria_receitas";
import CategoriaReceitaBarChart from "@/components/charts/categoria_receita/categoria_receita_bar_chart";
import CategoriaReceitaProps from '@/types/categoria_receita_props';

export default function CardCategoriaReceitaBarChart() {
    const [data, setData] = useState<CategoriaReceitaProps[] | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const repo = await getCategoriaReceitas();
                if (repo && repo.data) {
                    setData(repo.data.data as CategoriaReceitaProps[]);
                } else {
                    setError("Dados não encontrados.");
                }
            } catch (err) {
                console.error("Erro ao buscar categorias de receita:", err);
                setError("Erro ao carregar dados das categorias de receita.");
            }
        };

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
        return (
            <CardHeader>
                <CardDescription>Carregando...</CardDescription>
            </CardHeader>
        );
    }

    if (data.length === 0) {
        return (
            <CardHeader>
                <CardDescription>Nenhum dado encontrado.</CardDescription>
            </CardHeader>
        );
    }

    return (
        <>
            <CardHeader>
                <CardDescription>Categoria de Receita - gráfico de barras</CardDescription>
            </CardHeader>
            <CategoriaReceitaBarChart data={data} />
        </>
    );
}

