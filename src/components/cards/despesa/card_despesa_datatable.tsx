import useGetDespesa from "@/hooks/despesa/useGetDespesa";
import { deleteAPIDespesa } from "@/utils/api/APICore";
import { MyDataTable } from "@/components/my_data_table/my_data_teble";
import { CardContent, CardDescription, CardHeader } from "@/components/ui/card";

export default function CardDespesaDatatable() {
    const [data, error] = useGetDespesa();

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
                <CardDescription>Nenhuma despesa encontrada.</CardDescription>
            </CardHeader>
        );
    }

    return (
        <>
            <CardHeader>
                <CardDescription>Despesas</CardDescription>
            </CardHeader>
            <CardContent>
                <MyDataTable
                    columns={["id", "categoria", "name", "valor", "date", "forma_pagamento_name"]}
                    data={data}
                    onDeleteSelected={(i) => deleteAPIDespesa(i)}
                />
            </CardContent>
        </>
    )
}