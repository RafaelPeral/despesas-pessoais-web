import { useEffect, useState } from "react";
import getCategoriaDespesas from "@/hooks/categoria_despesas/get_categoria_despesas";
import { CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { MyDataTable } from "@/components/my_data_table/my_data_teble";
import CategoriaDespesaProps from '@/types/categoria_despesa_props';

export default function CardCategoriaDespesaDatatable() {
    const [data, setData] = useState<CategoriaDespesaProps[] | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const repo = await getCategoriaDespesas();  
                if (repo && repo.data) {
                    setData(repo.data.data as CategoriaDespesaProps[]);
                } else {
                    setError("Dados nao encontrados");
                }
            } catch (err) {
                console.error("Erro ao buscar categorias de despesa:", err);
                setError("Erro ao carregar dados das categorias de despesa");
            }
        }

        fetchData();
    }, []);

    if (error) {
        return (
            <div>
                <CardHeader>    
                    <CardDescription>{error}</CardDescription>
                </CardHeader>
            </div>
        );
    }

    if (!data) {
        return (
            <div>
                <CardHeader>
                    <CardDescription>Carregando...</CardDescription>
                </CardHeader>
            </div>
        );
    }

    if (data.length === 0) {
        return (
            <div>
                <CardHeader>
                    <CardDescription>Nenhuma categoria de despesa encontrada</CardDescription>
                </CardHeader>
            </div>
        );
    }

    return (
        <>
            <CardHeader>
                <CardDescription>Categoria de Despesa</CardDescription>
            </CardHeader>
            <CardContent>
                <MyDataTable
                    columns={["id", "name", "despesa"]}
                    data={data}
                    onDeleteSelected={(deletedItems) => {
                        deletedItems.forEach(item => console.log(`Deleted: ${item.name}`));
                    }}
                />
            </CardContent>
        </>
    );
}
