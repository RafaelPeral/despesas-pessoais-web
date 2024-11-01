import AddCategoriaReceita from "@/components/adding/adding_categoria_receita"
import Add from "./add"
import CardCategoriaReceitaDatatable from "@/components/cards/categoria_receita/card_categoria_receita_datatable"
import CardCategoriaReceitaBarChart from "@/components/cards/categoria_receita/card_categoria_receita_bar_chart"

export default function CategoriaReceita() {
    return (
        <div>
            <Add add={<CardCategoriaReceitaDatatable />}>
                Adicionar Tabela de Categorias de Receitas
            </Add>
            <Add add={<CardCategoriaReceitaBarChart />}>
                Adicionar Grafico de Barras
            </Add>
            <AddCategoriaReceita />
        </div>
    )
}