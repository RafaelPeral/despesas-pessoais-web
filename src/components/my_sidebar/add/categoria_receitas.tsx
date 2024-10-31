import { PlusSquareIcon } from "lucide-react"
import Add from "./add"
import CardCategoriaReceitaDatatable from "@/components/cards/categoria_receita/card_categoria_receita_datatable"

export default function CategoriaReceita() {
    return (
        <div>
            <Add add={<CardCategoriaReceitaDatatable />}>
                Adicionar Tabela de Categorias de Receitas
            </Add>
            <Add>
                Adicionar Grafico de Barras
            </Add>
            <div
                className='flex items-center gap-2 cursor-pointer p-2 text-sm'
            >
                <PlusSquareIcon size={30} className="min-w-5 max-w-5"/>
                <p>Adicionar Categoria de Receita</p>
            </div>
        </div>
    )
}