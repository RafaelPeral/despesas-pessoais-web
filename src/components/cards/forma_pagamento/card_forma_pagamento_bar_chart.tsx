import getFormaPagamento from "@/hooks/forma_pagamento/useGetFormaPagamento";
import { CardHeader, CardDescription } from "@/components/ui/card";
import FormaPagamentoBarChart from "@/components/charts/forma_pagamento/forma_pagamento_bar_chart";
import { useEffect, useState } from "react";
import FormaPagamentoProps from "@/types/forma_pagamento_props";

export default function CardFormaPagamentoBarChart() {
    const [data, setData] = useState<FormaPagamentoProps[] | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {        
        const fetchData = async () => {
            try {
                const repo = await getFormaPagamento();
                if (repo && repo.data) {
                    setData(repo.data.data as FormaPagamentoProps[]);
                } else {
                    setError("Dados não encontrados.");
                }
            } catch (err) {
                console.error("Erro ao buscar formas de pagamento:", err);
                setError("Erro ao carregar dados das formas de pagamento.");
            }
        };
        fetchData();
    }, []);

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