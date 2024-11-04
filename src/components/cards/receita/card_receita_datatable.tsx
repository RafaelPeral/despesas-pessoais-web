import useGetReceita from "@/hooks/receita/useGetReceita";
import { MyDataTable } from "@/components/my_data_table/my_data_teble";
import { CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { deleteAPIReceita } from "@/utils/api/APICore";


export default function CardReceitaDatatable() {
    const [data, error ] = useGetReceita();

    if (error) {
        return (
            <CardHeader>
                <CardDescription>{error}</CardDescription>
            </CardHeader>
        );
    }

    if (!data){
        return (
            <CardHeader>    
                <CardDescription>Carregando...</CardDescription>
            </CardHeader>
        );
    }

    if (!data.data) {
        return (
            <CardHeader>
                <CardDescription>Nenhuma receita encontrada.</CardDescription>
            </CardHeader>
        );
    }
    
    return (
        <>
            <CardHeader>
                <CardDescription>Receitas</CardDescription>
            </CardHeader>
            <CardContent>
                <MyDataTable 
                    columns={["id", "categoria", "name", "valor", "date", "forma_pagamento_name"]}
                    data={data.data} 
                    onDeleteSelected={( i ) => {
                        deleteAPIReceita(i)
                    }}
                />
            </CardContent>
        </>
    )
}