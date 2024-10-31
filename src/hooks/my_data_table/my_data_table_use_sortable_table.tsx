// my_data_table_use_sortable_table.ts
import { useState } from "react";
import { MyDataTableSortConfig } from "@/types/my_data_table/my_data_table_sort_config";

export function useMyDataTableSortable<T>(initialData: T[]) {
    const [items, setItems] = useState(initialData);
    const [sortConfig, setSortConfig] = useState<MyDataTableSortConfig<T> | null>(null);

    const sortItems = (key: keyof T) => {
        const direction: 'ascending' | 'descending' =
            sortConfig?.key === key && sortConfig.direction === 'ascending'
                ? 'descending'
                : 'ascending';

        setSortConfig({ key, direction });

        const sortedItems = [...items].sort((a, b) => {
            if (a[key] < b[key]) return direction === 'ascending' ? -1 : 1;
            if (a[key] > b[key]) return direction === 'ascending' ? 1 : -1;
            return 0;
        });

        setItems(sortedItems);
    };

    const deleteSelectedItems = (selectedItems: Set<number>) => {
        const remainingItems = items.filter(item => !selectedItems.has((item as any).id));
        setItems(remainingItems);
        return remainingItems;
    };

    return { items, sortItems, deleteSelectedItems };
}
