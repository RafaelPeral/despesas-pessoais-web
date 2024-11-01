import AddEntityDialog from "./adding_entity_dialog";

type FormData = Record<string, string>;

export default function AddCategoriaReceita(): JSX.Element {
    const handleAddCategoriaReceita = (data: FormData): void => {
        console.log("Categoria de receita adicionada:", data);
    };

    return (
        <AddEntityDialog
            title="Adicionar Categoria de Receita"
            description="Insira o nome da nova categoria de receita."
            fields={[
                { name: "categoriaReceita", label: "Nome da Categoria de Receita", placeholder: "Digite o nome" }
            ]}
            onSubmit={handleAddCategoriaReceita}
            triggerLabel="Adicionar Categoria de Receita"
        />
    );
}


