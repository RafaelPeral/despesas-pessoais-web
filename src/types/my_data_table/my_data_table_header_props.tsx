export interface MyDataTableHeaderProps<T> {
    columns: (keyof T)[];
    selectAll: boolean;
    onToggleSelectAll: () => void;
    onSort: (key: keyof T) => void;
}
