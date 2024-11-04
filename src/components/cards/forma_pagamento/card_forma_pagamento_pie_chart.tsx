import useGetFormaPagamento from "@/hooks/forma_pagamento/useGetFormaPagamento";
import PieChartComponent from "@/components/charts/pie_chart_component";
import { CardHeader, CardContent, CardDescription } from "@/components/ui/card";

export default function CardFormaPagamentoPieChart() {
    const [data, error] = useGetFormaPagamento();

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
                <CardDescription>Nenhum dado encontrado</CardDescription>
            </CardHeader>
        );
    }

    const formattedData = data.map(item => ({
        name: item.name,
        value: item.total
    }));

    return (
        <>
            <CardHeader>
                <CardDescription>Formas de pagamento</CardDescription>
            </CardHeader>
            <CardContent>
                <h2 className="text-xl font-semibold mb-4">Gráfico de Formas de Pagamento</h2>
                <PieChartComponent data={formattedData} />
            </CardContent>
        </>
    )
}