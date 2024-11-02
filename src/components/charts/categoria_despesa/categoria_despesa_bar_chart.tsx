import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { CardContent } from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";
import { ChartTooltipContent } from "@/components/ui/chart";
import useChartExport from "@/hooks/chart/use_chart_export";
import { type ChartConfig } from "@/components/ui/chart"
import { Button } from "@/components/ui/button";

interface CategoriaDespesaBarChartProps {
    data: any[]
}

const CategoriaDespesaBarChart = ({ data }: CategoriaDespesaBarChartProps) => {
    const { chartRef, exportChart } = useChartExport();

    const chartConfig: ChartConfig = {
        despesa: {
            label: "Despesa",
            color: "#ff4d4d",
        },
    };

    return (
        <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-4">Gráfico de Categorias</h2>
            <div ref={chartRef}>
                <ResponsiveContainer width="100%" height={400}>
                    <ChartContainer config={chartConfig}>
                        <BarChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey='name' />
                            <YAxis />
                            <Tooltip content={<ChartTooltipContent />} />
                            <Legend />
                            <Bar dataKey='despesa' fill={chartConfig.despesa.color} name="Despesa" />
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

export default CategoriaDespesaBarChart