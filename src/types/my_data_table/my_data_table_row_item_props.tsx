// my_data_table_row_item_props.ts

export interface MyDataTableRowItemProps<T> {
    item: T;
    columns: (keyof T)[];
    isSelected: boolean;
    onToggleSelect: (id: number) => void;
}
