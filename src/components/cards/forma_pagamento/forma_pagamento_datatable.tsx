import formapagamento from "@/mocks/forma_pagamento/forma_pagamento";
import { useState } from "react";
import { 
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from "@/components/ui/table";
import { 
    CardHeader,
    CardContent,
    CardDescription 
} from "@/components/ui/card";

export default function FormaPagamento_DataTable() {
    interface Item {
        id: number;
        nome: string;
        receita: number;
        despesa: number;
        total: number;
    }

    const data = formapagamento().data.data;
    const [items, setItems] = useState<Item[]>(data);
    const [sortConfig, setSortConfig] = useState<{ key: keyof Item; direction: 'ascending' | 'descending' }>({
        key: 'id',
        direction: 'ascending',
    });

    const handleSort = (key: keyof Item) => {
        let direction: 'ascending' | 'descending' = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
        
        // Usando uma nova cópia do array para evitar mutação
        const sortedItems = [...items].sort((a, b) => {
            if (a[key] < b[key]) {
                return direction === 'ascending' ? -1 : 1;
            }
            if (a[key] > b[key]) {
                return direction === 'ascending' ? 1 : -1;
            }
            return 0;
        });

        setItems(sortedItems);
    };

    return (
        <>
            <CardHeader>
                <CardDescription>Forma de Pagamento</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <input type="checkbox" />
                            </TableCell>
                            <TableCell
                                className="cursor-pointer"
                                onClick={() => handleSort('id')}
                            >
                                Id
                            </TableCell>
                            <TableCell
                                className="cursor-pointer"
                                onClick={() => handleSort('nome')}
                            >
                                Nome
                            </TableCell>
                            <TableCell
                                className="cursor-pointer"
                                onClick={() => handleSort('receita')}
                            >
                                Receita
                            </TableCell>
                            <TableCell
                                className="cursor-pointer"
                                onClick={() => handleSort('despesa')}
                            >
                                Despesa
                            </TableCell>
                            <TableCell
                                className="cursor-pointer"
                                onClick={() => handleSort('total')}
                            >
                                Total
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {items.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell>
                                    <input type="checkbox" />
                                </TableCell>
                                <TableCell>{item.id}</TableCell>
                                <TableCell>{item.nome}</TableCell>
                                <TableCell>{item.receita}</TableCell>
                                <TableCell>{item.despesa}</TableCell>
                                <TableCell>{item.total}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </>
    )
}