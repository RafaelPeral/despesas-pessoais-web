import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ChartContainer } from "@/components/ui/chart";
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import useChartExport from "@/hooks/chart/use_chart_export";
import { type ChartConfig } from "@/components/ui/chart"

interface FormaPagamentoBarChartProps {
  data: any[];
}

const FormaPagamentoBarChart = ({ data }: FormaPagamentoBarChartProps) => {
  const { chartRef, exportChart } = useChartExport();

  // Configurações do gráfico
  const chartConfig: ChartConfig = {
    total:{
      label: "Total",
      color: "#2563eb",
    },
    receita: {
      label: "Receita",
      color: "#82ca9d",
    },
    despesa: {
      label: "Despesa",
      color: "#ff4d4d",
    },
  }
  console.log(data)
  return (
    <CardContent className="p-4">
      <h2 className="text-xl font-semibold mb-4">Gráfico de Receitas e Despesas</h2>
      <div ref={chartRef}>
        <ResponsiveContainer width="100%" height={400}>
          <ChartContainer config={chartConfig}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey='nome' />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Legend />
              <Bar dataKey='total' fill='var(--color-total)' name="Total" />
              <Bar dataKey='receita' fill='var(--color-receita)' name="Receitas" />
              <Bar dataKey='despesa' fill='var(--color-despesa)' name="Despesas" />
            </BarChart>
          </ChartContainer>
        </ResponsiveContainer>
      </div>
      <Button variant="outline" className="mt-4" onClick={exportChart}>
        Exportar Gráfico
      </Button>
    </CardContent>
  );
};

export default FormaPagamentoBarChart;