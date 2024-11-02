import useGetCategoriaReceitas from "@/hooks/categoria_receitas/useGetCategoriaReceitas";
import { deleteAPICategoriaReceita } from "@/utils/api/APICore";
import { CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { MyDataTable } from "@/components/my_data_table/my_data_teble";

export default function CardCategoriaReceitaDatatable() {
    const [data, error] = useGetCategoriaReceitas();

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
                    onDeleteSelected={(i) => {
                        deleteAPICategoriaReceita(i);
                    }}
                />
            </CardContent>
        </div>
    );
}
