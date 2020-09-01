export interface SimpleTableState<ItemT> {
    pageNum: number
    count: number,
    pageCount: number
    itemsInCurrentPage: ItemT[]
}
