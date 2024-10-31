// my_data_table_header_props.ts

export interface MyDataTableHeaderProps<T> {
    columns: (keyof T)[];
    selectAll: boolean;
    onToggleSelectAll: () => void;
    onSort: (key: keyof T) => void;
}
