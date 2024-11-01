import Add from "./add"
import CardReceitaDatatable from "@/components/cards/receita/card_receita_datatable"
import AddReceita from "@/components/adding/adding_receita"

export default function Receitas() {
    return (
        <div>
            <Add add={<CardReceitaDatatable />}>
                Adicionar Tabela de Receitas
            </Add>
            <AddReceita />
        </div>
    )
}