import { PlusSquareIcon } from "lucide-react"
import Add from "./add"
import CategoriaDespesaDatatable from "@/components/cards/categoria_despesa/categoria_despesa_datatable"

export default function CategoriaDespesas() {
    return (
        <div>
            <Add add={<CategoriaDespesaDatatable/>}>
                Adicionar Tabela de Categorias de Despesas
            </Add>
            <Add>
                Adicionar Grafico de Barras
            </Add>
            <div
                className='flex items-center gap-2 cursor-pointer p-2 text-sm'
            >
                <PlusSquareIcon size={30} className="min-w-5 max-w-5"/>
                <p>Adicionar Categoria de Despesas</p>
            </div>
        </div>
    )
}