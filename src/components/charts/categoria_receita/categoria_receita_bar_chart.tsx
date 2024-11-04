import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { CardContent } from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import useChartExport from "@/hooks/chart/use_chart_export";
import { type ChartConfig } from "@/components/ui/chart"
import { Button } from "@/components/ui/button";

interface CategoriaReceitaBarChartProps {
    data: any[];
}

const CategoriaReceitaBarChart = ({ data }: CategoriaReceitaBarChartProps) => {
    const { chartRef, exportChart } = useChartExport();

    const chartConfig: ChartConfig = {
        rceita: {
            label: "Receita",
            color: "#82ca9d",
        },
    }

    return (
        <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-4">Gráfico de Categorias de Receitas</h2>
            <div ref={chartRef}>
                <ResponsiveContainer width="100%" height={400}>
                    <ChartContainer config={chartConfig}>
                        <BarChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey='name' />
                            <YAxis />
                            <ChartTooltip content={<ChartTooltipContent />} />
                            <Legend />
                            <Bar dataKey='receita' fill={chartConfig.rceita.color} name="Receita" />
                        </BarChart>
                    </ChartContainer>
                </ResponsiveContainer>
            </div>
            <Button variant="outline" className="mt-4" onClick={exportChart}>
                Exportar Gráfico
            </Button>
        </CardContent>
    );
}

export default CategoriaReceitaBarChart