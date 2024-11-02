import AddEntityDialog from "./adding_entity/adding_entity_dialog";
import { addAPICategoriaReceita } from "@/utils/api/APICore";

type FormData = Record<string, string>;

export default function AddCategoriaReceita(): JSX.Element {
    const handleAddCategoriaReceita = (data: FormData): void => {
        addAPICategoriaReceita(data)
    };

    return (
        <AddEntityDialog
            title="Adicionar Categoria de Receita"
            description="Insira o nome da nova categoria de receita."
            fields={[
                { name: "name", label: "Nome da Categoria de Receita", placeholder: "Digite o nome" }
            ]}
            onSubmit={handleAddCategoriaReceita}
            triggerLabel="Adicionar Categoria de Receita"
        />
    );
}


