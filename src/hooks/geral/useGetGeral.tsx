import { useState, useEffect } from 'react';
import useGetDespesa from '@/hooks/despesa/useGetDespesa';
import useGetReceita from '@/hooks/receita/useGetReceita';
import {PieChartComponentProps} from '@/types/pie_chart';

type GeralError = string | null;

export const useGetGeral = (): [PieChartComponentProps | null, GeralError[]] => {
    const [data, setData] = useState<PieChartComponentProps | null>(null);
    const [error, setError] = useState<GeralError[]>([]);

    const [despesa, errordespesa] = useGetDespesa();
    const [receita, erroreceita] = useGetReceita();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedData = await Promise.all([despesa, receita]);
                setData({data: [
                    { name: 'Despesa', value: fetchedData[0]?.total || 0 },
                    { name: 'Receita', value: fetchedData[1]?.total || 0 },
                    { name: 'Montante', value: (fetchedData[1]?.total || 0) - (fetchedData[0]?.total || 0) }
                ]});
            } catch {
                setError([errordespesa, erroreceita]);
            }
        };

        fetchData();
    }, [despesa, receita, errordespesa, erroreceita]);

    return [data, error];
};
