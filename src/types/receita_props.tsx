export default interface ReceitaProps {
    data:[{
        id: number,
        name: string,
        valor: number,
        date: string,
        categoria: string,
        forma_pagamento_name: string
    }]
    total: number
    cont: number
}