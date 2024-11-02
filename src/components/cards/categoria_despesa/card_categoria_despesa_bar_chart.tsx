import { CardDescription, CardHeader } from "@/components/ui/card";
import CategoriaDespesaBarChart from "@/components/charts/categoria_despesa/categoria_despesa_bar_chart";
import useGetCategoriaDespesas from "@/hooks/categoria_despesas/useGetCategoriaDespesas";

export default function CardCategoriaDespesaBarChart() {
    const [data, error] = useGetCategoriaDespesas();

    if (error) {
        return (
            <CardHeader>
                <CardDescription>{error}</CardDescription>
            </CardHeader>
        );
    }

    if (!data) {
        return(
            <CardHeader>
                <CardDescription>Carregando...</CardDescription>
            </CardHeader>
        )
    }

    if (!data.length) {
        return(
            <CardHeader>
                <CardDescription>Não foram encontradas categorias de despesa</CardDescription>
            </CardHeader>
        )
    }
    
    return (
        <>
            <CardHeader>
                <CardDescription>Categoria de Despesa - grafico de barras</CardDescription>
            </CardHeader>
            <CategoriaDespesaBarChart data={data} />
        </>
    );
}
