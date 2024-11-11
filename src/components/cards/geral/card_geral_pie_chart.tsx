import { CardHeader, CardContent, CardDescription } from "@/components/ui/card";
import PieChartComponent from "@/components/charts/pie_chart_component";
import { useGetGeral } from "@/hooks/geral/useGetGeral";

export default function CardGeralPieChart() {
    const [data, error] = useGetGeral();

    if (error.length > 0) {
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

    if (!data.data) {
        return (
            <CardHeader>
                <CardDescription>Nenhum dado encontrado.</CardDescription>
            </CardHeader>
        );
    }

    return (
        <>
            <CardHeader>
                <CardDescription>Despesas e Receitas</CardDescription>
            </CardHeader>
            <CardContent>
                <h2 className="text-xl font-semibold mb-4">Gráfico de Despesas e Receitas</h2>
                <PieChartComponent data={data.data} />
            </CardContent>
        </>
    )
}