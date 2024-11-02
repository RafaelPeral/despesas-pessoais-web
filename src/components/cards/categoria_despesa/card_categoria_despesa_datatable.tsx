import useGetCategoriaDespesa from "@/hooks/categoria_despesas/useGetCategoriaDespesas";
import { deleteAPICategoriaDespesa } from "@/utils/api/APICore";
import { CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { MyDataTable } from "@/components/my_data_table/my_data_teble";
export default function CardCategoriaDespesaDatatable() {
    const [data, error] = useGetCategoriaDespesa();

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
                    onDeleteSelected={(i) => {
                        deleteAPICategoriaDespesa(i)
                    }}
                />
            </CardContent>
        </>
    );
}
