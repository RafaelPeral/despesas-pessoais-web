import { CardHeader, CardDescription } from "@/components/ui/card";
import FormaPagamentoBarChart from "@/components/charts/forma_pagamento/forma_pagamento_bar_chart";
import useGetFormaPagamento from "@/hooks/forma_pagamento/useGetFormaPagamento";

export default function CardFormaPagamentoBarChart() {
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
    
    return (
        <>
            <CardHeader>
                <CardDescription>Forma de Pagamento - grafico de barras</CardDescription>
            </CardHeader>
            <FormaPagamentoBarChart data={data} />
        </>
    );
}