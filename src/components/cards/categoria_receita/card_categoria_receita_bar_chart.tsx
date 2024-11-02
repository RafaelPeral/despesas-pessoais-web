import useGetCategoriaReceitas from "@/hooks/categoria_receitas/useGetCategoriaReceitas";
import { CardDescription, CardHeader } from "@/components/ui/card";
import CategoriaReceitaBarChart from "@/components/charts/categoria_receita/categoria_receita_bar_chart";

export default function CardCategoriaReceitaBarChart() {
    const [data, error] = useGetCategoriaReceitas();

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

