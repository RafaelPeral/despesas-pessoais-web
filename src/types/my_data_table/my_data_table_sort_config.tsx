// my_data_table_sort_config.ts

export interface MyDataTableSortConfig<T> {
    key: keyof T;
    direction: 'ascending' | 'descending';
}
