export interface Paging<ItemT> {
    count: number,
    pageCount: number
    itemsInCurrentPage: ItemT[]
}
