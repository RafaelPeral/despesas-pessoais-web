export default interface DespesaProps {
    total: number
    cont: number
    data: [{
        id: number
        name: string
        category: string
        valor: number
        categoria: string
        date: string
        forma_pagamento_name: string
    }]
}