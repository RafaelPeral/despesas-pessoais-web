import AddCategoriaDespesa from "@/components/adding/adding_categoria_despesa"
import Add from "./add"
import CardCategoriaDespesaDatatable from "@/components/cards/categoria_despesa/card_categoria_despesa_datatable"
import CardCategoriaDespesaBarChart from "@/components/cards/categoria_despesa/card_categoria_despesa_bar_chart"

export default function CategoriaDespesas() {
    return (
        <div>
            <Add add={<CardCategoriaDespesaDatatable/>}>
                Adicionar Tabela de Categorias de Despesas
            </Add>
            <Add add={<CardCategoriaDespesaBarChart />}>
                Adicionar Grafico de Barras
            </Add>
            <AddCategoriaDespesa />
        </div>
    )
}