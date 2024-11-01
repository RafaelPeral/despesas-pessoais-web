import { CardDescription, CardHeader } from "@/components/ui/card";
import getCategoriaReceitas from "@/hooks/categoria_receitas/get_categoria_receitas";
import CategoriaReceitaBarChart from "@/components/charts/categoria_receita/categoria_receita_bar_chart";

export default function CardCategoriaReceitaBarChart() {
    const data = getCategoriaReceitas().data.data;
    return (
        <>
            <CardHeader>
                <CardDescription>Categoria de Receita - grafico de barras</CardDescription>
            </CardHeader>
            <CategoriaReceitaBarChart data={data} />
        </>
    );
}