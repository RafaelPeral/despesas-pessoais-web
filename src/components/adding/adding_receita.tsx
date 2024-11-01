import AddEntityDialog from "./adding_entity_dialog";

type FormData = Record<string, string>;

export default function AddReceita() {
    const handleAddReceita = (data: FormData): void => {
        console.log("Receita adicionada:", data);
    };

    return (
        <AddEntityDialog
            title="Adicionar Receita"
            description="Insira os detalhes da nova receita."
            fields={[
                { name: "categoria", label: "Categoria", placeholder: "Digite a categoria" },
                { name: "name", label: "Nome", placeholder: "Digite o nome" },
                { name: "date", label: "Data", placeholder: "Digite a data" },
                { name: "formaPagamento", label: "Forma de Pagamento", placeholder: "Digite a forma de pagamento" },
                { name: "valor", label: "Valor", placeholder: "Digite o valor" }
            ]}
            onSubmit={handleAddReceita}
            triggerLabel="Adicionar Receita"
        />
    );
}
