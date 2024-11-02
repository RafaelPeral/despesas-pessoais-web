import { getAPIFormaPagamento } from "@/utils/api/APICore"
import { useEffect, useState } from "react"
import FormaPagamentoProps from "@/types/forma_pagamento_props"

export default function useGetFormaPagamento() {
    const [data, setData] = useState<FormaPagamentoProps[] | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const repo = await getAPIFormaPagamento();
                if (repo && repo.data) {
                    setData(repo.data.data as FormaPagamentoProps[]);
                } else {
                    setError("Dados não encontrados.");
                }
            } catch (err) {
                console.error("Erro ao buscar formas de pagamento:", err);
                setError("Erro ao carregar dados das formas de pagamento.");
            }
        };
        fetchData();
    }, []);

    return [ data, error ] as const;
}