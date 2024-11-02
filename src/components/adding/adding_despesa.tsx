import AddEntityDialog from "./adding_entity/adding_entity_dialog";
import { addAPIDespesa } from "@/utils/api/APICore";
import { getAPIFormaPagamento, getAPICategoriaDespesa } from "@/utils/api/APICore";
import CategoriaDespesaProps from '@/types/categoria_despesa_props';

type FormData = Record<string, string | number | Date>;

export default function AddDespesa() {
    const formapagamento = async (): Promise<string[]> => {
        const data = await getAPIFormaPagamento();
        const repo = data.data.data.map((item: { name: string }) => item.name);
        return repo;
    };

    const categoria = async (): Promise<string[]> => {
        const data = await getAPICategoriaDespesa();
        const repo = data.data.data.map((item: CategoriaDespesaProps) => item.name)
        return repo;
    };

    const handleAddDespesa = (data: FormData): void => {
        addAPIDespesa(data)
    };

    return (
        <AddEntityDialog
            title="Adicionar Despesa"
            description="Insira os detalhes da nova despesa."
            fields={[
                { name: "categoria", label: "Categoria", type: "dropdown", options: categoria },
                { name: "name", label: "Nome", placeholder: "Digite o nome" },
                { name: "date", label: "Data", placeholder: "Digite a data", type: "date" },
                { name: "forma_pagamento_name", label: "Forma de Pagamento", type: "dropdown", options: formapagamento },
                { name: "valor", label: "Valor", placeholder: "Digite o valor", type: "number" },
            ]}
            onSubmit={handleAddDespesa}
            triggerLabel="Adicionar Despesa"
        />
    );
}
