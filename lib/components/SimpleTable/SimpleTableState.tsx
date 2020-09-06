export interface SimpleTableState {
    pageNum: number
    count: number,
    pageCount: number
    itemsInCurrentPage: any[]
    loadingData: boolean

    exportLoadingActive: boolean
    exportLoadingText: string
}
