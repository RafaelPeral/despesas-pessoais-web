import getReceita from "@/hooks/receita/get_receita";
import { MyDataTable } from "@/components/my_data_table/my_data_teble";
import { CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import ReceitaProps from "@/types/receita_props";
import { useEffect, useState } from "react";

export default function CardReceitaDatatable() {
    const [data, setData] = useState<ReceitaProps[] | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const repo = await getReceita();
                if (repo && repo.data) {
                    setData(repo.data.data as ReceitaProps[]);
                } else {
                    setError("Dados não encontrados.");
                }
            } catch (err) {
                console.error("Erro ao buscar receitas:", err);
                setError("Erro ao carregar dados das receitas.");
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
                    data={data} 
                />
            </CardContent>
        </>
    )
}