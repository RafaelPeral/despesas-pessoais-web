import Add from "./add"
import CardReceitaDatatable from "@/components/cards/receita/card_receita_datatable"

export default function Receitas() {
    return (
        <div>
            <Add add={<CardReceitaDatatable />}>
                Adicionar Tabela de Receitas
            </Add>
        </div>
    )
}