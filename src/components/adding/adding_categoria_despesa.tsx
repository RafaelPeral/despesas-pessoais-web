import AddEntityDialog from "./adding_entity_dialog";

type FormData = Record<string, string>;

export default function AddCategoriaDespesa(): JSX.Element {
    const handleAddCategoriaDespesa = (data: FormData): void => {
        console.log("Categoria de despesa adicionada:", data);
    };

    return (
        <AddEntityDialog
            title="Adicionar Categoria de Despesa"
            description="Insira o nome da nova categoria de despesa."
            fields={[
                { name: "categoriaDespesa", label: "Nome da Categoria de Despesa", placeholder: "Digite o nome" }
            ]}
            onSubmit={handleAddCategoriaDespesa}
            triggerLabel="Adicionar Categoria de Despesa"
        />
    );
}


