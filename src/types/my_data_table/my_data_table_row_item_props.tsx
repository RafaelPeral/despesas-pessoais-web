export interface MyDataTableRowItemProps<T> {
    item: T;
    columns: (keyof T)[];
    isSelected: boolean;
    onToggleSelect: (id: number) => void;
}
