import { getdata } from "@/hooks/forma_pagamento/datatable";
import { MyDataTable } from "@/components/my_data_table/my_data_teble";
import { CardHeader, CardContent, CardDescription } from "@/components/ui/card";

export default function FormaPagamentoTable() {
    const data = getdata().data.data;

    return (
        <>
            <CardHeader>
                <CardDescription>Forma de Pagamento</CardDescription>
            </CardHeader>
            <CardContent>
                <MyDataTable
                    columns={["id", "nome", "receita", "despesa", "total"]}
                    data={data}
                    onDeleteSelected={(deletedItems) => {
                        deletedItems.forEach(item => console.log(`Deleted: ${item.nome}`));
                    }}
                />
            </CardContent>
        </>
    );
}
