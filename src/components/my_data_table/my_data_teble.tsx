import { Button } from "@/components/ui/button";
import { Table, TableBody } from "@/components/ui/table";
import { MyDataTableProps } from "@/types/my_data_table/my_data_table_props";
import { useMyDataTableSortable } from "@/hooks/my_data_table/my_data_table_use_sortable_table";
import { useMyDataTableSelectable } from "@/hooks/my_data_table/my_data_table_use_selectable_items";
import { MyDataTableHeader } from "./my_data_table_header";
import { MyDataTableRowItem } from "./my_data_table_row_item";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
} from "@/components/ui/dialog"

export function MyDataTable<T extends { id: number }>({
    columns,
    data,
    onDeleteSelected,
}: MyDataTableProps<T>) {
    const { items, sortItems, deleteSelectedItems } = useMyDataTableSortable(data);
    const { selectedItems, selectAll, toggleSelectAll, toggleSelectItem } = useMyDataTableSelectable(items);

    const handleDeleteSelected = () => {
        const itemsToDelete = items.filter((item) => selectedItems.has(item.id));
        deleteSelectedItems(selectedItems);
        if (onDeleteSelected) {
            itemsToDelete.forEach((item) => {
                onDeleteSelected(item);
            })
        }
    };

    return (
        <>
            <Table>
                <TableBody>
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
                </TableBody>
            </Table>

            <Dialog>
                <DialogTrigger className="mt-6" disabled={selectedItems.size === 0} asChild>
                    <Button disabled={selectedItems.size === 0}>Deletar selecionados</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Deletar selecionados</DialogTitle>
                        <DialogDescription>
                            Tem certeza que deseja deletar os itens selecionados?
                        </DialogDescription>
                    </DialogHeader>
                    <DialogClose asChild>
                        <Button onClick={handleDeleteSelected} disabled={selectedItems.size === 0} variant="destructive" className="mt-2">Deletar</Button>
                    </DialogClose>
                </DialogContent>
            </Dialog>
        </>
    );
}
