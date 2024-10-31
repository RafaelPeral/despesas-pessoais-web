import { useState } from "react";

export function useMyDataTableSelectable<T extends { id: number }>(data: T[]) {
    const [selectedItems, setSelectedItems] = useState<Set<number>>(new Set());
    const [selectAll, setSelectAll] = useState(false);

    const toggleSelectAll = () => {
        if (selectAll) {
            setSelectedItems(new Set());
        } else {
            setSelectedItems(new Set(data.map((item) => item.id)));
        }
        setSelectAll(!selectAll);
    };

    const toggleSelectItem = (id: number) => {
        const updatedSelectedItems = new Set(selectedItems);
        if (updatedSelectedItems.has(id)) {
            updatedSelectedItems.delete(id);
        } else {
            updatedSelectedItems.add(id);
        }
        setSelectedItems(updatedSelectedItems);
        setSelectAll(updatedSelectedItems.size === data.length);
    };

    return { selectedItems, selectAll, toggleSelectAll, toggleSelectItem };
}
