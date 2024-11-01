import getDespesa from "@/hooks/despesa/get_despesa";
import { MyDataTable } from "@/components/my_data_table/my_data_teble";
import { CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import DespesaProps from "@/types/despesa_props";
import { useEffect, useState } from "react";

export default function CardDespesaDatatable() {
    const [data, setData] = useState<DespesaProps[] | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const repo = await getDespesa();
                if (repo && repo.data) {
                    setData(repo.data.data as DespesaProps[]);
                } else {
                    setError("Dados não encontrados.");
                }
            } catch (err) {
                console.error("Erro ao buscar despesas:", err);
                setError("Erro ao carregar dados das despesas.");
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

                />
            </CardContent>
        </>
    )
}