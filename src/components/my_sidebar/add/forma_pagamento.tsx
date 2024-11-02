import AddFormaPagamento from '@/components/adding/adding_forma_pagamento'
import CardFormaPagamentoDatatable from '../../cards/forma_pagamento/card_forma_pagamento_datatable'
import Add from "./add"
import FormaPagamentoBarChart from '../../cards/forma_pagamento/card_forma_pagamento_bar_chart'
import CardFormaPagamentoPieChart from '@/components/cards/forma_pagamento/card_forma_pagamento_pie_chart'

export default function FormaPagamento() {
    return (
        <div>
            <Add add={<CardFormaPagamentoDatatable/>}>
                Adicionar Tabela de Formas de Pagamento
            </Add>
            <Add add={<FormaPagamentoBarChart/>}>
                Adicionar Grafico de Barras
            </Add>
            <Add add={<CardFormaPagamentoPieChart/>}>
                Adicionar Grafico de Pizza
            </Add>
            <AddFormaPagamento />
        </div>
    )
}