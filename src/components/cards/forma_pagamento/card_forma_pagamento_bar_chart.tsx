import { getFormaPagamento } from "@/hooks/forma_pagamento/get_forma_pagamento";
import { CardHeader, CardDescription } from "@/components/ui/card";
import FormaPagamentoBarChart from "@/components/charts/forma_pagamento/forma_pagamento_bar_chart";

export default function CardFormaPagamentoBarChart() {
    const data = getFormaPagamento().data.data;
    
    return (
        <>
            <CardHeader>
                <CardDescription>Forma de Pagamento - grafico de barras</CardDescription>
            </CardHeader>
            <FormaPagamentoBarChart data={data} />
        </>
    );
}