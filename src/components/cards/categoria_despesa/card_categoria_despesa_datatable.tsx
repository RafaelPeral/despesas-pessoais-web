import getCategoriaDespesas from "@/hooks/categoria_despesas/get_categoria_despesas";
import { CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { MyDataTable } from "@/components/my_data_table/my_data_teble";

export default function CardCategoriaDespesaDatatable() {
    const data = getCategoriaDespesas().data.data;

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