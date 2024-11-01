import AddEntityDialog from "./adding_entity_dialog";

type FormData = Record<string, string>;

export default function AddFormaPagamento() {
    const handleAddFormaPagamento = (data: FormData): void => {
        console.log("Forma de pagamento adicionada:", data);
    };

    return (
        <AddEntityDialog
            title="Adicionar Forma de Pagamento"
            description="Insira o nome da nova forma de pagamento."
            fields={[
                { name: "formaPagamento", label: "Nome da Forma de Pagamento", placeholder: "Digite o nome" }
            ]}
            onSubmit={handleAddFormaPagamento}
            triggerLabel="Adicionar Forma de Pagamento"
        />
    );
}
