import useGetReceita from "@/hooks/receita/useGetReceita";
import useGetDespesa from "@/hooks/despesa/useGetDespesa";
import { CardHeader, CardContent, CardDescription } from "@/components/ui/card";
import { PieChartComponent } from "@/components/charts/pie_chart";

export default function CardGeralPieChart() {

    return (
        <>
            <CardHeader>
                <CardDescription>Despesas e Receitas</CardDescription>
            </CardHeader>
            <CardContent>
            </CardContent>
        </>
    )
}