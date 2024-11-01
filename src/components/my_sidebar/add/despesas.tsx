import Add from "./add"
import CardDespesaDatatable from "@/components/cards/despesa/card_despesa_datatable"
import AddDespesa from "@/components/adding/adding_despesa"

export default function Despesas() {
    return (
        <div>
            <Add add={<CardDespesaDatatable />}>
                Adicionar Tabela de Despesas
            </Add>
            <AddDespesa />
        </div>
    )
}