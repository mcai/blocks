export interface PagedTableState<ItemT> {
    pageNum: number
    count: number,
    pageCount: number
    itemsInCurrentPage: ItemT[]
}
