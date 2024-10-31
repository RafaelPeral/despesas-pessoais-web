import { PlusSquareIcon } from "lucide-react"
import Add from "./add"

export default function CategoriaDespesas() {
    return (
        <div>
            <Add>
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