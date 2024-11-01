import { useEffect, useState } from 'react';
import getCategoriaReceitas from "@/hooks/categoria_receitas/get_categoria_receitas";
import { CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { MyDataTable } from "@/components/my_data_table/my_data_teble";
import CategoriaReceitaProps from '@/types/categoria_receita_props';

export default function CardCategoriaReceitaDatatable() {
    const [data, setData] = useState<CategoriaReceitaProps[] | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const repo = await getCategoriaReceitas();
                if (repo && repo.data) {
                    setData(repo.data.data as CategoriaReceitaProps[]);
                } else {
                    setError("Dados não encontrados.");
                }
            } catch (err) {
                console.error("Erro ao buscar categorias de receita:", err);
                setError("Erro ao carregar dados das categorias de receita.");
            }
        };

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
                    <CardDescription>Nenhuma categoria de receita encontrada.</CardDescription>
                </CardHeader>
            </div>
        );
    }

    return (
        <div>
            <CardHeader>
                <CardDescription>Categoria de Receita</CardDescription>
            </CardHeader>
            <CardContent>
                <MyDataTable    
                    columns={["id", "name", "receita"]}
                    data={data}
                    onDeleteSelected={(deletedItems) => {
                        deletedItems.forEach(item => console.log(`Deleted: ${item.name}`));
                    }}
                />
            </CardContent>
        </div>
    );
}
