export interface MyDataTableProps<T> {
    columns: (keyof T)[];
    data: any[];
    onDeleteSelected?: (selectedItems: T[]) => void;
}
