import { TableCell, TableRow } from "@/components/ui/table";
import { MyDataTableHeaderProps } from "@/types/my_data_table/my_data_table_header_props";

export function MyDataTableHeader<T>({ columns, selectAll, onToggleSelectAll, onSort }: MyDataTableHeaderProps<T>) {
    return (
        <TableRow>
            <TableCell>
                <input
                    type="checkbox"
                    checked={selectAll}
                    onChange={onToggleSelectAll}
                />
            </TableCell>
            {columns.map((column) => (
                <TableCell
                    key={String(column)}
                    className="cursor-pointer"
                    onClick={() => onSort(column)}
                >
                    {column as string}
                </TableCell>
            ))}
        </TableRow>
    );
}
