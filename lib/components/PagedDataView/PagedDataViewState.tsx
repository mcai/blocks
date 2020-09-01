export interface PagedDataViewState<ItemT> {
    pageNum: number
    count: number,
    pageCount: number
    itemsInCurrentPage: ItemT[]
}
