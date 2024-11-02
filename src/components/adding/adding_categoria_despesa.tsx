import AddEntityDialog from "./adding_entity/adding_entity_dialog";
import { addAPICategoriaDespesa } from "@/utils/api/APICore";

type FormData = Record<string, string>;

export default function AddCategoriaDespesa(): JSX.Element {
    const handleAddCategoriaDespesa = (data: FormData): void => {
        addAPICategoriaDespesa(data)
    };

    return (
        <AddEntityDialog
            title="Adicionar Categoria de Despesa"
            description="Insira o nome da nova categoria de despesa."
            fields={[
                { name: "name", label: "Nome da Categoria de Despesa", placeholder: "Digite o nome" }
            ]}
            onSubmit={handleAddCategoriaDespesa}
            triggerLabel="Adicionar Categoria de Despesa"
        />
    );
}


