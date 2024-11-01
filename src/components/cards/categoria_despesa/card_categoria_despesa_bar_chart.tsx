import { CardDescription, CardHeader } from "@/components/ui/card";
import getCategoriaDespesas from "@/hooks/categoria_despesas/get_categoria_despesas";
import CategoriaDespesaBarChart from "@/components/charts/categoria_despesa/categoria_despesa_bar_chart";


export default function CardCategoriaDespesaBarChart() {
    const data = getCategoriaDespesas().data.data;
    return (
        <>
            <CardHeader>
                <CardDescription>Categoria de Despesa - grafico de barras</CardDescription>
            </CardHeader>
            <CategoriaDespesaBarChart data={data} />
        </>
    );
}