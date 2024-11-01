import AddEntityDialog from "./adding_entity_dialog";

type FormData = Record<string, string>;

export default function AddDespesa() {
    const handleAddDespesa = (data: FormData): void => {
        console.log("Despesa adicionada:", data);
    };

    return (
        <AddEntityDialog
            title="Adicionar Despesa"
            description="Insira os detalhes da nova despesa."
            fields={[
                { name: "categoria", label: "Categoria", placeholder: "Digite a categoria" },
                { name: "name", label: "Nome", placeholder: "Digite o nome" },
                { name: "date", label: "Data", placeholder: "Digite a data" },
                { name: "formaPagamento", label: "Forma de Pagamento", placeholder: "Digite a forma de pagamento" },
                { name: "valor", label: "Valor", placeholder: "Digite o valor" }
            ]}
            onSubmit={handleAddDespesa}
            triggerLabel="Adicionar Despesa"
        />
    );
}
