export default interface DespesaProps {
    total: number;
    cont: number;
    data: {
        id: number;
        name: string;
        category: string;
        valor: number;
        categoria: string;
        date: [];
        forma_pagamento_name: string;
    }[];
}
