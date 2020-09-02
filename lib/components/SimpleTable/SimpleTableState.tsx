export interface SimpleTableState {
    pageNum: number
    count: number,
    pageCount: number
    itemsInCurrentPage: any[]

    exportLoadingActive: boolean
    exportLoadingText: string
}
