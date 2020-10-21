export interface SimpleTableState {
    pageNum: number;
    ordering?: any;
    count: number;
    pageCount: number;
    itemsInCurrentPage: any[];
    loadingData: boolean;

    exportLoadingActive: boolean;
    exportLoadingText: string;
}
