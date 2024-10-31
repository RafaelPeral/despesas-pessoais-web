import { PlusSquareIcon } from "lucide-react"
import CardFormaPagamentoDatatable from '../../cards/forma_pagamento/card_forma_pagamento_datatable'
import Add from "./add"
import FormaPagamentoBarChart from '../../cards/forma_pagamento/card_forma_pagamento_bar_chart'

export default function FormaPagamento() {
    return (
        <div>
            <Add add={<CardFormaPagamentoDatatable/>}>
                Adicionar Tabela de Formas de Pagamento
            </Add>
            <Add add={<FormaPagamentoBarChart/>}>
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