export interface MyDataTableSortConfig<T> {
    key: keyof T;
    direction: 'ascending' | 'descending';
}
