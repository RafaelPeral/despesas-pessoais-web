import { PlusSquareIcon } from "lucide-react"
import FormaPagamentoDatatable from '../../cards/forma_pagamento/forma_pagamento_datatable'
import Add from "./add"

export default function FormaPagamento() {
    return (
        <div>
            <Add add={<FormaPagamentoDatatable/>}>
                Adicionar Tabela de Formas de Pagamento
            </Add>
            <Add>
                Adicionar Grafico de Barras
            </Add>
            <div
                className='flex items-center gap-2 cursor-pointer p-2 text-sm'
            >
                <PlusSquareIcon size={30} className="min-w-5 max-w-5"/>
                <p>Adicionar Forma de Pagamento</p>
            </div>
        </div>
    )
}