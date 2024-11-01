import getFormaPagamento from "@/hooks/forma_pagamento/get_forma_pagamento";
import { MyDataTable } from "@/components/my_data_table/my_data_teble";
import { CardHeader, CardContent, CardDescription } from "@/components/ui/card";
import FormaPagamentoProps from "@/types/forma_pagamento_props";
import { useEffect, useState } from "react";

export default function CardFormaPagamentoDatatable() {
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
                <CardDescription>Nenhum dado encontrado.</CardDescription>
            </CardHeader>
        );
    }


    return (
        <>
            <CardHeader>
                <CardDescription>Forma de Pagamento</CardDescription>
            </CardHeader>
            <CardContent>
                <MyDataTable
                    columns={["id", "name", "receita", "despesa", "total"]}
                    data={data}
                    onDeleteSelected={(deletedItems) => {
                        deletedItems.forEach(item => console.log(`Deleted: ${item.name}`));
                    }}
                />
            </CardContent>
        </>
    );
}
