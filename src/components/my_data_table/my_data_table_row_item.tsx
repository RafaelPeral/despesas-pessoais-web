// my_data_table_row_item.tsx
import { TableCell, TableRow } from "@/components/ui/table";
import { MyDataTableRowItemProps } from "@/types/my_data_table/my_data_table_row_item_props";

export function MyDataTableRowItem<T extends { id: number }>({
    item,
    columns,
    isSelected,
    onToggleSelect,
}: MyDataTableRowItemProps<T>) {
    return (
        <TableRow>
            <TableCell>
                <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => onToggleSelect(item.id)}
                />
            </TableCell>
            {columns.map((column) => (
                <TableCell key={String(column)}>
                    {String(item[column])}
                </TableCell>
            ))}
        </TableRow>
    );
}
