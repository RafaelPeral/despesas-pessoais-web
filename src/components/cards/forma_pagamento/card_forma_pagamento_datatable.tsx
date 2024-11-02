import useGetFormaPagamento from "@/hooks/forma_pagamento/useGetFormaPagamento";
import { MyDataTable } from "@/components/my_data_table/my_data_teble";
import { CardHeader, CardContent, CardDescription } from "@/components/ui/card";
import { deleteAPIFormaPagamento } from "@/utils/api/APICore";

export default function CardFormaPagamentoDatatable() {
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
                    onDeleteSelected={(i) => {
                        deleteAPIFormaPagamento(i);
                    }}
                />
            </CardContent>
        </>
    );
}
