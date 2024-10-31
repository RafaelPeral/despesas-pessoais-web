import getCategoriaReceitas from "@/hooks/categoria_receitas/get_categoria_receitas";
import { CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { MyDataTable } from "@/components/my_data_table/my_data_teble";

export default function CategoriaReceitaDatatable() {
    const data = getCategoriaReceitas().data.data;

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