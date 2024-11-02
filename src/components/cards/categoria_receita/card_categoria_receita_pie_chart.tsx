import useGetCategoriaReceitas from "@/hooks/categoria_receitas/useGetCategoriaReceitas";
import PieChartComponent from "@/components/charts/pie_chart_component";
import { CardHeader, CardDescription, CardContent } from "@/components/ui/card";

export default function CardCategoriaReceitaPieChart() {
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

    const formattedData = data.map(item => ({
        name: item.name,
        value: item.receita
    }));

    return (
        <>
            <CardHeader>
                <CardDescription>Categorias de Receitas</CardDescription>
            </CardHeader>
            <CardContent>
                <PieChartComponent data={formattedData} />
            </CardContent>
        </>
    )
    }