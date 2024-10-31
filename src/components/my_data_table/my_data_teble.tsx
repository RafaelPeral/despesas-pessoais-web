// MyDataTable.tsx
import { Button } from "@/components/ui/button";
import { Table } from "@/components/ui/table";
import { MyDataTableProps } from "@/types/my_data_table/my_data_table_props";
import { useMyDataTableSortable } from "@/hooks/my_data_table/my_data_table_use_sortable_table";
import { useMyDataTableSelectable } from "@/hooks/my_data_table/my_data_table_use_selectable_items";
import { MyDataTableHeader } from "./my_data_table_header";
import { MyDataTableRowItem } from "./my_data_table_row_item";

export function MyDataTable<T extends { id: number }>({
    columns,
    data,
    onDeleteSelected,
}: MyDataTableProps<T>) {
    const { items, sortItems, deleteSelectedItems } = useMyDataTableSortable(data);
    const { selectedItems, selectAll, toggleSelectAll, toggleSelectItem } = useMyDataTableSelectable(items);

    const handleDeleteSelected = () => {
        const itemsToDelete = items.filter((item) => selectedItems.has(item.id));
        const remainingItems = deleteSelectedItems(selectedItems);
        if (onDeleteSelected) {
            onDeleteSelected(itemsToDelete);
        }
    };

    return (
        <>
            <Button 
                onClick={handleDeleteSelected} 
                disabled={selectedItems.size === 0} 
                className="mb-4"
            >
                Deletar Selecionados
            </Button>
            <Table>
                <MyDataTableHeader
                    columns={columns}
                    selectAll={selectAll}
                    onToggleSelectAll={toggleSelectAll}
                    onSort={sortItems}
                />
                {items.map((item) => (
                    <MyDataTableRowItem
                        key={item.id}
                        item={item}
                        columns={columns}
                        isSelected={selectedItems.has(item.id)}
                        onToggleSelect={toggleSelectItem}
                    />
                ))}
            </Table>
        </>
    );
}
