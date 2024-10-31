export interface MyDataTableProps<T> {
    columns: (keyof T)[];
    data: T[];
    onDeleteSelected?: (selectedItems: T[]) => void;
}
