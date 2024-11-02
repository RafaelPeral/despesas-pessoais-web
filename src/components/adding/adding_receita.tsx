import AddEntityDialog from "./adding_entity/adding_entity_dialog";
import { addAPIReceita } from "@/utils/api/APICore";
import { getAPIFormaPagamento, getAPICategoriaReceita } from "@/utils/api/APICore";
import CategoriaReceitaProps from "@/types/categoria_receita_props";

type FormData = Record<string, string>;

export default function AddReceita() {
    const formapagamento = async (): Promise<string[]> => {
        const data = await getAPIFormaPagamento();
        const repo = data.data.data.map((item: { name: string }) => item.name);
        return repo;
    };

    const categoria = async (): Promise<string[]> => {
        const data = await getAPICategoriaReceita();
        const repo = data.data.data.map((item: CategoriaReceitaProps) => item.name)
        return repo;
    };

    const handleAddReceita = (data: FormData): void => {
        addAPIReceita(data)
    };

    return (
        <AddEntityDialog
            title="Adicionar Receita"
            description="Insira os detalhes da nova receita."
            fields={[
                { name: "categoria", label: "Categoria", type: "dropdown", options: categoria },
                { name: "name", label: "Nome", placeholder: "Digite o nome" },
                { name: "date", label: "Data", placeholder: "Selecione a data", type: "date" },
                { name: "forma_pagamento_name", label: "Forma de Pagamento", type: "dropdown", options: formapagamento },
                { name: "valor", label: "Valor", placeholder: "Digite o valor" }
            ]}
            onSubmit={handleAddReceita}
            triggerLabel="Adicionar Receita"
        />
    );
}
