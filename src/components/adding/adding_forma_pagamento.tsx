import AddEntityDialog from "./adding_entity/adding_entity_dialog";
import { addAPIFormaPagamento } from "@/utils/api/APICore";

type FormData = Record<string, string>;

export default function AddFormaPagamento() {
    const handleAddFormaPagamento = (data: FormData): void => {
        addAPIFormaPagamento(data)
    };

    return (
        <AddEntityDialog
            title="Adicionar Forma de Pagamento"
            description="Insira o nome da nova forma de pagamento."
            fields={[
                { name: "name", label: "Nome da Forma de Pagamento", placeholder: "Digite o nome" }
            ]}
            onSubmit={handleAddFormaPagamento}
            triggerLabel="Adicionar Forma de Pagamento"
        />
    );
}
