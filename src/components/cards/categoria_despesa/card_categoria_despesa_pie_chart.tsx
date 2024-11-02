import useGetCategoriaDespesas from "@/hooks/categoria_despesas/useGetCategoriaDespesas";
import PieChartComponent from "@/components/charts/pie_chart_component";
import { CardHeader, CardDescription, CardContent } from "@/components/ui/card";


export default function CardCategoriaDespesaPieChart() {
    const [data, error] = useGetCategoriaDespesas();

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
        value: item.despesa
    }));

    return (
        <>
            <CardHeader>
                <CardDescription>Despesas por categoria</CardDescription>
            </CardHeader>
            <CardContent>
                <PieChartComponent data={formattedData} />
            </CardContent>
        </>
    );
}